import React from "react";

function BotItem ({ bot, addBot, inArmy, releaseFromArmy, dischargeFromService }) {
  
  let botType;

  switch (bot.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }

  const handleClick = () => {
    if (inArmy) {
      releaseFromArmy(bot);
    } else {
      addBot(bot);
    }
  };

  return (
    <div className="column">
      <div
        className="card"
        key={bot.id}
        onClick={handleClick}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name} {botType}
          </div>

          <div className="catchphrase">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="stat-details">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotItem;