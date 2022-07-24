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
      // delay: 1,
      // when: 'beforeChildren',
      // staggerChildren: .5,
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
    y: "100%",
  },
  visible: (i: number) => ({
    opacity: .8,
    y: 0,
    transition: {
      delay: i * .01,
    }
  }),
  hover: (i: number) => ({
    scaleX: [1, 1.2, .9, 1.1, 1],
    scaleY: [1, .8, 1.1, .90, 1],
    y: [0, 0, -20, 0,  0],
    color: [
      'rgb(226 232 240)',
      'rgb(66, 135, 245)',
      'rgb(224, 36, 174)',
      'rgb(48, 184, 24)',
      'rgb(27, 191, 186)',
      'rgb(226 232 240)',],
    transition: {
      duration: 1,
      delay: i * .05,
    },
  }),
  base: (i: number) => ({
    y: 0,
    color: 'rgb(226 232 240)',
    transition: {
      color: {
        delay: i * .02,
      }
    }
  })
}

export const hr1Variant = {
  hidden: {
    scale: 0,
  },
  visible: {
    opacity: .8,
    originX: 0,
    scale: 1,
    transition: {
      duration: .5,
    }
  },
}

export const hr2Variant = {
  hidden: {
    scale: 0,
  },
  visible: {
    opacity: .8,
    originX: 0,
    scale: 1,
    transition: {
      duration: .5,
    }
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
    y: "100%",
   },
   visible: (i: number) => ({
    y: 0,
    opacity: .8,
    transition: {
      delay: i * .02,
    }
   }),
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
    hover: {
      transition: {
        staggerChildren: .05,
      }
    }
}

export const logoDiscordVariant = {
  hidden: {
    rotate: 180,
    x: "50%",
  },
  visible: {
    rotate: 0,
    x: 0,
    fill: 'rgb(226 232 240)',
    transition: {
      type: "spring",
      damping: 15,
    }
  },
  hover: {
    scaleX: [1, 1.2, .9, 1.1, 1],
    scaleY: [1, .8, 1.1, .90, 1],
    y: [0, 0, -20, 0,  0],
    fill: 'rgb(88, 101, 242)'
  },
  base: {
    y: 0,
    fill: 'rgb(226 232 240)',
  }
}

export const contactDiscordLetterVariant = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    y: 0,
    opacity: 1,
    fill: 'rgb(226 232 240)',
    transition: {
      type: "spring",
      bounce: 0.6,
    }
  },
  hover: {
    scaleX: [1, 1.2, .9, 1.1, 1],
    scaleY: [1, .8, 1.1, .90, 1],
    y: [0, 0, -20, 0,  0],
    fill: 'rgb(88, 101, 242)'
  },
  base: {
    y: 0,
    fill: 'rgb(226 232 240)',
  }
}

export const logoVariant = {
  hidden: {
    rotate: 180,
    x: "50%",
  },
  visible: {
    rotate: 0,
    x: 0,
    fill: 'rgb(226 232 240)',
    transition: {
      type: "spring",
      damping: 15,
    }
  },
  hover: {
    scaleX: [1, 1.2, .9, 1.1, 1],
    scaleY: [1, .8, 1.1, .90, 1],
    y: [0, 0, -20, 0,  0],
    fill: 'rgb(255, 255, 255)'
  },
  base: {
    y: 0,
    fill: 'rgb(226 232 240)',
  }
}

export const contactLetterVariant = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    y: 0,
    opacity: 1,
    fill: 'rgb(226 232 240)',
    transition: {
      type: "spring",
      bounce: 0.6,
    }
  },
  hover: {
    scaleX: [1, 1.2, .9, 1.1, 1],
    scaleY: [1, .8, 1.1, .90, 1],
    y: [0, 0, -20, 0,  0],
    fill: 'rgb(255, 255, 255)'
  },
  base: {
    y: 0,
    fill: 'rgb(226 232 240)',
  }
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
  }, 
  hover: {
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

export const viewWorkVariant = {
  hidden: {
    opacity: 0,
    y: "100%",
  }, 
  visible: (i: number) => ({
    opacity: .8,
    y: 0,
    transition: {
      delay: i * .02,
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