import React from 'react';
import { motion } from 'framer-motion';
import './index.css'; 

function App() {

  const containerVariant = {
    hidden: {
      x: '-100vw',
      opacity: 0,
      scale: 0,
      rotate: -90
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.05,
      },
    },
  }

  const headerVariant = {
    hidden: { 
      opacity: 0,
      x: -50
     },
     visible: {
      x: 0,
      opacity: 1,
     }
  }

  const nameVariant = {
    hidden: {
      color: 'rgb(226 232 240)',
      opacity: .5,
    },
    visible: (i: number) => ({
      color: 'rgb(29 235 217)',
      opacity: 1,
      transition: {
        delay: i * .05 + .25,
      }
    }),
  }

  const titleVariant = {
    hidden: { 
      opacity: 0,
      x: 50
     },
     visible: {
      x: 0,
      opacity: .8,
     }
  }

  const introVariant = {
    hidden: {
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: .8,
      x: 0,
    }
  }

  const hrVariant = {
    hidden: {
      scale: 0,
    },
    visible: {
      opacity: .8,
      scale: 1,
    }
  }

  // idea: use svg line drawing https://www.framer.com/docs/component/###svg-line-drawing for intro name

  // className= 'border-4 border-indigo-500'

  return (
    <div className="bg-stone-600 w-screen h-screen flex items-center justify-center overflow-hidden font-['Comfortaa'] text-slate-200">
      <motion.div
        className="w-5/6 h-5/6 lg:w-3/4 lg:h-3/4 bg-stone-800 rounded-2xl drop-shadow-2xl grid grid-cols-2 grid-rows-3 gap-2 p-5"
        variants={containerVariant}
        initial='hidden'
        animate='visible'
      >
        <div className='row-start-1 col-span-2 flex flex-col'> 
          <div>
            <div>
              <motion.h1
                className="m-0 text-xl sm:text-2xl lg:text-4xl h-fit break-after-column"
                variants={headerVariant}
              >Hi, I'm
                {[' I', 's', 'a', 'i', 'a', 'h', ' ', 'L', 'a', 't', 'h', 'e', 'm'].map((letter, index) => {
                  return (
                    <motion.span
                      variants={nameVariant}
                      custom={index}
                    >{letter}</motion.span>
                  )
                })}
              </motion.h1>
            </div>
            <motion.p
              className="text-sm h-fit m-0 p-0 text-right"
              variants={titleVariant}
            >
              Software developer
            </motion.p>
          </div>
          <div
            className= 'grow flex flex-col justify-evenly'
          >
            <motion.p
            className='text-xl md:text-2xl text-center font-["Edu_TAS_Beginner"] mb-3'
            variants={introVariant}
            >I like to build stuff with computers.</motion.p>
            <motion.hr 
            className='justify-self-end mb-0'
            variants={hrVariant}
            />
          </div>
        </div>

        <div
          className='row-start-2 col-span-2 '
        >
          <motion.p

          >Reach me here</motion.p>

        </div>
        
      </motion.div>
    </div>
  );
}

export default App;
