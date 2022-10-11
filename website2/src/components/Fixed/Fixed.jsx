import React from 'react';
import { Link } from 'react-router-dom';

import LinkedIn from "../../assets/social media/linkedin.svg"
import Instagram from "../../assets/social media/instagram.svg"
import GitHub from "../../assets/social media/github.svg"

import "./Fixed.css";

const Fixed = ({onEnter, onExit}) => {
	return(<>
		<div className="difference">
			<div className="socials">
				<a href="https://www.linkedin.com/in/itsnoamraz/" target="_blank" onMouseEnter={onEnter} onMouseLeave={onExit} ><img src={LinkedIn}></img></a>
				<a href="https://www.github.com/UrMango/" target="_blank" onMouseEnter={onEnter} onMouseLeave={onExit} ><img src={GitHub}></img></a>
				<a href="https://www.instagram.com/realn0am/" target="_blank" onMouseEnter={onEnter} onMouseLeave={onExit} ><img src={Instagram}></img></a>
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