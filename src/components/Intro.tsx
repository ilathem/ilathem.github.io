import { motion } from 'framer-motion';
import {
  headerVariant,
  nameVariant,
  titleVariant,
  introVariant,
  hr1Variant,
} from './variants';

function Intro() {
	const introChars: Array<string> =
		'I like to build stuff with computers'.split('');

	return (
		<motion.div
			className='row-start-1 col-span-2 flex flex-col '
			variants={{
				hidden: {
					opacity: 0,
				},
				visible: {
					opacity: 1,
					transition: {
						staggerChildren: .2,
					},
				},
			}}
		>
			<Name />

			<motion.div className='flex grow flex-col justify-around'
				variants={{
					hidden: {
						opacity: 0,
					},
					visible: {
						opacity: 1,
						transition: {
							
						}
					}
				}}
			>
				<motion.p className='text-xl sm:text-3xl text-center font-["Edu_TAS_Beginner"] mb-3'>
					{introChars.map((char, i) => {
						// manually enter in spaces bc inline block removes them...?
						if (char.charCodeAt(0) === 32) char = '\u00A0';
						return (
							<motion.span
								key={i}
								style={{ display: 'inline-block' }}
								custom={i}
								variants={introVariant}
							>
								{char}
							</motion.span>
						);
					})}
				</motion.p>
				{/* <motion.p>Test String</motion.p> */}
			</motion.div>


			<motion.hr
				className='justify-self-end mb-0'
				variants={hr1Variant}
			/>
		</motion.div>
	);
}

const Name = () => {
	return (
		<motion.div className='sm:w-[28rem] sm:self-center border-none border-2'>
			<motion.div>
				<motion.h1
					className='m-0 text-2xl sm:text-4xl h-fit '
					variants={headerVariant}
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
								variants={nameVariant}
							>
								{letter}
							</motion.span>
						);
					})}
				</motion.h1>
			</motion.div>
			<motion.p
				className='text-sm h-fit m-0 p-0 text-right'
				variants={titleVariant}
			>
				Software developer
			</motion.p>
		</motion.div>
	);
}

export default Intro;