import React from 'react';
import { motion } from 'framer-motion';
import './index.css'; 
import { FaGithub } from 'react-icons/fa';

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
        staggerChildren: 0.1,
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

  const reachMeVariant = {
    hidden: { 
      opacity: 0,
      x: -50
     },
     visible: {
      x: 0,
      opacity: .8,
     }
  }

  const discordSvgVariant = {
    hidden: {
      rotate: -180,
    },
    visible: {
      rotate: 0,
      transition: {
        duration: 1,
        delay: 1
      }
    }
  }

  const pathVariant = {
    hidden: {
      pathLength: 0,
      // opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 5,
        },
        opacity: {
          duration: .05,
        }
      }
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
          className='row-start-2 col-span-2 flex flex-col items-center'
        >
          <motion.p
            className='text-sm text-center'
            variants={reachMeVariant}

          >Reach me here</motion.p>
          
          <motion.svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"
            variants={discordSvgVariant}
            initial='hidden'
            animate='visible'
          >
            <motion.path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"/>
          </motion.svg>

          <motion.svg
           width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"
           className="cursor-pointer"
           whileHover={{ scale: 1.2 }}
           
           >
            <motion.g id="logo"
            >
              <motion.path
                id="Vector" 
                d="M25 0C11.1958 0 0 11.1938 0 25C0 36.0458 7.1625 45.4167 17.0979 48.7229C18.3458 48.9542 18.75 48.1792 18.75 47.5208V42.8667C11.7958 44.3792 10.3479 39.9167 10.3479 39.9167C9.21042 37.0271 7.57083 36.2583 7.57083 36.2583C5.30208 34.7063 7.74375 34.7396 7.74375 34.7396C10.2542 34.9146 11.575 37.3167 11.575 37.3167C13.8042 41.1375 17.4229 40.0333 18.85 39.3938C19.0729 37.7792 19.7208 36.675 20.4375 36.0521C14.8854 35.4167 9.04792 33.2729 9.04792 23.6958C9.04792 20.9646 10.025 18.7354 11.6229 16.9854C11.3646 16.3542 10.5083 13.8104 11.8667 10.3688C11.8667 10.3688 13.9667 9.69792 18.7437 12.9313C20.7375 12.3771 22.875 12.1 25 12.0896C27.125 12.1 29.2646 12.3771 31.2625 12.9313C36.0354 9.69792 38.1312 10.3688 38.1312 10.3688C39.4917 13.8125 38.6354 16.3563 38.3771 16.9854C39.9812 18.7354 40.95 20.9667 40.95 23.6958C40.95 33.2979 35.1021 35.4125 29.5354 36.0313C30.4312 36.8063 31.25 38.3271 31.25 40.6604V47.5208C31.25 48.1854 31.65 48.9667 32.9187 48.7208C42.8458 45.4104 50 36.0417 50 25C50 11.1938 38.8062 0 25 0Z" 
                fill="white"
                variants={pathVariant}
                initial='hidden'
                animate='visible'
              />
            </motion.g>
          </motion.svg>


        </div>
        
      </motion.div>
    </div>
  );
}

export default App;
