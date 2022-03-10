import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import Profile from "../../assets/profile.png";
import YinYang from "../../assets/yin-and-yang.png";
import Mango from "../../assets/mango.png";
import "./Home.css";

import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
	return(
		<HelmetProvider>
		<Helmet>
			<title>Noam Raz - Home</title>
		</Helmet>
		<div className="Home">
			<div className="circle"></div>
			<div className="circle1"></div>
			<img className="yin-yang" src={YinYang}></img>
			<img className="mango" src={Mango}></img>
			<main>
				<section className="glass">
					<Navbar/>
					<div className="content">
						<img className="profile-image" src={Profile}></img>
						<h1 className="name">Noam Raz</h1>
						<h2 className="secondary">Game Developer & Programmer</h2>
						<h5 className="description">A Game developer & Programmer with a real passion for my works and projects.</h5>
						<Link className="portfolio" to="/portfolio">My Portfolio</Link>
					</div>
				</section>
			</main>
		</div>
		</HelmetProvider>
	)
}

export default Home;