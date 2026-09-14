export const THEME = {
  colors: {
    brand: {
      nearBlack: '#08090B',
      dark: '#111318',
      warmWhite: '#F3F1EB',
      white: '#FFFFFF',
      blue: '#1A3C6E',
    },
    bg: {
      primary: '#08090B',
      secondary: '#111318',
      tertiary: '#1A1F2E',
    },
    text: {
      primary: '#F3F1EB',
      secondary: '#B8B5AC',
      muted: '#7A7770',
    },
  },
  spacing: {
    gutter: 'clamp(1rem, 4vw, 3rem)',
    section: 'clamp(4rem, 12vw, 8rem)',
    hero: 'clamp(6rem, 20vw, 12rem)',
  },
  breakpoints: {
    xs: 320,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
  durations: {
    fast: 0.3,
    normal: 0.6,
    slow: 0.9,
  },
} as const;