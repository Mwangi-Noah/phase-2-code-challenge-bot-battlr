import React, { useState, useEffect } from "react";
import BotsCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotTypes from './BotTypes';
import BotSearch from './BotSearch';
import FilterBots from './FilterBots';
import './index.css';

function FetchContainer() {
  const [allBots, setAllBots] = useState([]);
  const [selectBot, setSelectBot] = useState(undefined);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => res.json())
      .then(bots => setAllBots(setBots(bots)))
  }, []);

  const setBots = (bots) => {
    return bots.map(bot => {
      bot.owned = false;
      return bot;
    });
  };

  const clickBot = (bot) => {
    setSelectBot(bot);
  };

  const addBot = (selectedBot) => {
    let highlight = allBots.map(bot => {
      if (bot.id === selectedBot.id) {
        bot.owned = !bot.owned;
        return bot;
      } else {
        return bot;
      }
    });
    setAllBots(highlight);
  };

  const removeBot = (selectedBot) => {
    let highlight = allBots.map((bot) => {
      if (bot.id === selectedBot.id) {
        bot.owned = !bot.owned;
        return bot;
      } else {
        return bot;
      }
    });
    setAllBots(highlight);
  };

  const filterFreeBots = () => {
    let freeBots = []
    allBots.map(bot => {
      if (bot.owned === false) {
        freeBots.push(bot);
      }
    });
    if (filter !== 'All') {
      freeBots = freeBots.filter(bot => bot.bot_class === filter);
    }
    if (query) {
      freeBots = freeBots.filter(bot => bot.name.toLowerCase().includes(query.toLowerCase()));
    }
    return freeBots;
  };

  const filterOwnedBots = () => {
    let ownedBots = []
    allBots.map(bot => {
      if (bot.owned === true) {
        ownedBots.push(bot);
      }
    });
    let filtered = ownedBots.filter(bot => bot.name.toLowerCase().includes(query.toLowerCase()));
    return filtered;
  };

  const handleClear = () => {
    setQuery('');
  };

  const handleChange = (query) => {
    setQuery(query);
  };

  const clearSpec = () => {
    setSelectBot(undefined);
  };

  const filterChange = (value) => {
    setFilter(value);
  };

  return (
    <div className="container">
      <header>
        <h1>Bot Battlr</h1>
      </header>
      <div className="content">
        <BotSearch handleClear={handleClear} handleChange={handleChange} />
        <FilterBots filterChange={filterChange} />
        <div className="army">
          <YourBotArmy bots={filterOwnedBots()} addBot={clickBot} />
        </div>
        {selectBot ? (
          <div className="bot-types-container">
            <BotTypes
              bot={selectBot}
              clearSpec={clearSpec}
              addBot={addBot}
              removeBot={removeBot}
            />
          </div>
        ) : (
            <BotsCollection bots={filterFreeBots()} addBot={clickBot} />
      )}
    </div>
    </div>
  );
}

export default FetchContainer;