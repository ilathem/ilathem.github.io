import { useState, useRef, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

import './index.css'; 
import {
  containerVariant,
} from './components/variants';
import Intro from './components/Intro';
import { ExpandableSection } from './components/ExpandableSection';
import { Contact } from './components/Contact';

function App() {
	const constraintsRef = useRef<HTMLDivElement>(null);
	const contactControls = useAnimationControls()
	useEffect(() => {
		setTimeout(() => {
			contactControls.start('closed');
		}, 1500)
	}, [])
	return (
		<motion.div
			className="w-screen h-screen absolute top-0 flex items-center justify-center overflow-hidden font-['Comfortaa'] text-slate-200"
			ref={constraintsRef}
			initial='hidden'
			animate='visible'
		>
			<motion.div
				className='w-5/6 h-5/6 bg-stone-800/80 rounded-2xl shadow-2xl shadow-[#1debd9]/25 transition-shadow flex flex-col items-center p-5 max-w-screen-sm'
				variants={{
					hidden: {
						opacity: 0,
						scale: 0,
						rotate: -90,
					},
					visible: {
						opacity: 1,
						scale: 1,
						rotate: 0,
						transition: {
							delay: 0.5,
							staggerChildren: 1,
							when: 'beforeChildren'
						},
					},
				}}
				dragConstraints={constraintsRef}
			>
				<Intro />
                <Contact controls={contactControls} />
			</motion.div>
		</motion.div>
	);
}

export default App;
