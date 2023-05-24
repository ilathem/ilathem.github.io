import { AnimationControls, motion } from 'framer-motion';
import { useState } from 'react';
import { Sections } from '../types/types';

export const About: React.FC<{
	controls: AnimationControls;
	openSection: Sections;
	toggleSection: Function;
}> = ({ controls, openSection, toggleSection }) => {
	return (
		<motion.div
			className={
				openSection.about
					? 'w-5/6 bg-stone-800 hover:shadow-[#1debd9]/50 rounded-lg border-[#1debd9] border-2 p-2 m-2 shadow-md hover:border-[#1debd9] hover:shadow-xl shadow-[#1debd9] cursor-pointer transition'
					: 'w-5/6 bg-stone-800 hover:shadow-[#1debd9]/50 rounded-lg border-slate-200 border-2 p-2 m-2 shadow-md hover:border-[#1debd9] hover:shadow-xl shadow-slate-500 cursor-pointer transition'
			}
			onClick={(e) => {
				if (!openSection.about) {
					toggleSection();
					controls.start('open');
				} else if (openSection.about) {
					toggleSection();
					controls.start('closed');
				}
			}}
			initial='hidden'
			animate={controls}
			variants={{
				hidden: {
					opacity: 0,
					scale: 0,
				},
				closed: {
					opacity: 1,
					scale: 1,
					scaleY: 1,
					scaleX: 1,
					height: '50px',
					transition: {
						type: 'tween',
						ease: 'easeOut',
					},
				},
				open: {
					height: '350px',
					scale: 1,
					transition: {
						type: 'tween',
						ease: 'backOut',
					},
				},
			}}
		>
			<motion.p className='text-2xl text-center select-none'>
				About Me
			</motion.p>
			{openSection.about && (
				<div>
					<p></p>
					<motion.p>Skills</motion.p>
				</div>
			)}
		</motion.div>
	);
};
