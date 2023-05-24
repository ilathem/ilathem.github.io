import { AnimatePresence, AnimationControls, motion } from "framer-motion"
import { ReactNode, useState } from "react";

export const ExpandableSection: React.FC<{
	title: string,
	controls: AnimationControls
    children?: ReactNode
}> = ({
	title,
	controls,
    children
}) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<motion.div
			className={isOpen  ? 
                        'w-5/6 bg-stone-800 hover:shadow-[#1debd9]/50 rounded-lg border-[#1debd9] border-2 p-2 m-2 shadow-md hover:border-[#1debd9] hover:shadow-xl shadow-slate-500 cursor-pointer transition'
                        :
                        'w-5/6 bg-stone-800 hover:shadow-[#1debd9]/50 rounded-lg border-slate-200 border-2 p-2 m-2 shadow-md hover:border-[#1debd9] hover:shadow-xl shadow-slate-500 cursor-pointer transition'}
			onClick={e => {
				if (!isOpen) {
					setIsOpen(true);
					controls.start('open')
				} else if (isOpen) {
					setIsOpen(false);
					controls.start('closed')
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
                        type: "tween",
                        ease: "easeOut",
                    }
				},
				open: {
					height: '600px',
					scale: 1,
                    transition: {
                        type: "tween",
                        ease: "backOut",
                    }
				},
			}}
		>
			<motion.p className='text-2xl text-center'>{title}</motion.p>
            <AnimatePresence>
                {isOpen && children}
            </AnimatePresence>
		</motion.div>
	)
}
