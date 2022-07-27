import React, { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

import './index.css'; 
import {
  containerVariant,
  headerVariant,
  nameVariant,
  titleVariant,
  introVariant,
  hr1Variant,
  reachMeSectionVariant,
  reachMeVariant,
  discordVariant,
  logoVariant,
  contactLetterVariant,
  linkedInVariant,
  linkedInLeftLetterVariant,
  linkedInRightLetterVariant,
  linkedLogoVariant,
  linkedLogoTextVariant,
  githubVariant,
  viewWorkSectionVariant,
  viewWorkVariant,
  hr2Variant,
  contactDiscordLetterVariant,
  logoDiscordVariant,
} from './components/variants';

function App() {

  const introStr = "I like to build stuff with computers";
  const introChars = introStr.split("");


  const containerControls = useAnimationControls();
  const headerControls = useAnimationControls();
  const titleControls = useAnimationControls();
  const introControls = useAnimationControls();
  const hr1Controls = useAnimationControls();
  const reachMeControls = useAnimationControls();
  const discordControls = useAnimationControls();
  const linkedControls = useAnimationControls();
  const hr2Controls = useAnimationControls();
  const viewWorkControls = useAnimationControls();
  const ghControls = useAnimationControls();

  useEffect(() => {

    containerControls.start("hidden");
    headerControls.start('hidden');
    titleControls.start('hidden');
    introControls.start('hidden');
    hr1Controls.start('hidden');
    reachMeControls.start('hidden');
    discordControls.start('hidden');
    linkedControls.start('hidden');
    hr2Controls.start('hidden');
    viewWorkControls.start('hidden');
    ghControls.start('hidden');  

    setTimeout(() => {
      containerControls.start('visible');
    }, 500)

    setTimeout(() => {
      headerControls.start('visible');
    }, 1000)

    setTimeout(() => {
      titleControls.start('visible');
    }, 1500)

    setTimeout(() => {
      introControls.start('visible');
    }, 2000)

    setTimeout(() => {
      hr1Controls.start('visible');
    }, 2500)

    setTimeout(() => {
      reachMeControls.start('visible');
    }, 3000)

    setTimeout(() => {
      discordControls.start('visible');
    }, 3500)

    setTimeout(() => {
      linkedControls.start('visible')
    }, 4000)

    setTimeout(() => {
      hr2Controls.start('visible')
    }, 4500)

    setTimeout(() => {
      viewWorkControls.start('visible')
    }, 5000)

    setTimeout(() => {
      ghControls.start('visible');
    }, 5500)

    setTimeout(() => {
      introControls.start('hover');
    }, 6000)
    
    

  },[containerControls, discordControls, ghControls, headerControls, hr1Controls, hr2Controls, introControls, linkedControls, reachMeControls, titleControls, viewWorkControls])

  

  // const [discordHover, setDiscordHover] = useState(false);
  const [linkedHover, setLinkedHover] = useState(false);


  return (
    <div className="w-screen h-screen absolute top-0 flex items-center justify-center overflow-hidden font-['Comfortaa'] text-slate-200">
      <motion.div
        className="w-5/6 h-5/6  bg-stone-800/30 rounded-2xl drop-shadow-2xl grid grid-cols-2 grid-rows-3 gap-2 p-5 max-w-screen-sm"
        variants={containerVariant}
        animate={containerControls}
      >
        <motion.div className='row-start-1 col-span-2 flex flex-col '> 
          <motion.div className='sm:w-[28rem] sm:self-center border-none border-2'>
            <motion.div>
              <motion.h1
                className="m-0 text-2xl sm:text-4xl h-fit "
                variants={headerVariant}
                animate={headerControls}
              >Hi, I'm
                {[' I', 's', 'a', 'i', 'a', 'h', ' ', 'L', 'a', 't', 'h', 'e', 'm'].map((letter, index) => {
                  return (
                    <motion.span
                      key={index}
                      variants={nameVariant}
                      custom={index}
                    >{letter}</motion.span>
                  )
                })}
              </motion.h1>
            </motion.div> 
            <motion.p
              className="text-sm h-fit m-0 p-0 text-right"
              variants={titleVariant}
              animate={titleControls}
            >
              Software developer
            </motion.p>
          </motion.div>

          <motion.div className= 'flex grow flex-col justify-around'>
            <motion.p
            className='text-xl sm:text-3xl text-center font-["Edu_TAS_Beginner"] mb-3'
            onMouseEnter={() => introControls.start('hover')}
            >
              {introChars.map((char, i) => {
                // manually enter in spaces bc inline block removes them...?
                if (char.charCodeAt(0) === 32) char = "\u00A0"
                return (
                  <motion.span
                    key={i}
                    style={{display: 'inline-block'}}
                    custom={i}
                    variants={introVariant}
                    animate={introControls}
                  >
                    {char}
                  </motion.span>
                )
              })}
            </motion.p>
          </motion.div>
          <motion.hr 
            className='justify-self-end mb-0'
            variants={hr1Variant}
            animate={hr1Controls}
            />
        </motion.div>



        <motion.div className='row-start-2 col-span-2 flex flex-col items-center justify-between'
          variants={reachMeSectionVariant}
        >

          <motion.p
            className='text-lg text-center'
          >
            {"Reach me here".split("").map((char, i) => {
              if (char.charCodeAt(0) === 32) char = "\u00A0"
              return (
                <motion.span
                  key={i}
                  style={{display: 'inline-block'}}
                  custom={i}
                  variants={reachMeVariant}
                  animate={reachMeControls}
                >
                  {char}
                </motion.span>
              )
            })}
          </motion.p>

          <motion.svg width="400" height="70" viewBox="0 -20 292 100" fill="none" xmlns="http://www.w3.org/2000/svg"
            variants={discordVariant}
            animate={discordControls}
            className="cursor-pointer mb-2"
            onMouseEnter={() => {
              // setDiscordHover(true)
              discordControls.start('hover')
            }}
            onMouseLeave={() => {
              // setDiscordHover(false)
              discordControls.start('base')
            }}
            onClick={() => {
              window.open("https://discordapp.com/users/ilathem#8147/", "_blank");
            }}
          >
            {/* logo */}
            <motion.path d="M61.7958 16.494C57.0736 14.2846 52.0244 12.6789 46.7456 11.7646C46.0973 12.9367 45.3399 14.5132 44.8177 15.7673C39.2062 14.9234 33.6463 14.9234 28.138 15.7673C27.6159 14.5132 26.8413 12.9367 26.1872 11.7646C20.9027 12.6789 15.8477 14.2905 11.1255 16.5057C1.60078 30.8988 -0.981215 44.9344 0.309785 58.7707C6.62708 63.4883 12.7493 66.3541 18.7682 68.2294C20.2543 66.1841 21.5797 64.0099 22.7215 61.7185C20.5469 60.8922 18.4641 59.8725 16.4961 58.6887C17.0182 58.3019 17.5289 57.8975 18.0223 57.4814C30.0257 63.0957 43.0677 63.0957 54.9277 57.4814C55.4269 57.8975 55.9375 58.3019 56.4539 58.6887C54.4801 59.8783 52.3916 60.898 50.217 61.7244C51.3588 64.0099 52.6785 66.19 54.1703 68.2352C60.195 66.3599 66.3229 63.4942 72.6402 58.7707C74.155 42.7309 70.0525 28.8242 61.7958 16.494ZM24.3568 50.2615C20.7535 50.2615 17.7985 46.8976 17.7985 42.8012C17.7985 38.7048 20.6904 35.3351 24.3568 35.3351C28.0233 35.3351 30.9782 38.6989 30.9151 42.8012C30.9208 46.8976 28.0233 50.2615 24.3568 50.2615ZM48.5932 50.2615C44.9899 50.2615 42.0349 46.8976 42.0349 42.8012C42.0349 38.7048 44.9267 35.3351 48.5932 35.3351C52.2596 35.3351 55.2146 38.6989 55.1515 42.8012C55.1515 46.8976 52.2596 50.2615 48.5932 50.2615Z" 
              // className={discordHover ? "fill-[#5865F2] transition-color" : "fill-slate-200 transition-colors"}
              variants={logoDiscordVariant}
              />
            {/* D */}
            <motion.path d="M98.0293 26.1707H113.693C117.469 26.1707 120.659 26.7743 123.276 27.9757C125.886 29.177 127.843 30.8531 129.14 32.998C130.436 35.1429 131.09 37.5984 131.09 40.3645C131.09 43.072 130.413 45.5275 129.059 47.7251C127.705 49.9286 125.645 51.6692 122.874 52.9526C120.103 54.236 116.671 54.8806 112.569 54.8806H98.0293V26.1707ZM112.408 47.5845C114.95 47.5845 116.907 46.934 118.272 45.6388C119.638 44.3378 120.321 42.568 120.321 40.3235C120.321 38.243 119.712 36.5845 118.496 35.3421C117.28 34.0997 115.438 33.4727 112.976 33.4727H108.076V47.5845H112.408Z" 
              // className={discordHover ? "fill-[#5865F2] transition-color delay-[20ms]" : "fill-slate-200 transition-colors delay-[20ms]"}
              variants={contactDiscordLetterVariant}/>
            {/* bottom part of i */}
            <motion.path d="M134.472 36.5435C137.478 37.8679 141.208 37.9265 144.283 36.5435V55.0154H134.472V36.5435Z" 
              // className={discordHover ? "fill-[#5865F2] transition-color delay-[40ms]" : "fill-slate-200 transition-colors delay-[40ms]"}
              variants={contactDiscordLetterVariant}/>
            {/* dot part of i */}
            <motion.path d="M139.382 33.4432C142.091 33.4432 144.288 31.4281 144.288 28.9424C144.288 26.4567 142.091 24.4417 139.382 24.4417C136.672 24.4417 134.476 26.4567 134.476 28.9424C134.476 31.4281 136.672 33.4432 139.382 33.4432Z" 
              // className={discordHover ? "fill-[#5865F2] transition-color delay-[40ms]" : "fill-slate-200 transition-colors delay-[40ms]"}
              variants={contactDiscordLetterVariant}/>
            {/* s */}
            <motion.path d="M154.541 54.8456C152.372 54.2713 150.415 53.4391 148.677 52.3432V45.5335C149.991 46.5707 151.752 47.4264 153.961 48.1003C156.17 48.7684 158.305 49.1024 160.37 49.1024C161.334 49.1024 162.063 48.9735 162.556 48.7156C163.05 48.4578 163.297 48.1472 163.297 47.7897C163.297 47.3795 163.165 47.0396 162.895 46.7641C162.625 46.4887 162.103 46.2601 161.329 46.0667L156.509 44.9591C153.749 44.3028 151.792 43.3944 150.628 42.2282C149.463 41.0678 148.883 39.5441 148.883 37.6571C148.883 36.0689 149.388 34.6918 150.41 33.5138C151.425 32.3359 152.871 31.4275 154.747 30.7887C156.624 30.1441 158.815 29.8218 161.334 29.8218C163.583 29.8218 165.643 30.0679 167.52 30.5602C169.396 31.0525 170.945 31.6795 172.179 32.4472V38.8878C170.916 38.1201 169.47 37.5165 167.818 37.0593C166.171 36.6081 164.479 36.3854 162.734 36.3854C160.215 36.3854 158.959 36.8249 158.959 37.6981C158.959 38.1084 159.154 38.4131 159.544 38.6182C159.934 38.8233 160.651 39.0343 161.69 39.257L165.706 39.9954C168.329 40.4584 170.285 41.273 171.57 42.4333C172.856 43.5937 173.498 45.3108 173.498 47.5846C173.498 50.0752 172.437 52.0502 170.308 53.5153C168.179 54.9804 165.161 55.7129 161.248 55.7129C158.947 55.7071 156.71 55.4199 154.541 54.8456Z" 
              // className={discordHover ? "fill-[#5865F2] transition-color delay-[60ms]" : "fill-slate-200 transition-colors delay-[60ms]"}
              variants={contactDiscordLetterVariant}/>
            {/* c */}
            <motion.path d="M182.978 53.9839C180.678 52.8352 178.939 51.2764 177.78 49.3073C176.621 47.3382 176.036 45.123 176.036 42.6616C176.036 40.2003 176.638 37.9968 177.843 36.057C179.048 34.1172 180.815 32.5935 183.145 31.4859C185.474 30.3783 188.257 29.8274 191.499 29.8274C195.515 29.8274 198.849 30.6889 201.5 32.4118V39.919C200.565 39.2626 199.474 38.7293 198.229 38.3191C196.984 37.9089 195.653 37.7037 194.23 37.7037C191.74 37.7037 189.795 38.1667 188.389 39.0985C186.983 40.0303 186.278 41.2434 186.278 42.7495C186.278 44.2263 186.96 45.4336 188.326 46.383C189.692 47.3265 191.671 47.8012 194.27 47.8012C195.607 47.8012 196.927 47.6019 198.229 47.2093C199.526 46.8108 200.645 46.3244 201.58 45.75V53.011C198.637 54.816 195.223 55.7185 191.338 55.7185C188.068 55.7068 185.279 55.1325 182.978 53.9839Z" 
              // className={discordHover ? "fill-[#5865F2] transition-color delay-[80ms]" : "fill-slate-200 transition-colors delay-[80ms]"}
              variants={contactDiscordLetterVariant}/>
            {/* o */}
            <motion.path d="M211.518 53.9841C209.2 52.8355 207.433 51.2649 206.216 49.2665C205 47.2681 204.386 45.0412 204.386 42.5798C204.386 40.1185 204.994 37.9208 206.216 35.9928C207.438 34.0647 209.194 32.5527 211.501 31.4568C213.801 30.3609 216.55 29.8159 219.734 29.8159C222.919 29.8159 225.667 30.3609 227.968 31.4568C230.269 32.5527 232.025 34.053 233.23 35.9693C234.435 37.8857 235.037 40.0833 235.037 42.574C235.037 45.0353 234.435 47.2623 233.23 49.2606C232.025 51.259 230.263 52.8296 227.945 53.9782C225.627 55.1269 222.89 55.7012 219.729 55.7012C216.567 55.7012 213.83 55.1327 211.518 53.9841ZM223.722 46.7055C224.698 45.7093 225.191 44.3907 225.191 42.7498C225.191 41.1089 224.703 39.802 223.722 38.835C222.747 37.8622 221.415 37.3758 219.729 37.3758C218.013 37.3758 216.67 37.8622 215.689 38.835C214.714 39.8079 214.226 41.1089 214.226 42.7498C214.226 44.3907 214.714 45.7093 215.689 46.7055C216.665 47.7018 218.013 48.2058 219.729 48.2058C221.415 48.1999 222.747 47.7018 223.722 46.7055Z" 
              // className={discordHover ? "fill-[#5865F2] transition-color delay-[100ms]" : "fill-slate-200 transition-colors delay-[100ms]"}
              variants={contactDiscordLetterVariant}/>
            {/* r */}
            <motion.path d="M259.17 31.3395V40.2004C258.149 39.5147 256.829 39.1748 255.194 39.1748C253.053 39.1748 251.401 39.8371 250.253 41.1615C249.1 42.486 248.526 44.5488 248.526 47.3383V54.8865H238.686V30.8883H248.326V38.5185C248.859 35.7289 249.726 33.672 250.919 32.3416C252.107 31.0172 253.644 30.355 255.515 30.355C256.932 30.355 258.149 30.6832 259.17 31.3395Z" 
              // className={discordHover ? "fill-[#5865F2] transition-color delay-[120ms]" : "fill-slate-200 transition-colors delay-[120ms]"}
              variants={contactDiscordLetterVariant}/>
            {/* d */}
            <motion.path d="M291.864 25.3503V54.8866H282.023V49.5127C281.191 51.5345 279.929 53.0758 278.231 54.1306C276.532 55.1797 274.432 55.7071 271.942 55.7071C269.716 55.7071 267.777 55.1562 266.118 54.0486C264.46 52.941 263.181 51.4232 262.28 49.4951C261.385 47.567 260.931 45.387 260.931 42.9491C260.903 40.435 261.379 38.1787 262.36 36.1803C263.336 34.1819 264.718 32.6231 266.497 31.5037C268.276 30.3844 270.307 29.8218 272.585 29.8218C277.273 29.8218 280.417 31.9022 282.023 36.0572V25.3503H291.864ZM280.555 46.5415C281.559 45.5452 282.058 44.2501 282.058 42.6678C282.058 41.1382 281.57 39.8899 280.595 38.9347C279.619 37.9795 278.282 37.4989 276.601 37.4989C274.943 37.4989 273.618 37.9853 272.625 38.9581C271.632 39.931 271.139 41.1909 271.139 42.7498C271.139 44.3087 271.632 45.5804 272.625 46.5649C273.618 47.5494 274.926 48.0417 276.561 48.0417C278.219 48.0359 279.55 47.5377 280.555 46.5415Z" 
              // className={discordHover ? "fill-[#5865F2] transition-color delay-[140ms]" : "fill-slate-200 transition-colors delay-[140ms]"}
              variants={contactDiscordLetterVariant}/>
          </motion.svg>

          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="400" 
            height="45" 
            viewBox="1.786 1.783 287.865 76.248"

            className="cursor-pointer m-2"

            variants={linkedInVariant}
            animate={linkedControls}

            onMouseEnter={() => setLinkedHover(true)}
            onMouseLeave={() => setLinkedHover(false)}

            onClick={() => {
              window.open("https://www.linkedin.com/in/isaiahlathem/", "_blank");
            }}
          >
            {/* 'in' box */}
            <motion.path  d="M213.882 7.245c0-3.015 2.508-5.462 5.6-5.462h64.568c3.093 0 5.6 2.447 5.6 5.462V72.57c0 3.016-2.507 5.461-5.6 5.461h-64.568c-3.092 0-5.6-2.445-5.6-5.46V7.244z"
              className="fill-[#069]"
              // className="fill-black hover:fill-[#068]"
              variants={linkedLogoVariant}
            />
            {/* 'Link' */}
            <motion.path d="M1.785 65.652h31.62V55.27H13.23V15.665H1.785v49.987zM49.414 65.652v-34.43H37.97v34.43h11.444zm-5.721-39.13c3.99 0 6.474-2.644 6.474-5.95-.074-3.378-2.484-5.947-6.398-5.947-3.915 0-6.475 2.57-6.475 5.947 0 3.306 2.484 5.95 6.324 5.95h.075zM54.727 65.652h11.444V46.424c0-1.029.074-2.058.377-2.791.826-2.056 2.709-4.186 5.871-4.186 4.142 0 5.799 3.158 5.799 7.784v18.42H89.66V45.91c0-10.576-5.646-15.497-13.176-15.497-6.173 0-8.884 3.451-10.39 5.802h.077v-4.993H54.727c.151 3.231 0 34.43 0 34.43zM105.805 15.665H94.361v49.987h11.444V54.489l2.86-3.601 8.96 14.764h14.078l-15.056-21.373 13.174-14.54h-13.776s-9.411 13.008-10.24 14.552V15.665z"
              className={linkedHover ? "fill-[#069] transition-colors stroke-[#069]" : "fill-white transition-colors"}
              variants={linkedInLeftLetterVariant}
            />
            {/* 'ed' */}
            <motion.path d="M162.306 51.29c.151-.884.377-2.58.377-4.498 0-8.9-4.518-17.936-16.413-17.936-12.724 0-18.597 10.063-18.597 19.19 0 11.288 7.153 18.337 19.65 18.337 4.97 0 9.561-.732 13.327-2.275l-1.506-7.558c-3.088 1.024-6.25 1.537-10.164 1.537-5.345 0-10.012-2.195-10.389-6.871l23.715.072v.002zm-23.79-7.742c.301-2.938 2.26-7.273 7.153-7.273 5.194 0 6.4 4.628 6.4 7.273h-13.552zM190.93 15.665v17.304h-.151c-1.657-2.422-5.12-4.038-9.71-4.038-8.81 0-16.564 7.05-16.49 19.094 0 11.164 7.003 18.435 15.735 18.435 4.744 0 9.26-2.058 11.52-6.024h.225l.453 5.216h10.163c-.15-2.424-.302-6.61-.302-10.723V15.664h-11.444zm0 34.05c0 .88-.075 1.763-.227 2.495-.675 3.16-3.386 5.361-6.699 5.361-4.742 0-7.83-3.818-7.83-9.84 0-5.654 2.637-10.208 7.906-10.208 3.538 0 6.022 2.423 6.7 5.433.15.663.15 1.398.15 2.058v4.7z"
              className={linkedHover ? "fill-[#069] transition-colors stroke-[#069]" : "fill-white transition-colors"}  
              variants={linkedInRightLetterVariant}
            />
            {/* 'in' */}
            <motion.path  d="M236.85 65.61V31.18h-11.444v34.43h11.445zm-5.72-39.13c3.99 0 6.474-2.644 6.474-5.948-.075-3.379-2.484-5.949-6.398-5.949-3.917 0-6.475 2.57-6.475 5.949 0 3.304 2.483 5.948 6.324 5.948h.074zM243.184 65.61h11.443V46.385c0-1.028.075-2.058.377-2.792.827-2.057 2.71-4.186 5.872-4.186 4.14 0 5.797 3.157 5.797 7.786V65.61h11.443V45.869c0-10.575-5.645-15.496-13.174-15.496-6.173 0-8.884 3.45-10.39 5.8h.076v-4.992h-11.443c.149 3.23-.001 34.43-.001 34.43z"
              className="fill-white"
              variants={linkedLogoTextVariant}
            />
          </motion.svg>

          <motion.hr 
            className="justify-self-end w-full"
            variants={hr2Variant}
            animate={hr2Controls}
          />

        </motion.div>


        <motion.div
          className="row-start-3 col-span-2 flex grow flex-col items-center h-fit justify-between" 
          variants={viewWorkSectionVariant}
        >
          
          
          <motion.p
            className="mb-2 h-10 text-lg"
          >
            {"View my work".split("").map((char, i) => {
              if (char.charCodeAt(0) === 32) char = "\u00A0"
              return (
                <motion.span
                  key={i}
                  style={{display: 'inline-block'}}
                  custom={i}
                  variants={viewWorkVariant}
                  animate={viewWorkControls}
                >
                  {char}
                </motion.span>
              )
            })}
          </motion.p>
            


          <motion.svg width="400" height="60" viewBox="-20 -40 400 120" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer h-min"
            onMouseEnter={() => {
              ghControls.start('hover')
            }}
            onMouseLeave={() => {
              ghControls.start('base')
            }}
            variants={githubVariant}
            animate={ghControls}

            onClick={() => {
              window.open("https://github.com/ilathem", "_blank");
            }}
          >
            <motion.path id="gh-logo" fill-rule="evenodd" clip-rule="evenodd" d="M40.0003 -1.14826e-06C17.9117 -1.14826e-06 0 17.9077 0 39.9997C0 57.6729 11.4613 72.6667 27.3547 77.956C29.3538 78.3262 30.0877 77.0881 30.0877 76.0316C30.0877 75.0778 30.0506 71.9268 30.0334 68.5844C18.9052 71.0041 16.5571 63.8649 16.5571 63.8649C14.7375 59.2414 12.1158 58.012 12.1158 58.012C8.48653 55.5294 12.3893 55.5804 12.3893 55.5804C16.406 55.8619 18.5211 59.7024 18.5211 59.7024C22.0887 65.8176 27.8786 64.0497 30.1612 63.0276C30.5202 60.443 31.5569 58.677 32.7008 57.6788C23.8162 56.6674 14.4765 53.2375 14.4765 37.9105C14.4765 33.5434 16.0391 29.9751 18.5979 27.1738C18.1826 26.1657 16.8134 22.098 18.9854 16.5882C18.9854 16.5882 22.3444 15.5131 29.9883 20.6884C33.179 19.8021 36.601 19.3576 40.0003 19.3424C43.3997 19.3576 46.8243 19.8021 50.021 20.6884C57.6557 15.5131 61.01 16.5882 61.01 16.5882C63.1873 22.098 61.8174 26.1657 61.4021 27.1738C63.9669 29.9751 65.5189 33.5434 65.5189 37.9105C65.5189 53.2739 56.1613 56.6568 47.2542 57.647C48.6889 58.8883 49.9673 61.3226 49.9673 65.0545C49.9673 70.406 49.9209 74.7135 49.9209 76.0316C49.9209 77.0961 50.641 78.3433 52.6685 77.9506C68.5533 72.6554 80 57.6669 80 39.9997C80 17.9077 62.091 -1.14826e-06 40.0003 -1.14826e-06" 
              // className={ghHover ? "fill-white transition-colors" : "fill-slate-300 transition-colors"}
              variants={logoVariant}
            />
            <motion.path id="gh-G" d="M145.176 33.9514H124.157C123.615 33.9514 123.175 34.3916 123.175 34.9347V45.2104C123.175 45.7528 123.615 46.1944 124.157 46.1944H132.356V58.9618C132.356 58.9618 130.515 59.5896 125.425 59.5896C119.42 59.5896 111.031 57.3951 111.031 38.9479C111.031 20.4979 119.767 18.0701 127.967 18.0701C135.067 18.0701 138.124 19.3194 140.071 19.9215C140.683 20.109 141.248 19.5007 141.248 18.9576L143.592 9.02846C143.592 8.77498 143.506 8.46875 143.217 8.26111C142.427 7.69791 137.606 5 125.425 5C111.394 5 97 10.9694 97 39.668C97 68.3666 113.479 72.643 127.366 72.643C138.864 72.643 145.839 67.7298 145.839 67.7298C146.126 67.5708 146.158 67.1694 146.158 66.9847V34.9347C146.158 34.3916 145.718 33.9514 145.176 33.9514Z" 
              // className={ghHover ? "fill-white transition-colors" : "fill-slate-300 transition-colors"}
              variants={contactLetterVariant}
            />
            <motion.path id="gh-i-base" d="M166.663 57.3042C166.663 55.7167 166.663 28.7174 166.663 28.7174C166.663 28.1743 166.224 27.7306 165.683 27.7306H153.886C153.345 27.7306 152.861 28.2889 152.861 28.8313C152.861 28.8313 152.861 63.2306 152.861 69.7875C152.861 70.991 153.611 71.3493 154.581 71.3493C154.581 71.3493 159.617 71.3493 165.21 71.3493C166.376 71.3493 166.663 70.7764 166.663 69.7681C166.663 67.5729 166.663 58.9729 166.663 57.3042Z" 
              // className={ghHover ? "fill-white transition-colors" : "fill-slate-300 transition-colors"}
              variants={contactLetterVariant}
            />
            <motion.path id="gh-i-dot" d="M167.508 16.5646C167.508 12.3034 164.092 8.85968 159.877 8.85968C155.666 8.85968 152.247 12.3034 152.247 16.5646C152.247 20.8222 155.666 24.275 159.877 24.275C164.092 24.275 167.508 20.8222 167.508 16.5646Z" 
              // className={ghHover ? "fill-white transition-colors" : "fill-slate-300 transition-colors"}
              variants={contactLetterVariant}
            />
            <motion.path id="gh-t" d="M200.676 27.725H191.799C191.799 27.725 191.786 15.9993 191.786 15.9972C191.786 15.5528 191.556 15.3313 191.043 15.3313H178.946C178.475 15.3313 178.223 15.5382 178.223 15.9903V28.1097C178.223 28.1097 172.161 29.5729 171.75 29.6917C171.342 29.8097 171.042 30.1861 171.042 30.6354V38.2514C171.042 38.7993 171.479 39.241 172.02 39.241H178.223C178.223 39.241 178.223 47.2069 178.223 57.5632C178.223 71.1722 187.769 72.509 194.21 72.509C197.154 72.509 200.674 71.5639 201.256 71.3493C201.607 71.2201 201.811 70.8556 201.811 70.4611L201.822 62.0826C201.822 61.5368 201.36 61.0944 200.84 61.0944C200.322 61.0944 198.999 61.3049 197.637 61.3049C193.276 61.3049 191.799 59.2778 191.799 56.6528C191.799 54.0306 191.798 39.241 191.798 39.241H200.676C201.217 39.241 201.656 38.7993 201.656 38.2514V28.7118C201.656 28.1653 201.217 27.725 200.676 27.725Z" 
              // className={ghHover ? "fill-white transition-colors" : "fill-slate-300 transition-colors"}
              variants={contactLetterVariant}
            />
            <motion.path id="gh-H" d="M253.498 8.43817C253.498 7.89164 253.065 7.44998 252.522 7.44998H240.687C240.147 7.44998 239.707 7.89164 239.707 8.43817C239.707 8.44095 239.711 31.3097 239.711 31.3097H221.263V8.43817C221.263 7.89164 220.828 7.44998 220.286 7.44998H208.452C207.914 7.44998 207.474 7.89164 207.474 8.43817V70.3673C207.474 70.9139 207.914 71.3583 208.452 71.3583H220.286C220.828 71.3583 221.263 70.9139 221.263 70.3673V43.8784H239.711C239.711 43.8784 239.678 70.3652 239.678 70.3673C239.678 70.9139 240.117 71.3583 240.658 71.3583H252.521C253.063 71.3583 253.497 70.9139 253.498 70.3673V8.43817Z" 
              // className={ghHover ? "fill-white transition-colors" : "fill-slate-300 transition-colors"}
              variants={contactLetterVariant}
            />
            <motion.path id="gh-u" d="M298.475 27.8236H286.731C286.193 27.8236 285.754 28.2681 285.754 28.8139V59.1799C285.754 59.1799 282.77 61.3625 278.536 61.3625C274.301 61.3625 273.178 59.441 273.178 55.2944C273.178 51.1431 273.178 28.8139 273.178 28.8139C273.178 28.2681 272.74 27.8236 272.201 27.8236H260.281C259.744 27.8236 259.303 28.2681 259.303 28.8139C259.303 28.8139 259.303 44.9847 259.303 57.3C259.303 69.616 266.167 72.6285 275.609 72.6285C283.356 72.6285 289.602 68.3493 289.602 68.3493C289.602 68.3493 289.899 70.6049 290.034 70.8722C290.168 71.1389 290.519 71.4083 290.898 71.4083L298.481 71.3743C299.018 71.3743 299.459 70.9299 299.459 70.3861L299.455 28.8139C299.455 28.2681 299.017 27.8236 298.475 27.8236Z" 
              // className={ghHover ? "fill-white transition-colors" : "fill-slate-300 transition-colors"}
              variants={contactLetterVariant}
            />
            <motion.path id="gh-b" d="M325.942 61.325C321.868 61.2014 319.105 59.3528 319.105 59.3528V39.741C319.105 39.741 321.831 38.0702 325.175 37.7715C329.404 37.3931 333.479 38.6702 333.479 48.7591C333.479 59.3973 331.64 61.4972 325.942 61.325ZM330.574 26.4327C323.904 26.4327 319.367 29.409 319.367 29.409V8.43821C319.367 7.89168 318.929 7.45001 318.39 7.45001H306.522C305.982 7.45001 305.544 7.89168 305.544 8.43821V70.3674C305.544 70.9139 305.982 71.3584 306.523 71.3584C306.524 71.3584 314.755 71.3584 314.758 71.3584C315.129 71.3584 315.409 71.1674 315.617 70.8327C315.822 70.4993 316.117 67.9771 316.117 67.9771C316.117 67.9771 320.97 72.5757 330.156 72.5757C340.942 72.5757 347.128 67.1056 347.128 48.0167C347.128 28.9271 337.249 26.4327 330.574 26.4327Z" 
              // className={ghHover ? "fill-white transition-colors" : "fill-slate-300 transition-colors"}
              variants={contactLetterVariant}
            />
          </motion.svg>


        </motion.div>


        
      </motion.div>
    </div>
  );
}

export default App;
