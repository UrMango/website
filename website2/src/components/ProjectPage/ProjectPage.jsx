import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from "framer-motion";

import "./ProjectPage.css";

import { useState } from 'react';
import { useEffect } from 'react';
import NewlineText from '../../helper/NewLineText';

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

const ProjectPage = ({projectName, header, textColor, color, categories, year, description, mouseEnter, mouseExit, children}) => {

	return(
		<HelmetProvider>
		<Helmet>
			<title>Noam Raz - Project {projectName}</title>
		</Helmet>

		<div className="ProjectPage"  style={{background: `radial-gradient(circle, ${color} 0%, rgba(2,4,8,1) 90%)`, backgroundAttachment: "fixed"}}>
			<div className="projectdetails">
				<div className='header' style={{backgroundImage: `url("${header}")`}}></div>
				<h2 className='name' style={{color: textColor}}>{projectName}</h2>
				<div className="separator"></div>
				<div className="data">
					<div className="quickAnswers">
						<div className="category">
							<h6 className='dataTitle' style={{color: textColor}}>Category</h6>
							<ul>
								{categories.map(category => {
									return <p className='dataContent'>{category}</p>
								})}
							</ul>
						</div>
						<div className="year">
							<h6 className='dataTitle' style={{color: textColor}}>Year</h6>
							<p className='dataContent'>{year}</p>
						</div>
					</div>
					<div className="description">
						<NewlineText text={description} />
					</div>
				</div>
				{ children }
			</div>
		</div>
		</HelmetProvider>
	)
}

export default ProjectPage;