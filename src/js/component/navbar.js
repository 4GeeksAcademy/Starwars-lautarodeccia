import React, { Component, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	


	const handleRemoveFavorite = (name) => {
        actions.removeFavorite(name);
    };
	return (
		<nav className="navbar bg-transparent">
		<Link to="/">
			<img src="https://media.forgecdn.net/avatars/thumbnails/195/585/256/256/636880049707923228.png" className="" style={{ width: '220px', height: '220px', marginLeft: "20px" }} />
		</Link>
		<div className="ml-auto dropdown">
			<button style={{ marginRight: "20px", background: "rgb(233,215,164)", color: "rgb(189,153,52)" }} type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
				Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
			</button>
			<ul className="dropdown-menu dropdown-menu-end">
				{store.favorites.length > 0 ? (
					store.favorites.map((fav, index) => (
						<li key={index} className="d-flex align-items-center">
							<button className="dropdown-item" type="button">{fav}</button>
							<button className="btn btn-link text-danger" onClick={() => handleRemoveFavorite(fav)}>
								<i className="fas fa-trash-alt"></i>
							</button>
						</li>
					))
				) : (
					<li><button className="dropdown-item" type="button">No favorites</button></li>
				)}
			</ul>
		</div>
	</nav>

	);
};