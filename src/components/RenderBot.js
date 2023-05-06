import React, { useState, useEffect } from "react";
import BotsCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotTypes from "./BotTypes";
import SearchBot from "./SearchBot";
import FilterBots from "./FilterBots";
import "./RenderBots.css";

function RenderBot() {
  const [allBots, setAllBots] = useState([]);
  const [selectBot, setSelectBot] = useState(undefined);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => res.json())
      .then(bots => {
        const botsWithOwned = bots.map(bot => {
          return {
            ...bot,
            owned: false
          };
        });
        setAllBots(botsWithOwned);
      });
  }, []);

  const clickBot = (bot) => {
    setSelectBot(bot);
  };

  const addBot = (selectedBot) => {
    setAllBots(prevBots => {
      return prevBots.map(bot => {
        if (bot.id === selectedBot.id) {
          return {
            ...bot,
            owned: !bot.owned
          };
        } else {
          return bot;
        }
      });
    });
  };

  const filterFreeBots = () => {
    let freeBots = allBots.filter(bot => !bot.owned);
    if (filter !== 'All') {
      freeBots = freeBots.filter(bot => bot.bot_class === filter);
    }
    if (query) {
      freeBots = freeBots.filter(bot => bot.name.toLowerCase().includes(query.toLowerCase()));
    }
    return freeBots;
  };

  const filterOwnedBots = () => {
    let ownedBots = allBots.filter(bot => bot.owned);
    if (query) {
      ownedBots = ownedBots.filter(bot => bot.name.toLowerCase().includes(query.toLowerCase()));
    }
    return ownedBots;
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
    <div>
      <SearchBot handleClear={handleClear} handleChange={handleChange} />
      <br></br>
      <FilterBots filterChange={filterChange} />
      <YourBotArmy bots={filterOwnedBots()} addBot={clickBot} />
      <br></br>
      {selectBot ? (
        <BotTypes bot={selectBot} clearSpec={clearSpec} addBot={addBot} />
      ) : (
        <BotsCollection bots={filterFreeBots()} addBot={clickBot} />
      )}
    </div>
  );
    
}

export default RenderBot;