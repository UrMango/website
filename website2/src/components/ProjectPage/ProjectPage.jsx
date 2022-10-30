import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from "framer-motion";

import "./ProjectPage.css";

import { useState } from 'react';
import { useEffect } from 'react';

// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore';

// const app = initializeApp({ 
// 	apiKey: "AIzaSyDiF3DY2xhuNiiaMLIfeK8Sb_Qdt_86QxI",
// 	authDomain: "mywebsite-50452.firebaseapp.com",
// 	projectId: "mywebsite-50452",
// 	storageBucket: "mywebsite-50452.appspot.com",
// 	messagingSenderId: "83983043926",
// 	appId: "1:83983043926:web:e1aa43b22e5966124a5af7",
// 	measurementId: "G-QL1TMFD7KX"
// });

// const firestore = getFirestore(app);

const ProjectPage = ({projectName, header, textColor, color, category, year, description, mouseEnter, mouseExit, children}) => {

	return(
		<HelmetProvider>
		<Helmet>
			<title>Noam Raz - Project {projectName}</title>
		</Helmet>

		<div className="ProjectPage"  style={{background: `linear-gradient(180deg, rgba(2,4,8,1) 0%, ${color} 25%, rgba(2,4,8,1) 100%)`}}>
			<div className="projectdetails">
				<div className='header' style={{backgroundImage: `url("${header}")`}}></div>
				<h1 className='name' style={{color: textColor}}>{projectName}</h1>
				<div className="separator"></div>
				<div className="data">
					<div className="quickAnswers">
						<div className="category">
							<h2>Category</h2>
							<h4>{category}</h4>
						</div>
						<div className="Year">
							<h2>Year</h2>
							<h4>{year}</h4>
						</div>
					</div>
					<div className="description">
						{description}
					</div>
				</div>
				{ children }
			</div>
		</div>
		</HelmetProvider>
	)
}

export default ProjectPage;