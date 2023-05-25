/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { motion, AnimatePresence, AnimationControls } from 'framer-motion';
import { ImLinkedin } from 'react-icons/im';
import { useForm, ValidationError } from '@formspree/react';
import toast from 'react-hot-toast';
import { Sections } from '../types/types';

export const Contact: React.FC<{
	controls: AnimationControls,
	toast: typeof toast,
	openSection: Sections,
	toggleSection: Function,
}> = ({ controls, toast, openSection, toggleSection }) => {
	const [state, handleSubmit] = useForm('mnqyyvnj');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [formSubmitted, setFormSubmitted] = useState(false);
	useEffect(() => {
		if (state.succeeded && formSubmitted) {
			toast.dismiss();
			toast.success("Form successfully submitted!")
			setEmail('')
			setMessage('')
			setFormSubmitted(false);
		}
	}, [state.succeeded])
	useEffect(() => {
		if (state.submitting) {
			toast.loading("Submitting form...")
			setFormSubmitted(true);
		}
	}, [state.submitting])
	return (
		<motion.div
			className={
				openSection.contact
					? 'bg-stone-800 hover:shadow-[#1debd9]/50 rounded-lg border-[#1debd9] border-2 p-2 my-2 shadow-md hover:border-[#1debd9] hover:shadow-xl shadow-[#1debd9] cursor-pointer transition'
					: 'bg-stone-800 hover:shadow-[#1debd9]/50 rounded-lg border-slate-200 border-2 p-2 my-2 shadow-md hover:border-[#1debd9] hover:shadow-xl shadow-slate-500 cursor-pointer transition'
			}
			onClick={(e) => {
				if (!openSection.contact) {
					toggleSection();
					controls.start('open');
				} else if (openSection.contact) {
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
					height: '350px',
					scale: 1,
					transition: {
						type: 'tween',
						ease: 'backOut',
					},
					width: '90%',
				},
			}}
		>
			<motion.p className='text-2xl text-center select-none hover:text-[#1debd9]'>
				Contact Info
			</motion.p>
			<AnimatePresence>
				{openSection.contact && (
					<div className='border-0 border-gray-900 flex flex-col items-center justify-around'>
						<ul className='flex flex-row my-2'>
							<li>
								<ImLinkedin
									size='3em'
									className='fill-[#0077B5] hover:brightness-110 hover:scale-110 transition'
									title='My linked in profile'
									onClick={() => {
										window.open(
											'https://www.linkedin.com/in/isaiahlathem/',
											'_blank'
										);
									}}
								/>
							</li>
						</ul>
						<form
							className='border-0 border-green-500 w-5/6 flex flex-col'
							onClick={(e) => {
								e.stopPropagation();
							}}
							onSubmit={handleSubmit}
						>
							<p className='text-lg mt-2'>Send me a message</p>
							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type='email'
								className='rounded-lg border-slate-300 border-2 text-lg bg-transparent p-2 w-full my-1 shadow-md shadow-slate-500 focus:scale-105 transition'
								placeholder='Email Address'
								id="email"
								name='email'
							/>
							<ValidationError 
								prefix='Email'
								field='email'
								errors={state.errors}
							/>
							<textarea
								id='message'
								name='message'
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								placeholder='Message'
								className='rounded-lg border-slate-300 border-2 text-lg bg-transparent p-2 w-full my-1 shadow-md shadow-slate-500 focus:scale-105 transition'
							/>
							<ValidationError 
								prefix='Message'
								field='message'
								errors={state.errors}
							/>
							<button
								type='submit'
								disabled={state.submitting}
								className='border-2 border-slate-300 text-xl px-4 py-2 shadow-md shadow-slate-500 rounded-lg my-1 justify-self-end w-min self-center hover:shadow-xl hover:shadow-slate-500 transition active:scale-90 focus:scale-105'
							>
								Send
							</button>
						</form>
					</div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};
