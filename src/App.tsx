import { useState, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

import './index.css'; 
import {
  containerVariant,
} from './components/variants';
import Intro from './components/Intro';

function App() {
	const constraintsRef = useRef<HTMLDivElement>(null);
	return (
		<motion.div
			className="w-screen h-screen absolute top-0 flex items-center justify-center overflow-hidden font-['Comfortaa'] text-slate-200"
			ref={constraintsRef}
			initial='hidden'
			animate='visible'
		>
			<motion.div
				className='w-5/6 h-5/6 bg-stone-800/80 rounded-2xl shadow-2xl shadow-[#1debd9]/25 hover:shadow-[#1debd9]/50 transition-shadow flex flex-col p-5 max-w-screen-sm'
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
							staggerChildren: .5,
							when: 'beforeChildren'
						},
					},
				}}
				drag
				dragConstraints={constraintsRef}
			>
				<Intro />
			</motion.div>
		</motion.div>
	);
}

export default App;
