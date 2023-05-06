import React from "react";
import BotItem from "./BotItem";

function BotCollection({ bots, addBot }){
  function renderBots(){
    return bots.map((bot) => {
      return <BotItem key={bot.id} bot={bot} addBot={addBot} />;
    });
  };

  return (
    <div className="ui four column grid">
      <div className="row">{renderBots()}</div>
    </div>
  );
};

export default BotCollection;