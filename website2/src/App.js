import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";

import Fixed from './components/Fixed/Fixed';
import Home from './pages/Home/Home';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import NotFound from './pages/NotFound/NotFound';

import './App.css';

const App = () => {
  const [variant, setVariant] = useState("default");

	const cursorX = useMotionValue(-100);
  	const cursorY = useMotionValue(-100);
	const springConfig = { damping: 50, stiffness: 1200 };
	const cursorXSpring = useSpring(cursorX, springConfig);
	const cursorYSpring = useSpring(cursorY, springConfig);

	const variants = {
		default: { width: 20, height: 20 },
		hover: { width: 54, height: 54 },
		ultra: { width: 76, height: 76 },
		small: { width: 32, height: 32 },
	}

  useEffect(() => {
		const moveCursor = (e) => {
			cursorX.set(e.clientX - (variants[variant].width / 2));
      		cursorY.set(e.clientY - (variants[variant].height / 2));
		}
    
    	window.removeEventListener('mousemove', moveCursor);
		window.addEventListener('mousemove', moveCursor);

		return () => {
			window.removeEventListener('mousemove', moveCursor);
		}
	}, [variants]);

	const mouseEnter = (hover="hover") => {
		if(typeof hover == 'string')
			setVariant(hover);
		else
			setVariant("hover");
	}
	
	const mouseExit = () => {
		setVariant("default");
	}

  return (
      <Router>
        <motion.div
          className="cursor"
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
            originX: "center",
            originY: "center",
          }}
          variants={variants}
          animate={variant}
        />
        <Fixed onEnter={mouseEnter} onExit={mouseExit}/>
        <Routes>
          <Route path="/" exact element={<Home mouseEnter={mouseEnter} mouseExit={mouseExit} />} />
          <Route path="/project/:id" exact element={<ProjectPage mouseEnter={mouseEnter} mouseExit={mouseExit}/>} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
        <div className="footer">
				  <h3>All copyrights reserved © Noam Raz 2022</h3>
			  </div>
      </Router>
  );
}

export default App;
