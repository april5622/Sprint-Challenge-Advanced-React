import React from 'react';
import PlayerCard from "./PlayerCard";


function Players (props) {
    //console.log("player is getting called");
    return (
        <div>
        {props.players.map(player =>(
                <PlayerCard player={player} key={player.created}/>
            ))}
        </div>
    )
};

export default Players;