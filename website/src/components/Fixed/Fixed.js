import React from 'react';
import { Link } from 'react-router-dom';

import "./Fixed.css";

const Fixed = () => {
	return(
		<nav className="Fixed">
			<div className="title">
				<h1 className='name'>Noam Raz</h1>
				<h2 className='secondary'>Game Developer & Programmer</h2>
				<div className='bg'></div>
			</div>
			<div className="sidebar">
				<ul className="menu">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/blog">Blog</Link></li>
				</ul>
			</div>
		</nav>
	)
}

export default Fixed;