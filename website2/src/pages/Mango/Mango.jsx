import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from "framer-motion";

import "./Mango.css";

import { useState } from 'react';
import { useEffect } from 'react';

import YouTube from 'react-youtube'

import ProjectPage from '../../components/ProjectPage/ProjectPage';

import MangoBG from '../../assets/projects/mango/background.webp';
import Banner from '../../assets/projects/mango/banner.webp';
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
			description={"A cyber & coding website I created for my students to practice their computational skills. With advanced lore, leaderboards, skins, gifts, users, cool graphics, music & animations, the website offers a fun and educational experience."}
			mouseEnter={mouseEnter} 
			mouseExit={mouseExit} >
			<div className="Mango">
				<div className="development" >
					<h4 className="title">The process</h4>
					<div className='main' style={{backgroundImage: `url("${Banner}")`}} alt="" />
					<h6 className='responsible'>The website was made using the brand new Next.js 13 and firebase as the database for the players and challenges. The core was built in 3 days, and the whole process of making the features took a month.</h6>
					<h6 className='responsible'>Video Example</h6>
					<YouTube iframeClassName="ifr" videoId='3Q0Vygp0k4Y' title='EXAMPLE' opts={
						{
							playerVars: {
								// https://developers.google.com/youtube/player_parameters
								autoplay: 1,	
							},
						}} />
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