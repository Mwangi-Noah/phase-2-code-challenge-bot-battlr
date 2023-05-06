import React from "react";

function BotTypes(props) {
  const { bot, clearSpec, addBot, removeBot } = props;

  let botType;

  switch (bot.bot_class) {
    case "Assault":
      botType = <i className="icon large circular military" />;
      break;
    case "Defender":
      botType = <i className="icon large circular shield" />;
      break;
    case "Support":
      botType = <i className="icon large circular ambulance" />;
      break;
    default:
      botType = <div />;
  }

  const handleEnlistClick = () => {
    addBot(bot);
  };

  const handleRemoveClick = () => {
    removeBot(bot);
  };

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={bot.avatar_url}
              onClick={bot.owned ? handleRemoveClick : handleEnlistClick}
            />
          </div>
          <div className="twelve wide column">
            <h2>Name: {bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            <div className="ui grid">
              <div className="six wide column">
                <strong>
                  Class: {bot.bot_class} {botType}
                </strong>
              </div>
              <div className="four wide column">
                <div className="ui three column grid">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{bot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{bot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{bot.armor}</strong>
                  </div>
                </div>
              </div>
              <div className="six wide column">
                <button className={`ui button fluid ${bot.owned ? 'red' : 'green'}`} onClick={bot.owned ? handleRemoveClick : handleEnlistClick}>
                  {bot.owned ? 'Remove' : 'Enlist'}
                </button>
              </div>
            </div>
            <button className="ui button fluid" onClick={clearSpec}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotTypes;