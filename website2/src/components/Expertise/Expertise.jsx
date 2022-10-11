import React, { useEffect } from 'react';
import "./Expertise.css";
import Box from "../../components/Box/Box";

import SoftwareDevelopment from "../../assets/Software Development.svg"
import GameDevelopment from "../../assets/game controller.svg"
import WebDevelopment from "../../assets/React.svg"
import VideoEditing from "../../assets/Video.svg"
import GraphicDesign from "../../assets/Grapic Icon.svg"

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Expertise = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	const intro = {
		hidden: {
			y: -50,
			opacity: 0,
			transition: {
				duration: 1
			}
		},
		visible: {
			y: 0,
			opacity: 1, 
			transition: {
				duration: 1
			}
		}
	};

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		} else {
			//controls.start("hidden");
		}
	}, [controls, inView]);

	return(
		<div className="Expertise">
			<motion.h1 className="name" ref={ref} animate={controls} variants={intro} initial="hidden">My Expertise</motion.h1>
			<div className="box-lists">
				<div className="box-list">
					<Box width={"229px"} height={"229px"} left="0" title="Software Development & AI" icon={SoftwareDevelopment} description={`Experienced with Assembly x86, C, C++, C#,  Node.js and Python.\nWorked with Artificial Inteligence, Client & Server.`}/>
					<Box delay={.3} width={"229px"} height={"229px"} title="Game Development" icon={GameDevelopment} description={`Expert with Unity & Phaser2D (HTML5).\nOver 3 years of game development with teams around the globe.`}/>
					<Box delay={.6} width={"229px"} height={"229px"} title="Web Development" icon={WebDevelopment} description={`Proficient with HTML, CSS, JavaScript, React and Vue.\nMade an animated Kahoot clone with React and C++ Server (using WebSockets).`}/>
				</div>
				<div className="box-list">
					<Box delay={.6} width={"229px"} height={"229px"} left="0" top="-3px" title="Video Editing" icon={VideoEditing} description={`7 Years of experience editing with Premiere Pro & After Effects.\nEdited Game trailers, Lyric clips and YouTube videos.`}/>
					<Box delay={.9} width={"229px"} height={"229px"} top="-3px" title="Graphic Design" icon={GraphicDesign} description={`Skilled in editing and designing with Photoshop, Lightroom & Illustrator.\nDesigned 2D characters, Logos, Banners and edited photos for people.`}/>
				</div>
			</div>
		</div>
	)
}

export default Expertise;