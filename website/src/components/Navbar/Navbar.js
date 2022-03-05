import React from 'react';
import { Link } from 'react-router-dom';

import "./Navbar.css";

const Navbar = () => {
	return(
		<nav className="Navbar">
			<ul className="links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
            </ul>
		</nav>
	)
}

export default Navbar;