import React, { useEffect } from "react";
import {useFetchPlayers} from "../Players"



export const FootballCard = () => {

    const players = useFetchPlayers();

        const Players = players.players;
        console.log(Players);

    return  ( 
         Players.map((player) => (

 <div className="card-main" >
        <div className="card-front">
            <div className="player-image-container"> 
            <img className="player-image"
                 alt='player'
                 src={player.picture}></img>
        </div>
        <div className="team-image"/>
        <div className="card-back">  
           <div>Stats </div>

        </div>
       </div>
  </div>

      ))
    );
}
