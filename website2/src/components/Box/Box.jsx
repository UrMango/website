import React, { useEffect } from 'react';
import NewlineText from '../../helper/NewLineText';
import "./Box.css"

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Box = ({delay, height, width, title, icon, description, left="-3px", top="0"}) => {

	const controls = useAnimation();
	const [ref, inView] = useInView();

	const intro = {
		hidden: {
			opacity: 0
		},
		visible: {
			opacity: 1, 
			transition: {
				delay: delay,
				duration: 2
			}
		}
	};

	const boxStyle = () =>  {
		if(window.innerWidth > 768)
			return { height, width, marginLeft: left, marginTop: top};
		else
			return { height: 329, width: 329};
	}

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		} else {
			//controls.start("hidden");
		}
	}, [controls, inView]);

	return(
		<motion.div className="Box" style={boxStyle()} ref={ref} animate={controls} variants={intro} initial="hidden">
			<div className="upper">
				<img className="icon" src={icon}></img>
				<h2 className="title">{title}</h2>			
			</div>
			<h3 className="description">{<NewlineText text={description}/>}</h3>
		</motion.div>
	)
}

export default Box;