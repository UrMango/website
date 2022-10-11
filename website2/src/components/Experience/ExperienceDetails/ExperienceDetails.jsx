import React from 'react';
import NewlineText from '../../../helper/NewLineText';
import "./ExperienceDetails.css"

const ExperienceDetails = ({onEnter, onExit, details, tools, links, logo}) => {
	return(
		<div className="ExperienceDetails">
			<div className="logo">
				<img src={logo} alt="Logo" />
			</div>
			<div className="details">
				<div className="links" onMouseEnter={() => onEnter("small")} onMouseLeave={onExit}>{links}</div>
				<div className="description">
					{<NewlineText text={details} />}
				</div>
				<div className="tools">
					<h3>Tools:</h3>
					<div className="tools-list">{tools}</div>
				</div>
			</div>
		</div>
	)
}

export default ExperienceDetails;