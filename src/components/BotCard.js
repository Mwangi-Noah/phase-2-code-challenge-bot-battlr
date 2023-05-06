import React from 'react';

function BotCard({ bot, enlistBot }) {
  const handleClick = () => {
    enlistBot(bot);
  };

  return (
    <div className="ui card">
      <div className="image">
      
        <img src={bot.avatar_url} alt={bot.name} />
      </div>
      <div className="content">
        <div className="header">{bot.name}</div>
        <div className="meta">
          <span className="date">{bot.catchphrase}</span>
        </div>
      </div>
      <div className="extra content">
        <button className="ui olive basic button" onClick={handleClick}>
          Enlist
        </button>
      </div>
    </div>
  );
}

export default BotCard;