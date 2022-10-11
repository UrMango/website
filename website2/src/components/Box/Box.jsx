import React from 'react';
import NewlineText from '../../helper/NewLineText';
import "./Box.css"

const Box = ({height, width, title, icon, description, left="-3px", top="0"}) => {
	return(
		<div className="Box" style={{ height, width, marginLeft: left, marginTop: top}}>
			<div className="upper">
				<img className="icon" src={icon}></img>
				<h2 className="title">{title}</h2>			
			</div>
			<h3 className="description">{<NewlineText text={description}/>}</h3>
		</div>
	)
}

export default Box;