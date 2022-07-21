export const containerVariant = {
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
      staggerChildren: .5,
    },
  },
}

export const headerVariant = {
  hidden: { 
    opacity: 0,
    x: -50
   },
   visible: {
    x: 0,
    opacity: 1,
   },
}

export const nameVariant = {
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

export const titleVariant = {
  hidden: { 
    opacity: 0,
    x: 50
   },
   visible: {
    x: 0,
    opacity: .8,
   },
}

export const introVariant = {
  hidden: {
    opacity: 0,
    x: -50
  },
  visible: {
    opacity: .8,
    x: 0,
  },
}

export const hrVariant = {
  hidden: {
    scale: 0,
  },
  visible: {
    opacity: .8,
    scale: 1,
  },
}

export const reachMeSectionVariant = {
  visible: {
    transition: {
      staggerChildren: .7,
    }
  },
}

export const reachMeVariant = {
  hidden: { 
    opacity: 0,
    x: -50
   },
   visible: {
    x: 0,
    opacity: .8,
   },
}

export const discordVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: .05,
      }
    },
}

export const logoVariant = {
  hidden: {
    rotate: 180,
    x: "50%",
  },
  visible: {
    rotate: 0,
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
    }
  },
}

export const contactLetterVariant = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.6,
    }
  },
}

export const linkedInVariant = {
  hidden: {
    opacity: 0

  },
  visible: {
    opacity: 1,
  },
}

export const linkedInLeftLetterVariant = {
  hidden: {
    x: 100,
    opacity: 0, 
  },
  visible: {
    x: 0,
    opacity: 1,
    fill: 'rgb(226 232 240)',
  },
}

export const linkedInRightLetterVariant = {
  hidden: {
    x: -100,
    opacity: 0, 
  },
  visible: {
    x: 0,
    opacity: 1,
  }
}

export const linkedInLetterVariant = {
  hidden: {
    pathLength: 0,
    fill: 'none',
  },
  visible: {
    pathLength: 1,
    transition: {
      pathLength: {
        duration: 2,
      }
    }
  },
  default: {
    pathLength: 1,
  },
}

export const linkedLogoVariant = {
  hidden: {
    rotate: -180,
    x: "-50%"
  },
  visible: {
    rotate: 0,
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
    }
  },
}

export const linkedLogoTextVariant = {
  hidden: {
    rotate: -180,
    x: "-50%"
  },
  visible: {
    rotate: 0,
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
    }
  },
}

export const githubVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: .05,
    }
  }
}

export const viewWorkSectionVariant = {
  visible: {
    transition: {
      delayChildren: 2,
      
    }
  }
}

export const bounceInVariant = {
  hidden: {
    opacity: 0,
    top: "200%",
  }, 
  visible: (i: number) => ({
    opacity: 1,
    top: 0,
    transition: {
      type: "spring",
      bounce: 0.6,
      delay: i * .05 + 4,
      duration: 5,
    }
  })
}



// const drawVariant = {
//   hidden: {
//     pathLength: 0,
//     opacity: 0,
//   },
//   visible: {
//     pathLength: 1,
//     opacity: 1,
//     transition: {
//       pathLength: {
//         duration: 10,
//         delay: 1,
//       },
//       opacity: {
//         duration: .05,
//       }
//     }
//   }
// }