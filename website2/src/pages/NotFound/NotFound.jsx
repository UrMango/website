import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const NotFound = () => {
	return(
		<HelmetProvider>
			<Helmet>
				<title>Noam Raz - 404</title>
			</Helmet>
			<div>
				<h1>404 - Not the page you're looking for.</h1>
				<h2>I guess?</h2>
			</div>
		</HelmetProvider>
	)
}

export default NotFound;