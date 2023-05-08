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
    <div className="bot-army-container">
      <div>
        <h3>My Bot Army</h3>
        {bots && bots.length > 0 ? (
          <div className="bot-row">
            {bots.map((bot) => (
              <BotItem
                key={bot.id}
                bot={bot}
                inArmy={true}
                releaseFromArmy={() => handleRelease(bot)}
              >
                <button className="discharge-button" onClick={() => handleDischarge(bot)}>x</button>
              </BotItem>
            ))}
          </div>
        ) : (
          <p>You don't have any bots in your army.</p>
        )}
      </div>
    </div>
  );
}

export default YourBotArmy;