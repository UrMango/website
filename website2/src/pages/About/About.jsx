import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import "./About.css"

const About = () => {
	return(
		<HelmetProvider>
			<Helmet>
				<title>Noam Raz - About</title>
			</Helmet>
			<div className="About">
				<h1>Coming soon...</h1>
			</div>
		</HelmetProvider>
	)
}

export default About;