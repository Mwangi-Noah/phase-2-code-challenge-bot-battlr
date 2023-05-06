import React from 'react';
import BotItem from './BotItem';

function YourBotArmy({ bots, releaseFromArmy, dischargeFromService }) {
  const handleRelease = (bot) => {
    releaseFromArmy(bot);
  };

  const handleDischarge = (bot) => {
    dischargeFromService(bot);
  };

  return (
    <div className="ui segment inverted olive bot-army-container">
      <h3>My Bot Army</h3>
      {bots && bots.length > 0 ? (
        <div className="ui four cards">
          {bots.map((bot) => (
            <BotItem
              key={bot.id}
              bot={bot}
              inArmy={true}
              releaseFromArmy={() => handleRelease(bot)}
              dischargeFromService={() => handleDischarge(bot)}
            />
          ))}
        </div>
      ) : (
        <p>You don't have any bots in your army.</p>
      )}
    </div>
  );
}

export default YourBotArmy;