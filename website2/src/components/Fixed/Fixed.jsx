import React from 'react';
import { Link } from 'react-router-dom';

import LinkedIn from "../../assets/social media/linkedin.svg"
import Instagram from "../../assets/social media/instagram.svg"
import GitHub from "../../assets/social media/github.svg"

import { motion, useAnimation } from "framer-motion";

import "./Fixed.css";

const Fixed = ({onEnter, onExit}) => {
	const controls = [useAnimation(), useAnimation(), useAnimation()];

	const hover = {
		visible: {
			scale: 1,
			transition: {
				duration: .2
			}
		},
		hover: {
			scale: 1.2, 
			transition: {
				duration: .2
			}
		}
	};

	const onMouseEnter = (id) => {
		onEnter();
		controls[id].start("hover");
	}
	
	const onMouseExit = (id) => {
		onExit();
		controls[id].start("visible");
	}
	return(<>
		<div className="difference">
			<div className="socials">
				<a href="https://www.linkedin.com/in/itsnoamraz/" target="_blank" ><motion.img src={LinkedIn} onMouseEnter={() => onMouseEnter(0)} onMouseLeave={() => onMouseExit(0)} animate={controls[0]} variants={hover} initial="visible"></motion.img></a>
				<a href="https://www.github.com/UrMango/" target="_blank"><motion.img src={GitHub} onMouseEnter={() => onMouseEnter(1)} onMouseLeave={() => onMouseExit(1)} animate={controls[1]} variants={hover} initial="visible"></motion.img></a>
				<a href="https://www.instagram.com/realn0am/" target="_blank"><motion.img src={Instagram} onMouseEnter={() => onMouseEnter(2)} onMouseLeave={() => onMouseExit(2)} animate={controls[2]} variants={hover} initial="visible"></motion.img></a>
			</div>
		</div>
		<nav className="Fixed">
			<div className="title" onMouseEnter={onEnter} onMouseLeave={onExit} >
				<h1 className='name'>Noam Raz</h1>
				<h2 className='secondary'>Game Developer & Programmer</h2>
				<div className='bg'></div>
			</div>
			<div className="sidebar">
				<ul className="menu">
					<li><Link to="/" onMouseEnter={onEnter} onMouseLeave={onExit} >Home</Link></li>
					<li><Link to="/blog" onMouseEnter={onEnter} onMouseLeave={onExit} >Blog</Link></li>
					<li><Link to="/about" onMouseEnter={onEnter} onMouseLeave={onExit} >About</Link></li>
				</ul>
			</div>
		</nav>
		</>
	)
}

export default Fixed;