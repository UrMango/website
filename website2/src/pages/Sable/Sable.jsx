import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from "framer-motion";

import "./Sable.css";

import { useState } from 'react';
import { useEffect } from 'react';

import ProjectPage from '../../components/ProjectPage/ProjectPage';

import SableWorldBG from '../../assets/projects/sable/Sable World BG.webp';
import InGame from '../../assets/projects/sable/in-game.webp';
import HTML5Img from '../../assets/projects/sable/first-steps.webp';
import UnityImg from '../../assets/projects/sable/unity.webp';
import Arrow from '../../assets/projects/sable/arrow.svg';
import Graphic from '../../assets/projects/sable/passover.webp';
import Sings from '../../assets/projects/sable/sings-noise.webp';

const Sable = ({mouseEnter, mouseExit}) => {

	return(
		<ProjectPage 
			projectName={"Sable World"} 
			header={SableWorldBG} 
			year={"2022"} 
			textColor={"#fff351"} 
			color={"#76D4DF"} 
			categories={["Video Games"]} 
			description={"Sable is a social platform I founded for stopping depression, bullying, and suicidal feelings in kids' and teenagers' life and providing a secure, entertaining, educational, and adventurous place they can be in.\nI'm responsible for all the development phases of the game."}
			mouseEnter={mouseEnter} 
			mouseExit={mouseExit} >
			<div className="Sable">
				<div className="development" >
					<h4 className="title">Game Development</h4>
					<div className='main' style={{backgroundImage: `url("${InGame}")`}} alt="" />
					<h6 className='responsible'>I'm responsible for designing the product and developing the game's client and server side.</h6>
					<div className="arrow" style={{backgroundImage: `url("${Arrow}")`}}>
						<div className="html5">
							<div style={{width: "50%"}} className="content">
								<h5>HTML5</h5>
								<div className='html5-img' style={{backgroundImage: `url("${HTML5Img}")`}} alt="" />
								<h6>We started our journey with a simple HTML5 game using Phaser2D, with a NodeJS server.</h6>
							</div>
							<div style={{width: "50%"}}></div>
						</div>
						
						<div className="unity">
							<div style={{width: "50%"}}></div>
							<div style={{width: "50%"}} className="content">
								<h5>Transitioning to Unity</h5>
								<div className='unity-img' style={{backgroundImage: `url("${UnityImg}")`}} alt="" />
								<h6>After releasing our alpha version, We saw bigger potential in working with Unity and switched to it. Also recreated our server from scratch in C#.</h6>
							</div>
						</div>
					</div>
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

export default Sable;