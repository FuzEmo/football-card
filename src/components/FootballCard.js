import React from "react";
import {useFetchPlayers} from "../Players";
import {useEffect} from "react";
import $ from "jquery";



export const FootballCard = () => {
  
  useEffect (() =>{
    $('.flip').click(function() {
      $(this).find('.card').addClass('flipped').mouseleave(function() {
        $(this).removeClass('flipped');
      });
      return true;
    });
  })
    const players = useFetchPlayers();
        const Players = players.players;
        console.log(Players);

    return  ( 
         Players.map((player) => (
<div class="flip">
        <div class="card" >
            <div class=" face front">
                <div class="player-image-container"> 
                <img class="player-image"
                     alt='player'
                     src={player.picture}></img>
                 </div>
            <div class="team-image"/>
            <div class=" face back"> 

            <div class="player-name">{player.name}</div>
            <div class="player-surname">{player.surname}</div>
          
                <div class="stats">
                    <div class="matches">{player.matches}
                    <br/>
                    <a>Matches</a>
                    </div>
                    <div class="goals">{player.goals}
                    <br/>
                    <a>Goals</a>
                    </div>
                    <div class="asists">{player.asists}
                    <br/>
                    <a>Asists</a>
                    </div>
                <div class="player-info">
                    <div class="player-position">
                      <a>Position</a>
                      <br/>
                      {player.position}</div> 
                    <div className="flag-container">    
                <img
                    class="flag"
                    src={player.flag}
                     alt='flag'
                    ></img>
                 </div> 
                   <div class="nationality">
                     {player.nationality} 
                     </div> 
                 <div class="value">
                    <h1>{player.value} € </h1>
                  </div>  
                </div>
                </div>
            </div>
           </div>
        </div>
</div>

      ))
    );
}
