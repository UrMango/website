import React from 'react';
import "./Experience.css"
import ExperienceBox from './ExperienceBox/ExperienceBox';
import ExperienceDetails from './ExperienceDetails/ExperienceDetails';

const Experience = ({id, onToggle, opened, role, company, start, end, icon, details, tools, links, logo}) => {
	return(
		<div className="Experience">
			<ExperienceBox id={id} onToggle={onToggle} opened={opened} role={role} company={company} start={start} end={end} icon={icon} >
				<ExperienceDetails details={details} tools={tools} links={links} logo={logo}/>
			</ExperienceBox>
		</div>
	)
}

export default Experience;