import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Programmer from "../../assets/programmer.png";
import Lecture from "../../assets/lecture.jpg";
import Thinking from "../../assets/thinking.png";
import WebDevelopment from "../../assets/React.svg"
import LinkIcon from "../../assets/Link.svg"
import LinkedInIcon from "../../assets/LinkedIn.svg"
import Unity from "../../assets/Unity.svg"
import Csharp from "../../assets/csharp.svg"
import JS from "../../assets/js.svg"
import Trello from "../../assets/trello.svg"
import Photoshop from "../../assets/photoshop.svg"
import Illustrator from "../../assets/illustrator.svg"
import Wordpress from "../../assets/wordpress.svg"

import IconSable from "../../assets/logo-summer.jpg"
import LogoSableText from "../../assets/Logo sable text.png"
import DotLogo from "../../assets/Dot.jpg"
import SableCover from "../../assets/projects/sable2.png"
import PsychobotCover from "../../assets/projects/psychobot.png"
import TrivYupCover from "../../assets/projects/trivyup.png"
import DotCover from "../../assets/projects/dot.png"
import MessageCover from "../../assets/projects/message.png"
import HamesTahamusCover from "../../assets/projects/hamestahamus.png"

import "./Home.css";

import { useState } from 'react';
import Project from '../../components/Project/Project';
import Expertise from '../../components/Expertise/Expertise';
import Proffesional from '../../components/Proffesional/Proffesional';

const Home = ({mouseEnter, mouseExit}) => {
	const [filter, setFilter] = useState("All");
	const [detailOpened, setDetailOpened] = useState(0);

	const experience = [
		{
			icon: IconSable, 
			role: "Founder & CTO", 
			company: "Sable World",
			start: "Apr 2020", 
			end:"Present", 
			logo: LogoSableText, 
			details: "Developing a social platform for stopping depression, bullying, and suicidal feelings in kids' and teenagers' life and provide a secure, entertaining, educational, and adventurous place they can be in.",
			tools: <>
				<img src={Unity}></img>
				<img src={Csharp}></img>
				<img src={JS}></img>
				<img src={WebDevelopment}></img>
				<img src={Photoshop}></img>
				<img src={Illustrator}></img>
				<img src={Trello}></img>
			</>,
			links: <>
				<a href="https://sable.co.il/" target="_blank">
					<img src={LinkIcon}></img>
				</a>
				<a href="https://www.linkedin.com/company/71712473" target="_blank">
					<img src={LinkedInIcon}></img>
				</a>
			</>
		},
		{
			icon: DotLogo,
			role: "Founder & CEO",
			company: "Dot",
			start: "Nov 2019",
			end: "Aug 2020",
			logo: DotLogo,
			details: `Custom-made helmets online, designed to encourage helmet wearing without comporomising the user's personality.\nIn the website, each user could design and order their own helment or choose from a custon-made store.`,
			tools: <>
			<img src={Wordpress}></img>
			<img src={JS}></img>
			<img src={WebDevelopment}></img>
			<img src={Photoshop}></img>
			</>,
			links: <>
			<a href="https://www.linkedin.com/company/71715387" target="_blank">
				<img src={LinkedInIcon}></img>
			</a></>
		}
		
	]	

	const toggleDetails = (id) => {
		setDetailOpened(id)
	}

	const filterChange = e => {
		setFilter(e.target.innerText);
	}

	return(
		<HelmetProvider>
		<Helmet>
			<title>Noam Raz</title>
		</Helmet>

		<div className="Home">
			<div className="header">
				<div className="img" style={{backgroundImage: `url(${Programmer})`, backgroundPositionX: "20%"}}/>
				<div className="img" style={{backgroundImage: `url(${Lecture})`}}/>
				<div className="img" style={{backgroundImage: `url(${Thinking})`}}/>
			</div>
			<div className="proffesional">
				<Expertise />
				<Proffesional experience={experience} mouseEnter={mouseEnter} mouseExit={mouseExit} toggleDetails={toggleDetails} detailOpened={detailOpened} />
			</div>
			<div className="third">
				<div className="projects">
					<h1 className="name">Projects</h1>
					<h2 className="filter">Filter by <a onClick={filterChange}> All </a> / <a onClick={filterChange}>Games</a> / <a onClick={filterChange}>Web</a> / <a onClick={filterChange}>AI</a></h2>
					<div className="projects-list">
						<Project delay={0.3} onEnter={mouseEnter} onExit={mouseExit} title="Sable World - Social Platform" image={ SableCover } projectId={1}/>
						<Project delay={0.6} onEnter={mouseEnter} onExit={mouseExit} title="PsychoBot - Emotional AI" image={ PsychobotCover } projectId={2} style={{ marginLeft: "25px" }}/>
					</div>
					<div className="projects-list" style={{marginLeft: "-152px", marginTop: "25px"}}>
						<Project delay={0.6} onEnter={mouseEnter} onExit={mouseExit} title="TrivYup - Quiz Website" image={ TrivYupCover } projectId={3}/>
						<Project delay={0.9} onEnter={mouseEnter} onExit={mouseExit} title="Dot - Custom Helmets" image={ DotCover } projectId={4} style={{ marginLeft: "25px" }}/>
					</div>
					<div className="projects-list" style={{marginLeft: "205px", marginTop: "25px"}}>
						<Project delay={0.9} onEnter={mouseEnter} onExit={mouseExit} title="Message - Keep It Alive" image={ MessageCover } projectId={5}/>
						<Project delay={1.2} onEnter={mouseEnter} onExit={mouseExit}title="Hames Tahamus - 3D Game" image={ HamesTahamusCover } projectId={6} style={{ marginLeft: "25px" }}/>
					</div>
					<a className="loadBtn" onMouseEnter={mouseEnter} onMouseLeave={mouseExit} >More ↓</a>
				</div>
			</div>			
		</div>
		</HelmetProvider>
	)
}

export default Home;