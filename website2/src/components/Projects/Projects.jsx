import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewlineText from '../../helper/NewLineText';
import "./Projects.css"

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Project from '../Project/Project';

import SableCover from "../../assets/projects/sable2.png"
import PsychobotCover from "../../assets/projects/psychobot.png"
import TrivYupCover from "../../assets/projects/trivyup.png"
import DotCover from "../../assets/projects/dot.png"
import MessageCover from "../../assets/projects/message.png"
import HamesTahamusCover from "../../assets/projects/hamestahamus.png"

const Projects = ({filterChange, onEnter, onExit}) => {

	const isMobile = () =>  {
		if(window.innerWidth > 768)
			return false;
		else
			return true;
	}

	return(
		<div className="Projects">
				<h1 className="name">Projects</h1>
				<h2 className="filter">Filter by <a onClick={filterChange}> All </a> / <a onClick={filterChange}>Games</a> / <a onClick={filterChange}>Web</a> / <a onClick={filterChange}>AI</a></h2>
				<div className="projects-list">
					<Project delay={0.3} onEnter={onEnter} onExit={onExit} title="Sable World - Social Platform" image={ SableCover } projectId={1}/>
					<Project delay={0.6} onEnter={onEnter} onExit={onExit} title="PsychoBot - Emotional AI" image={ PsychobotCover } projectId={2} style={isMobile() ? {} : { marginLeft: "25px" }}/>
				</div>
				<div className="projects-list" style={isMobile() ? {} : {marginLeft: "-152px", marginTop: "25px"}}>
					<Project delay={0.6} onEnter={onEnter} onExit={onExit} title="TrivYup - Quiz Website" image={ TrivYupCover } projectId={3}/>
					<Project delay={0.9} onEnter={onEnter} onExit={onExit} title="Dot - Custom Helmets" image={ DotCover } projectId={4} style={isMobile() ? {} : { marginLeft: "25px" }}/>
				</div>
				<div className="projects-list" style={isMobile() ? {} : {marginLeft: "205px", marginTop: "25px"}}>
					<Project delay={0.9} onEnter={onEnter} onExit={onExit} title="Message - Keep It Alive" image={ MessageCover } projectId={5}/>
					<Project delay={1.2} onEnter={onEnter} onExit={onExit}title="Hames Tahamus - 3D Game" image={ HamesTahamusCover } projectId={6} style={isMobile() ? {} : { marginLeft: "25px", backgroundPositionY: "80%" } }/>
				</div>
				<a className="loadBtn" onMouseEnter={onEnter} onMouseLeave={onExit} >More ↓</a>
		</div>
	)
}

export default Projects;