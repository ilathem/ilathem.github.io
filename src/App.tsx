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
        staggerChildren: 0.4,
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
      transition: {
        staggerChildren: 0.5,
      }
     }
  }

  const nameVariant = {
    hidden: {
      color: 'rgb(226 232 240)',
    },
    visible: {
      color: 'rgb(13 148 136)',
      transition: {
        delay: 1
      }
    },
    
  }

  // idea: use svg line drawing https://www.framer.com/docs/component/###svg-line-drawing for intro name

  return (
    <div className="bg-stone-600 w-screen h-screen flex items-center justify-center overflow-hidden font-['Comfortaa'] text-slate-200">
      <motion.div
        className="w-5/6 h-5/6 md:w-3/4 md:h-3/4 bg-stone-800 rounded-2xl drop-shadow-2xl grid grid-cols-2 grid-rows-6 gap-2"
        variants={containerVariant}
        initial='hidden'
        animate='visible'
      >
        <motion.h1
          className="col-span-2 p-6 text-3xl"
          variants={headerVariant}
        >Hi, I'm
          {[' I', 's', 'a', 'i', 'a', 'h', ' ', 'L', 'a', 't', 'h', 'e', 'm'].map(letter => {
            return (
              <motion.span
                variants={nameVariant}
              >{letter}</motion.span>
            )
          })}
          {/* <motion.span
            className="text-teal-600"
            variants={nameVariant}
          > Isaiah Lathem</motion.span> */}
        </motion.h1>
      </motion.div>
    </div>
  );
}

export default App;
