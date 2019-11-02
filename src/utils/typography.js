import Typography from "typography"
import gray from "gray-percentage"
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants"

const fs = [
  "6px",
  "12px",
  "16px",
  "18px",
  "21px",
  "24px",
  "33px",
  "48px",
  "64px",
  "96px",
]

const theme = {
  title: "IP Theme",
  baseFontSize: "16px",
  baseLineHeight: 1.5625,

  googleFonts: [
    {
      name: "Source Serif Pro",
      styles: ["400", "600"],
    },
    {
      name: "Source Sans Pro",
      styles: ["400", "400i", "700"],
    },
  ],
  headerFontFamily: ["Source Serif Pro", "sans-serif"],
  bodyFontFamily: ["Source Sans Pro", "sans-serif"],
  headerColor: "#fff",
  bodyColor: "#eee",
  headerWeight: 600,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {
      color: "#62bdbd",
      textDecoration: "none",
      transition: "color .3s ease-in-out",
      fontSize: fs[4],
    },
    "a:hover, a:active": {
      color: "#97f7f7",
    },
    "h1,h2,h3,h4,h5,h6": {
      marginTop: rhythm(2),
    },
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      paddingLeft: rhythm(18 / 16),
      marginLeft: 0,
      borderLeft: `${rhythm(6 / 16)} solid`,
      borderColor: "#fcea0e",
    },
    "blockquote > :last-child": {
      marginBottom: 0,
    },
    "blockquote cite": {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    "blockquote cite:before": {
      content: '"— "',
    },
    [MOBILE_MEDIA_QUERY]: {
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        borderLeft: `${rhythm(3 / 16)} solid`,
        borderColor: "#fcea0e",
        paddingLeft: rhythm(9 / 16),
      },
    },
  }),
}

const typography = new Typography(theme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
