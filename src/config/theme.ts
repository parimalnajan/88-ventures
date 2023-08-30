import { blue, red } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"
import { Roboto } from "next/font/google"
import { Inter_Tight } from "next/font/google"

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
})

export const InterTight = Inter_Tight({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: [ "Arial"],
})
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true
    body4: true
    bodyXL: true
    title1:true
  }
}
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#B225EB", 
      light: "#9CA3AF",
      dark: "#111827",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#1f303c",
      light: "#485966",
      dark: "#000716",
      contrastText: "#ffffff",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    //https://mui.com/material-ui/customization/typography/
    fontFamily: InterTight.style.fontFamily,

    //@ts-ignore
    title1:{
      fontWeight:400,
      fontSize: "16px",
      lineHeight: "24px",
    },  
    body1: {
      fontWeight:400,
      fontSize: "12px",
      lineHeight: "16px",
    },
    body2: {
      fontWeight:400,
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#F2F2F2",
          color: "#1F303C",
        },
      },
    },
  },
})

export default theme
