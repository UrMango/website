import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from "framer-motion";

import "./Mango.css";

import { useState } from 'react';
import { useEffect } from 'react';

import ProjectPage from '../../components/ProjectPage/ProjectPage';

import MangoBG from '../../assets/projects/mango/background.webp';
import InGame from '../../assets/projects/sable/in-game.webp';
import HTML5Img from '../../assets/projects/sable/first-steps.webp';
import UnityImg from '../../assets/projects/sable/unity.webp';
import Arrow from '../../assets/projects/sable/arrow.svg';
import Graphic from '../../assets/projects/sable/passover.webp';
import Sings from '../../assets/projects/sable/sings-noise.webp';

const Mango = ({mouseEnter, mouseExit}) => {

	return(
		<ProjectPage 
			projectName={"The Mango Challnges"} 
			header={MangoBG} 
			year={"2022-2023"} 
			textColor={"#FF7701"} 
			color={"#001C65"} 
			categories={["Video Games", "Web", "AI"]} 
			description={"A cyber & coding website I created for my students to practice computational skills. With advanced lore, leaderboards, skins, gifts, users, cool graphics, music & animations, the website offers a fun and educational experience."}
			mouseEnter={mouseEnter} 
			mouseExit={mouseExit} >
			<div className="Mango">
				<div className="development" >
					<h4 className="title">Challenges</h4>
					<div className='main' style={{backgroundImage: `url("${InGame}")`}} alt="" />
					<h6 className='responsible'>I'm responsible for designing the product and developing the game's client and server side.</h6>
				</div>
				<div className="graphic">
					<h4 className="title">Graphic Design</h4>
					<div className='main' style={{backgroundImage: `url("${Graphic}")`}} alt="" />
					<h6 className='responsible'>I'm responsible for designing, editing, and writing branded content, game content, trailers, logos, characters, and concepts.</h6>
					<div className="marilyn">
						<h5></h5>
						<div className='img' style={{backgroundImage: `url("${Sings}")`}} alt="" />
						<h6></h6>
					</div>
				</div>
				<div className="team">
					<h4 className="title">Team Management</h4>
					{/** */}
				</div>
				<div className="social">
					<h4 className="title">Social Media</h4>
					{/** */}
				</div>
			</div>
		</ProjectPage>
	)
}

export default Mango;