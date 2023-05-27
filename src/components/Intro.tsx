import { AnimationControls, motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

function Intro() {
	const nameControls = useAnimationControls();
	const phraseControls = useAnimationControls();
	const horizontalLineControls = useAnimationControls();
	useEffect(() => {
		const animationOrder = [nameControls, horizontalLineControls];
		for (let i = 0; i < animationOrder.length; i++) {
			setTimeout(() => animationOrder[i].start('visible'), i * 200 + 1000)
		}
		setTimeout(() => phraseControls.start('hover'), 3000)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<motion.div className='row-start-1 col-span-2 flex flex-col w-full'>
			<Name nameControls={nameControls}/>
			{/* <Phrase phraseControls={phraseControls}/> */}
			<motion.hr
				initial='hidden'
				animate={horizontalLineControls}
				className='justify-self-end my-2 w-full'
				variants={{
					hidden: {
						scale: 0,
					},
					visible: {
						opacity: 0.8,
						originX: 0,
						scale: 1,
						transition: {
							duration: 0.5,
						},
					},
				}}
			/>
		</motion.div>
	);
}

const Name: React.FC<{nameControls: AnimationControls}> = ({nameControls}) => {
	return (
		<motion.div className='sm:w-[28rem] sm:self-center border-none border-2'>
			<motion.div>
				<motion.h1
					className='m-0 text-2xl sm:text-4xl h-fit '
					animate={nameControls}
					initial='hidden'
					variants={{
						hidden: {
							opacity: 0,
							x: -50,
						},
						visible: {
							x: 0,
							opacity: 1,
							transition: {
								when: 'beforeChildren',
								staggerChildren: 0.05,
								delayChildren: .75,
							},
						},
					}}
				>
					Hi, I'm
					{[
						' I',
						's',
						'a',
						'i',
						'a',
						'h',
						' ',
						'L',
						'a',
						't',
						'h',
						'e',
						'm',
					].map((letter, index) => {
						return (
							<motion.span
								key={index}
								variants={{
									hidden: {
										color: 'rgb(226 232 240)',
										opacity: 0.5,
									},
									visible: {
										color: 'rgb(29 235 217)',
										opacity: 1,
									},
								}}
							>
								{letter}
							</motion.span>
						);
					})}
				</motion.h1>
			</motion.div>
			<motion.p
				className='text-sm h-fit m-0 p-0 text-right'
				variants={{
					hidden: {
						opacity: 0,
						x: 50,
					},
					visible: {
						x: 0,
						opacity: 0.8,
					},
				}}
			>
				Software Engineer
			</motion.p>
		</motion.div>
	);
}

export default Intro;