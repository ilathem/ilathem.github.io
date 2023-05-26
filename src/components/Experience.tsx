import { AnimationControls } from 'framer-motion';
import { motion } from 'framer-motion';
import { Sections } from '../types/types';
import ghLogo from '../img/GitHub_Logo_White.png';

export const Experience: React.FC<{
	controls: AnimationControls;
	openSection: Sections;
	toggleSection: Function;
}> = ({ controls, openSection, toggleSection }) => {
	return (
		<motion.div
			className={
				openSection.experience
					? 'bg-stone-800 hover:shadow-[#1debd9]/50 rounded-lg border-[#1debd9] border-2 p-2 my-2 shadow-md hover:border-[#1debd9] hover:shadow-xl shadow-[#1debd9] cursor-pointer transition flex flex-col items-center'
					: 'bg-stone-800 hover:shadow-[#1debd9]/50 rounded-lg border-slate-200 border-2 p-2 my-2 shadow-md hover:border-[#1debd9] hover:shadow-xl shadow-slate-500 cursor-pointer transition flex flex-col items-center'
			}
			onClick={(e) => {
				if (!openSection.experience) {
					toggleSection();
					controls.start('open');
				} else if (openSection.experience) {
					toggleSection();
					controls.start('open');
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
					width: '80%',
				},
				open: {
					height: '600px',
					scale: 1,
					transition: {
						type: 'tween',
						ease: 'easeOut',
					},
					width: '100%',
				},
			}}
		>
			<p className='text-2xl text-center select-none hover:text-[#1debd9] transition'>
				Experience
			</p>
			{openSection.experience && (
				<div className='flex flex-col items-center w-full'>
					<div className='w-full my-2 h-[1px] bg-slate-200/50' />
					<p className='text-center mt-2'>
						Check out my github profile:
					</p>
					<img
						src={ghLogo}
						className='h-12 self-center hover:brightness-100 brightness-90 transition'
						alt='Link to my github profile'
						onClick={() => {
							window.open('https://github.com/ilathem', '_blank');
						}}
					/>
				</div>
			)}
		</motion.div>
	);
};
