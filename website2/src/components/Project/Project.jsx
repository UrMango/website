import React from 'react';
import { Link } from 'react-router-dom';
import NewlineText from '../../helper/NewLineText';
import "./Project.css"

const Project = ({image, title, projectId, style}) => {
	return(
		<div className="Project" style={style}>
			<Link to={`/project/?id=${projectId}`} className="container" style={{ backgroundImage: `url(${image})` }}>
				<h3 className="title">{title}</h3>
			</Link>
		</div>
	)
}

export default Project;