import React, { useEffect } from 'react';
import { createRef } from 'react';
import "./ExperienceBox.css"
import Plus from "../../../assets/plus.png"
import Minus from "../../../assets/minus.png"
import { useState } from 'react';

const ExperienceBox = ({id, onToggle, opened, role, company, start, end, icon, children}) => {
	const ref = createRef();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if(open == id)
			setOpen(true);
		else
			setOpen(false);
	}, []); 

	const toggle = e => {
		if(!open) {
			setOpen(true);
			onToggle(id);
			return;
		}
		setOpen(false);
		if(ref.current.src == Plus)
			ref.current.src = Minus;
		else
			ref.current.src = Plus;
	}

	return(
		<details open={opened==id} onToggle={toggle}>
			<summary className="ExperienceBox">
				<div className="left">
					<img className="icon" src={icon}></img>
					<h2 className="position">{role} @ {company}</h2>
				</div>
				<h2 className="date">{start} - {end}</h2>
				<img className="toggle" ref={ref} src={Plus}></img>
			</summary>
			<div>
				{children}
			</div>
		</details>

	)
}

export default ExperienceBox;