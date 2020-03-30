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
               <div>{player.surname}</div>
         <div>{player.name}</div>

               
            </div>
           </div>
        </div>
</div>

      ))
    );
}
