import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from "framer-motion";

import "./Sable.css";

import { useState } from 'react';
import { useEffect } from 'react';

import ProjectPage from '../../components/ProjectPage/ProjectPage';

import SableWorldBG from '../../assets/projects/sable/Sable World BG.webp';

const Sable = ({mouseEnter, mouseExit}) => {

	return(
		<ProjectPage projectName={"Sable World"} header={SableWorldBG} year={"0w0, ,,,,"} textColor={"#00e2cc"} color={"#009186"} category={"Video Games"} description={"Sable is ....."} mouseEnter={mouseEnter} mouseExit={mouseExit}>
			<div className="Sable">
			</div>
		</ProjectPage>
	)
}

export default Sable;