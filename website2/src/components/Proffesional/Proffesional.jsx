
import React, { useEffect } from 'react';
import "./Proffesional.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Experience from '../Experience/Experience';

const Proffesional = ({experience, mouseEnter, mouseExit, toggleDetails, detailOpened}) => {
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
		<div className="Proffesional">
			<motion.h1 className="name" ref={ref} animate={controls} variants={intro} initial="hidden">Proffesional Experience</motion.h1>
			{experience?.map((experience, index) => (<Experience 
				key={index}
				id={index}
				onEnter={mouseEnter}
				onExit={mouseExit}
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
	)
}

export default Proffesional;