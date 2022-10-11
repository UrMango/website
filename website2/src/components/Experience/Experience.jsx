import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./Experience.css"
import ExperienceBox from './ExperienceBox/ExperienceBox';
import ExperienceDetails from './ExperienceDetails/ExperienceDetails';

const Experience = ({id, onEnter, onExit, onToggle, opened, role, company, start, end, icon, details, tools, links, logo}) => {

	const controls = useAnimation();
	const [ref, inView] = useInView();

	const intro = {
		hidden: {
			opacity: 0,
			transition: {
				duration: 1
			}
		},
		visible: {
			opacity: 1, 
			transition: {
				duration: 2 
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
		<motion.div className="Experience" ref={ref} animate={controls} variants={intro} initial="hidden">
			<ExperienceBox id={id} onEnter={onEnter} onExit={onExit} onToggle={onToggle} opened={opened} role={role} company={company} start={start} end={end} icon={icon} >
				<ExperienceDetails onEnter={onEnter} onExit={onExit} details={details} tools={tools} links={links} logo={logo}/>
			</ExperienceBox>
		</motion.div>
	)
}

export default Experience;