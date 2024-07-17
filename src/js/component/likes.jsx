import React, { Component, useContext, useEffect } from "react";
import { Context } from '../store/appContext'; 


const Likes = ({ planetName }) => {
    const { store, actions } = useContext(Context);

    console.log("Planet name:", planetName);
    console.log("Is favorite:", store.favorites.includes(planetName));

    return (
        <button 
            style={{ border: '2px solid yellow' }} 
            onClick={() => actions.toggleFavorite(planetName)}
        >
            <i className={store.favorites.includes(planetName) ? "fas fa-heart" : "far fa-heart"} 
               style={{ color: "#FFD43B" }}></i>
        </button>
    );
};

export default Likes;