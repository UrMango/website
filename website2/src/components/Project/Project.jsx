import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewlineText from '../../helper/NewLineText';
import "./Project.css"

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Project = ({delay, onEnter, onExit, image, title, projectId, style}) => {
	const controls = useAnimation();
	const [ref, inView] = useInView();
	

	const intro = {
		hidden: {
			opacity: 0
		},
		visible: {
			scale: 1,
			opacity: 1, 
			transition: {
				delay: delay,
				duration: 2
			}
		},
		visible2: {
			scale: 1,
			opacity: 1, 
			transition: {
				duration: .2
			}
		},
		hover: {
			scale: 1.1, 
			transition: {
				duration: .2
			}
		}
	};

	const onMouseEnter = () => {
		onEnter("ultra");
		controls.start("hover");
	}
	
	const onMouseExit = () => {
		onExit();
		controls.start("visible2");
	}

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		} else {
			//controls.start("hidden");
		}
	}, [controls, inView]);

	return(
		<motion.div ref={ref} animate={controls} variants={intro} initial="hidden" onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit} className="Project" style={style} >
			<Link to={`/project/${projectId}`} className="container" style={{ backgroundImage: `url(${image})`, backgroundPositionX: style?.backgroundPositionX, backgroundPositionY: style?.backgroundPositionY }}>
				<h3 className="title">{title}</h3>
			</Link>
		</motion.div>
	)
}

export default Project;