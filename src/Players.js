import { useState, useEffect } from "react";

export const useFetchPlayers = () => {
    const [players,setPlayers] = useState([]);

    useEffect (() =>{
        fetch("https://footballplayer-api.herokuapp.com/api/players")
        .then(res => res.json())
        .then(data => {
            setPlayers (data.players);
        });
    }, []);
    return{
        players:players
    }
};