import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import Box from "../../components/Box/Box";

import Programmer from "../../assets/programmer.png";
import Lecture from "../../assets/lecture.jpg";
import Thinking from "../../assets/thinking.png";
import SoftwareDevelopment from "../../assets/Software Development.svg"
import GameDevelopment from "../../assets/game controller.svg"
import WebDevelopment from "../../assets/React.svg"
import VideoEditing from "../../assets/Video.svg"
import GraphicDesign from "../../assets/Grapic Icon.svg"
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
import SableCover from "../../assets/projects/sable.png"
import PsychobotCover from "../../assets/projects/psychobot.png"
import TrivYupCover from "../../assets/projects/trivyup.png"
import DotCover from "../../assets/projects/dot.png"
import MessageCover from "../../assets/projects/message.png"
import HamesTahamusCover from "../../assets/projects/hamestahamus.png"

import "./Home.css";

import Fixed from '../../components/Fixed/Fixed';
import Experience from '../../components/Experience/Experience';
import { useState } from 'react';
import Project from '../../components/Project/Project';
import { useEffect } from 'react';

const Home = () => {
	const [filter, setFilter] = useState("All");
	const [detailOpened, setDetailOpened] = useState(0);
	const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });

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
				<a href="https://www.linkedin.com/in/itsnoamraz/" target="_blank">
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

	useEffect(() => {
		const moveCursor = (e) => { 
			const x = e.clientX - 16;
			const y = e.clientY - 16;
			setCursorXY({ x, y });
		}

		window.addEventListener('mousemove', moveCursor);

		return () => {
			window.removeEventListener('mousemove', moveCursor);
		}
	}, []);

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
		<div className="cursor" style={{transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`}}></div>
		<div className="Home">
			<Fixed/>
			<div className="header">
				<div className="img" style={{backgroundImage: `url(${Programmer})`, backgroundPositionX: "20%"}}/>
				<div className="img" style={{backgroundImage: `url(${Lecture})`}}/>
				<div className="img" style={{backgroundImage: `url(${Thinking})`}}/>
			</div>
			<div className="proffesional">
				<div className="expertise">
					<h1 className="name">My Expertise</h1>
					
					<div className="box-lists">
						<div className="box-list">
							<Box width={"229px"} height={"229px"} left="0" title="Software Development & AI" icon={SoftwareDevelopment} description={`Experienced with Assembly x86, C, C++, C#,  Node.js and Python.\nWorked with Artificial Inteligence, Client & Server.`}/>
							<Box width={"229px"} height={"229px"} title="Game Development" icon={GameDevelopment} description={`Expert with Unity & Phaser2D (HTML5).\nOver 3 years of game development with teams around the globe.`}/>
							<Box width={"229px"} height={"229px"} title="Web Development" icon={WebDevelopment} description={`Proficient with HTML, CSS, JavaScript, React and Vue.\nMade an animated Kahoot clone with React and C++ Server (using WebSockets).`}/>
						</div>
						<div className="box-list">
							<Box width={"229px"} height={"229px"} left="0" top="-3px" title="Video Editing" icon={VideoEditing} description={`7 Years of experience editing with Premiere Pro & After Effects.\nEdited Game trailers, Lyric clips and YouTube videos.`}/>
							<Box width={"229px"} height={"229px"} top="-3px" title="Graphic Design" icon={GraphicDesign} description={`Skilled in editing and designing with Photoshop, Lightroom & Illustrator.\nDesigned 2D characters, Logos, Banners and edited photos for people.`}/>
						</div>
					</div>
				</div>
				<div className="experience">
					<h1 className="name">Proffesional Experience</h1>
					{experience?.map((experience, index) => (<Experience 
						key={index}
						id={index}
						onToggle={toggleDetails}
						opened={detailOpened}
						icon={experience.icon} 
						role= {experience.role} 
						company={experience.company} 
						start={experience.start} 
						end={experience.end} 
						logo={experience.logo}  
						details={experience.details} 
						tools={experience.tools} 
						links={experience.links}  />))}
				</div>
			</div>
			<div className="third">
				<div className="projects">
					<h1 className="name">Projects</h1>
					<h2 className="filter">Filter by <a onClick={filterChange}> All </a> / <a onClick={filterChange}>Games</a> / <a onClick={filterChange}>Web</a> / <a onClick={filterChange}>AI</a></h2>
					<div className="projects-list">
						<Project title="Sable World - Social Platform" image={ SableCover } projectId={1}/>
						<Project title="PsychoBot - Emotional AI" image={ PsychobotCover } projectId={2} style={{ marginLeft: "25px" }}/>
					</div>
					<div className="projects-list" style={{marginLeft: "-152px", marginTop: "25px"}}>
						<Project title="TrivYup - Quiz Website" image={ TrivYupCover } projectId={3}/>
						<Project title="Dot - Custom Helmets" image={ DotCover } projectId={4} style={{ marginLeft: "25px" }}/>
					</div>
					<div className="projects-list" style={{marginLeft: "205px", marginTop: "25px"}}>
						<Project title="Message - Keep It Alive" image={ MessageCover } projectId={5}/>
						<Project title="Hames Tahamus - 3D Game" image={ HamesTahamusCover } projectId={6} style={{ marginLeft: "25px" }}/>
					</div>
					<a className="loadBtn">More ↓</a>
				</div>
			</div>
			<div className="footer">
				<h3>All copyrights reserved © Noam Raz 2022</h3>
			</div>
		</div>
		</HelmetProvider>
	)
}

export default Home;