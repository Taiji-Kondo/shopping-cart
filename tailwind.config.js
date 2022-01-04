const path = require('path')

const plugin = require('tailwindcss/plugin')

const variables = require('./.config/variables.json')
const TailwindSettings = require(path.resolve(__dirname, '.config/tailwind'))

// Rem function
function rem(target) {
  return `${target / 16}rem`
}

// Make wrapper component
const maxWidthNum = rem(variables.breakpoints.lg + variables.padding * 2)
const paddingNum = rem(variables.padding)

// Make breakpoints(rem)
function breakpointLoop($date) {
  const breakpointList = {}
  for (const property of Object.keys($date)) {
    breakpointList[property] = rem($date[property])
  }
  return breakpointList
}
const remBreakpoints = breakpointLoop(variables.breakpoints)

// Main thread
module.exports = {
  theme: {
    screens: remBreakpoints,
    extend: {
      colors: variables.colors,
      backgroundColor: variables.colors,
      fontFamily: variables.fontFamily,
      zIndex: variables.zIndex,
      lineHeight: variables.lineHeight,
      width: {
        '10%': '10%', // Required
        '30%': '30%', // Required
        '70%': '70%', // Required
        '90%': '90%', // Required
      },
      height: {
        '1/2': '50%', // Required
      },
      spacing: {
        youtube: '56.25%', // Required
        full: '100%', // Required
      },
      inset: {
        '1/2': '50%', // Required
      },
    },
  },
  plugins: [
    // -- Add original utilities -- //
    plugin(({ addUtilities }) => {
      const newUtilities = {}
      // Make Utility function
      const makeUtilities = (initialValue, limitValue, addValue, selectorName, utilityName) => {
        for (let i = initialValue; i <= limitValue; i += addValue) {
          const calcSize = `${i / 16}rem`
          newUtilities[`.${utilityName}-${i}`] = { [selectorName]: calcSize }
        }
      }
      // fontSize utilities
      makeUtilities(10, 50, 2, 'fontSize', 'text')
      // maxWidth utilities
      makeUtilities(4, 1200, 4, 'maxWidth', 'max-w')
      newUtilities['.max-w-none'] = { ['maxWidth']: 'none' }
      newUtilities['.max-w-full'] = { ['maxWidth']: '100%' }
      // boxShadow utilities
      newUtilities['.shadow-large'] = { ['boxShadow']: '0 3px 6px rgba(0,0,0, 0.16)' }
      newUtilities['.shadow-medium'] = { ['boxShadow']: '0 0 6px rgba(0,0,0, 0.16)' }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }),
    // -- Add original components -- //
    plugin(({ addComponents }) => {
      const newComponents = {
        '.wrapper': {
          maxWidth: maxWidthNum,
          padding: `0 ${paddingNum}`,
          margin: '0 auto',
        },
        '.overflow': {
          marginRight: 'calc(50% - 50vw)',
          marginLeft: 'calc(50% - 50vw)',
          '&-true': {
            paddingRight: 'calc(50vw - 50%)',
            paddingLeft: 'calc(50vw - 50%)',
            marginRight: 'calc(50% - 50vw)',
            marginLeft: 'calc(50% - 50vw)',
          },
        },
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&-x': {
            display: 'flex',
            justifyContent: 'center',
          },
          '&-y': {
            display: 'flex',
            alignItems: 'center',
          },
          '&-between': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
        },
        '.position': {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          '&-x': {
            left: '50%',
            transform: 'translateX(-50%)',
          },
          '&-y': {
            top: '50%',
            transform: 'translateY(-50%)',
          },
        },
        '.hover-opacity': {
          transition: 'opacity .3s ease-in',
          '&:hover': {
            opacity: '.75',
          },
        },
      }
      addComponents(newComponents, ['responsive'])
    }),
  ],
  purge: {
    content: TailwindSettings.tailwind.purge,
    options: {
      whitelist: TailwindSettings.tailwind.whitelist,
    },
  },
  // remove default utilities
  corePlugins: {
    fontSize: false,
    colors: false,
    backgroundColors: false,
    boxShadow: false,
  },
  important: true,
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
}
