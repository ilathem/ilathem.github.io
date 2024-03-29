/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { About } from './components/About';
import './index.css';
import Intro from './components/Intro';
import { Contact } from './components/Contact';
import { Sections, SectionsControls } from './types/types';
import { Experience } from './components/Experience';

function App() {
	const constraintsRef = useRef<HTMLDivElement>(null);
	const aboutControls = useAnimationControls();
	const contactControls = useAnimationControls();
	const experienceControls = useAnimationControls();
	const [openSection, setOpenSection] = useState<Sections>({
		about: false,
		contact: false,
		experience: false,
	});
	const [controlObj, setControlObj] = useState<SectionsControls>();
	useEffect(() => {
		setTimeout(() => {
			aboutControls
				.start('closed')
		}, 1000);
		setTimeout(() => {
			experienceControls.start('closed');
		}, 1100);
		setTimeout(() => {
			contactControls.start('closed');
		}, 1200);
		setControlObj({
			about: aboutControls,
			contact: contactControls,
			experience: experienceControls,
		})
	}, []);
	useEffect(() => {
		if (!controlObj) return; 
		for (const [key, value]  of Object.entries(openSection)) {
			if (value) controlObj[key].start('open')
			else controlObj[key].start('closed');
		}
	}, [openSection])
	return (
		<motion.div
			className="w-screen h-screen absolute top-0 flex items-center justify-center overflow-auto font-['Comfortaa'] text-slate-200"
			ref={constraintsRef}
			initial='hidden'
			animate='visible'
		>
			<Toaster
				toastOptions={{
					className: 'bg-stone-800/80 text-slate-200',
				}}
			/>
			<motion.div
				className='overflow-y-hidden overflow-x-hidden w-5/6 h-min bg-stone-800/80 rounded-2xl shadow-2xl shadow-[#1debd9]/25 transition-shadow flex flex-col items-center p-5 max-w-screen-sm'
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
							when: 'beforeChildren',
						},
					},
				}}
				dragConstraints={constraintsRef}
			>
				<Intro />
				<About
					toggleSection={() => {
						setOpenSection({
							contact: false,
							about: !openSection.about,
							experience: false,
						});
					}}
					openSection={openSection}
					controls={aboutControls}
				/>
				<Experience
					toggleSection={() => {
						setOpenSection({
							experience: !openSection.experience,
							about: false,
							contact: false,
						});
					}}
					openSection={openSection}
					controls={experienceControls}
				/>
				<Contact
					toggleSection={() => {
						setOpenSection({
							contact: !openSection.contact,
							about: false,
							experience: false,
						});
					}}
					openSection={openSection}
					toast={toast}
					controls={contactControls}
				/>
			</motion.div>
		</motion.div>
	);
}

export default App;
