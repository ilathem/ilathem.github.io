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

const Phrase: React.FC<{phraseControls: AnimationControls}> = ({phraseControls}) => {
	const introChars: Array<string> =
		'I like to build stuff with computers'.split('');
	return (
		<motion.div className='flex grow flex-col justify-around'>
			<motion.p className='text-xl sm:text-3xl text-center font-["Edu_TAS_Beginner"] mb-3'>
				{introChars.map((char, i) => {
					// manually enter in spaces bc inline block removes them...?
					if (char.charCodeAt(0) === 32) char = '\u00A0';
					return (
						<motion.span
							key={i}
							style={{ display: 'inline-block' }}
							custom={i}
							animate={phraseControls}
							initial='hidden'
							variants={{
								hidden: {
									opacity: 0,
									y: '100%',
								},
								visible: (i: number) => ({
									opacity: 0.8,
									y: 0,
									transition: {
										delay: i * 0.02,
									},
								}),
								hover: (i: number) => ({
									scaleX: [1, 1.2, 0.9, 1.1, 1],
									scaleY: [1, 0.8, 1.1, 0.9, 1],
									y: [0, 0, -20, 0, 0],
									color: [
										'rgb(226 232 240)',
										'rgb(66, 135, 245)',
										'rgb(224, 36, 174)',
										'rgb(48, 184, 24)',
										'rgb(27, 191, 186)',
										'rgb(226 232 240)',
									],
									transition: {
										duration: 1,
										delay: i * 0.05,
									},
								}),
								base: (i: number) => ({
									y: 0,
									color: 'rgb(226 232 240)',
									transition: {
										color: {
											delay: i * 0.02,
										},
									},
								}),
							}}
						>
							{char}
						</motion.span>
					);
				})}
			</motion.p>
		</motion.div>
	)
} 
export default Intro;