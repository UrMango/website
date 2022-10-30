import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Programmer from "../../assets/programmer.webp";
import Lecture from "../../assets/lecture.webp";
import Thinking from "../../assets/thinking.webp";
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

import IconSable from "../../assets/logo-summer.webp"
import LogoSableText from "../../assets/Logo-sable-text-english.webp"
import DotLogo from "../../assets/Dot.webp"


import "./Home.css";

import Lottie from 'lottie-react';
import scroll from '../../assets/390-scroll-down-2-auto-edited.json';

import { useState } from 'react';
import Project from '../../components/Project/Project';
import Expertise from '../../components/Expertise/Expertise';
import Proffesional from '../../components/Proffesional/Proffesional';
import ProjectPage from '../../components/ProjectPage/ProjectPage';
import Projects from '../../components/Projects/Projects';
import { useRef } from 'react';

const Home = ({mouseEnter, mouseExit}) => {
	const [filter, setFilter] = useState("All");
	const [detailOpened, setDetailOpened] = useState(0);
	
	const proffesional = useRef(null);

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
			details: `Custom-made helmets online, designed to encourage helmet-wearing without compromising the user's personality.\nOn the website, each user could design and order their own helmet or choose from a custom-made store.`,
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

	const scrollClick = () => {
		proffesional.current?.scrollIntoView({behavior: 'smooth'});
	};

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
				<div className="img" id="main" style={{backgroundImage: `url(${Lecture})`}}/>
				<div className="img" style={{backgroundImage: `url(${Thinking})`}}/>
			</div>
			<Lottie onMouseEnter={() => {mouseEnter("small")}} onMouseDown={scrollClick} onMouseLeave={mouseExit} className='scrollIcon' animationData={scroll}/>
			<div className="proffesional" ref={proffesional} >
				<Expertise />
				<Proffesional experience={experience} mouseEnter={mouseEnter} mouseExit={mouseExit} toggleDetails={toggleDetails} detailOpened={detailOpened} />
			</div>
			<div className="third">
				<Projects filterChange={filterChange} onEnter={mouseEnter} onExit={mouseExit} />
			</div>
		</div>
		</HelmetProvider>
	)
}

export default Home;