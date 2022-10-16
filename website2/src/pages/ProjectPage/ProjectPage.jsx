import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from "framer-motion";

import "./ProjectPage.css";

import Fixed from '../../components/Fixed/Fixed';
import { useState } from 'react';
import { useEffect } from 'react';
import Project from '../../components/Project/Project';

const ProjectPage = ({mouseEnter, mouseExit}) => {
	// get project data from db (firebase?)
	const projectName = "shimi";

	return(
		<HelmetProvider>
		<Helmet>
			<title>Noam Raz - Project {projectName}</title>
		</Helmet>

		<div className="ProjectPage">
			<h1>Coming soon...</h1>
		</div>
		</HelmetProvider>
	)
}

export default ProjectPage;