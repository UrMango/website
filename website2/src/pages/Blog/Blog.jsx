import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import "./Blog.css"

const Blog = () => {
	return(
		<HelmetProvider>
			<Helmet>
				<title>Noam Raz - Blog</title>
			</Helmet>
			<div className="Blog">
				<h1>Coming soon...</h1>
			</div>
		</HelmetProvider>
	)
}

export default Blog;