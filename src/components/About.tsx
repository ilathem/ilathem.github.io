import { AnimationControls, motion } from 'framer-motion';
import { Sections } from '../types/types';
import asu2 from '../img/asu2.png';

export const About: React.FC<{
    controls: AnimationControls;
    openSection: Sections;
    toggleSection: Function;
}> = ({ controls, openSection, toggleSection }) => {
    return (
        <motion.div
            className={
                openSection.about
                    ? 'group bg-stone-800 hover:shadow-[#1debd9]/50 rounded-lg border-[#1debd9] border-2 p-2 my-2 shadow-md hover:border-[#1debd9] hover:shadow-xl shadow-[#1debd9] cursor-pointer transition'
                    : 'group bg-stone-800 hover:shadow-[#1debd9]/50 rounded-lg border-slate-200 border-2 p-2 my-2 shadow-md hover:border-[#1debd9] hover:shadow-xl shadow-slate-500 cursor-pointer transition'
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
                    width: '80%',
                },
                open: {
                    height: '520px',
                    scale: 1,
                    transition: {
                        type: 'tween',
                        ease: 'easeOut',
                    },
                    width: '100%',
                },
            }}
        >
            <motion.p className='text-2xl text-center select-none transition group-hover:text-[#1debd9]'>
                About Me
            </motion.p>
            {openSection.about && (
                <div className='flex flex-col items-center w-full'>
                    <div className='flex flex-col text-center w-full'>
                        <div className='w-full my-2 h-[1px] bg-slate-200/50' />
                        <div className='bg-stone-700/25 py-2 rounded-xl shadow'>
                            <p className='text-lg underline underline-offset-2'>Proficiencies</p>
                            <div className='flex flex-row justify-evenly overflow-x-auto'>
                                <List list={['Languages', 'Java', 'C/C++', 'JavaScript', 'TypeScript', 'HTML', 'CSS']} />
                                <List list={['Skills', 'Fullstack Web Dev', 'Database Design', 'UI/UX']} />
                                <List list={['Frameworks', 'React', 'Astro', 'Vue', 'Tailwind', 'Next']} />
                            </div>
                        </div>
                        <div className='bg-stone-700/25 flex flex-col items-center mt-2 py-2 rounded-xl shadow'>
                            <p className='text-lg underline underline-offset-2'>Education</p>
                            <img src={asu2} className='bg-white rounded-xl w-1/2 self-center mb-2' alt="Arizona State Univeristy Logo" />
                            <p className='w-1/2 self-center'>Bachelor's of Science in Software Engineering at Arizona State University</p>
                        </div>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

const List: React.FC<{ list: Array<string> }> = ({ list }) => {
    return (
        <ul className='border-2 border-slate-400 p-2 rounded-xl h-min'>
            {list.map((value, index) => {
                return (
                    <li key={value} className={
                        index === 0 ?
                            'text-slate-200 pb-2'
                            :
                            'text-slate-200/80'
                    }>{value}</li>
                )
            })}
        </ul>
    )
}
