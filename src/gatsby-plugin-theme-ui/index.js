export default {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 1, 3, 7, 9, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Source Sans Pro",
    heading: "Source Serif Pro",
    monospace: "Fira Mono, monospace",
  },
  fontSizes: [12, 16, 18, 21, 24, 29, 48, 64, 96],
  fontWeights: {
    body: 300,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "hsla(0, 0%, 90%, 1)",
    header: "hsla(360, 100%, 100%, 1)",
    background: "#111",
    greyLight: "#999",
    greyMedium: "666",
    greyDark: "333",
    primary: "#994500",
    primaryDark: "##3c1b00",
    secondary: "#3378B8",
    muted: "#222",
    // modes: {
    //   dark: {
    //     text: "#fff",
    //     background: "#111",
    //     primary: "#93c",
    //     secondary: "#a9c",
    //     muted: "#1d1d1d",
    //   },
    // },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
      textDecoration: "none",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
}
