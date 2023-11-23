import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-img': "url('../public/images/image.png')",
        'menu-line': "url('../public/images/menu-line.svg')",
        'arrow': "url('../public/images/Frame.png')",
        'speaker': "url('../public/images/speaker_icon.png')",
        'share': "url('../public/images/share_icon.png')",
        'play': "url('../public/images/play_icon.png')",
        'facebook': "url('../public/images/facebook_icon.png')",
        'linkedin': "url('../public/images/linkedin_icon.png')",
        'twitter': "url('../public/images/twitter_icon.png')",
        'facebook1': "url('../public/images/facebook1_icon.png')",
        'instagram': "url('../public/images/instagram_icon.png')",
        'twitter1': "url('../public/images/twitter1_icon.png')",
        'youtube': "url('../public/images/youtube_icon.png')",

      },
      fontFamily:{
        'lato':['Lato', 'Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
export default config
