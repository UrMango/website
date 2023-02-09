import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewlineText from '../../helper/NewLineText';
import "./Projects.css"

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Project from '../Project/Project';

import SableCover from "../../assets/projects/sable2.webp"
import PsychobotCover from "../../assets/projects/psychobot.webp"
import TrivYupCover from "../../assets/projects/trivyup.webp"
import DotCover from "../../assets/projects/dot.webp"
import MessageCover from "../../assets/projects/message.webp"
import MangoCover from "../../assets/projects/mango.webp"
import HamesTahamusCover from "../../assets/projects/hamestahamus.webp"
import { useState } from 'react';

const Projects = ({filterChange, filter, onEnter, onExit}) => {
	const isMobile = () =>  {
		if(window.innerWidth > 768)
			return false;
		else
			return true;
	}

	const allProjects = [
		<Project type={["Video Games", "Services"]} delay={0.3} onEnter={onEnter} onExit={onExit} title="Sable World - Social Platform" image={ SableCover } projectId={"sable"}/>,
		<Project type={["Video Games", "Web", "AI"]} delay={0.6} onEnter={onEnter} onExit={onExit} title="The Mango - Cyber & Coding challenges" image={ MangoCover } projectId={"mango"}/>,
		<Project type={["AI", "Web"]} delay={0.6} onEnter={onEnter} onExit={onExit} title="PsychoBot - Emotional AI" image={ PsychobotCover } projectId={"psychobot"}/>,
		<Project type={["Web"]} delay={0.9} onEnter={onEnter} onExit={onExit} title="TrivYup - Quiz Website" image={ TrivYupCover } projectId={"trivyup"}/>,
		<Project type={["Web", "Services"]} delay={0.9} onEnter={onEnter} onExit={onExit} title="Dot - Custom Helmets" image={ DotCover } projectId={"dot"}/>,
		<Project type={["Video Games"]} delay={1.2} onEnter={onEnter} onExit={onExit} title="Message - Keep It Alive" image={ MessageCover } projectId={"message"}/>,
		// <Project type={["Video Games"]} delay={1.2} onEnter={onEnter} onExit={onExit}title="Hames Tahamus - 3D Game" image={ HamesTahamusCover } projectId={"humus"}/>
	]

	const [projects, setProjects] = useState([]);

	useEffect(() => {
		if(filter == "All") {
			setProjects(allProjects)
		} else {
			console.log(allProjects[0].props.type)
			setProjects(allProjects.filter((project, i) => {
				return project.props.type.includes(filter);
			}));
		}
	}, [filter]);

	return(
		<div className="Projects">
				<h1 className="name">Projects</h1>
				<h2 className="filter">Filter by <a onClick={filterChange}>All</a>/<a onClick={filterChange}>Services</a>/<a onClick={filterChange}>Video Games</a>/<a onClick={filterChange}>Web</a>/<a onClick={filterChange}>AI</a></h2>
				<div className="projects-list">
					{projects[0]}
					{projects[1]}
				</div>
				<div className="projects-list" style={isMobile() ? {} : {marginLeft: "-152px", marginTop: "25px"}}>
					{projects[2]}
					{projects[3]}
				</div>
				<div className="projects-list" style={isMobile() ? {} : {marginLeft: "205px", marginTop: "25px"}}>
					{projects[4]}
					{projects[5]}
				</div>
				<a className="loadBtn" onMouseEnter={onEnter} onMouseLeave={onExit} >More ↓</a>
		</div>
	)
}

export default Projects;