"use client"
import { createTheme ,ThemeOptions,ThemeProvider} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
import { Roboto } from "next/font/google";
import { pink } from "@mui/material/colors";
import tinycolor from 'tinycolor2';
const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
  });
  const primary =  '#00B4D8';
  const primaryText = '#fafafa';
  const secondary =  '#CAF0F8';
  const secondaryText = '#6E6E6E';
  const lightenRate = 7.5;
  const darkenRate = 10;
  const primaryTextLight = tinycolor('#000000')
    .lighten(20)
    .toHexString();
const themeOptions:ThemeOptions={ 
    
    palette: {  primary: { main: primary, light: tinycolor(primary).lighten(lightenRate).toHexString(), dark: tinycolor(primary).darken(darkenRate).toHexString(), }, 
    secondary: { main: secondary, light: tinycolor(secondary).lighten(lightenRate).toHexString(),
         dark: tinycolor(secondary).darken(darkenRate).toHexString(), },
          text: { primary: primaryText, secondary: secondaryText, }, background: { default: 'white', }, }, 
          typography: { fontFamily: 'Manrope', }, 
          components: {
            MuiAppBar:{
                styleOverrides:{
                    root:{
                        color:primaryText
                    }
                }

            },
             MuiFormLabel: { styleOverrides: { root: { color: primaryTextLight, }, }, },
              MuiTypography: { variants: [ { props: { variant: 'h5' }, style: { fontWeight: '700', }, }, { props: { variant: 'h6' }, style: { fontWeight: '400', }, }, { props: { variant: 'body1' }, style: { fontWeight: '400', }, }, { props: { variant: 'body2' }, style: { fontWeight: '400', }, }, { props: { variant: 'subtitle1' }, style: { fontWeight: '500', }, }, ], }, 
              MuiButton: { variants: [ { props: { variant: 'text' }, style: { textTransform: 'none',color:primaryText }, }, { props: { variant: 'contained' }, style: { color: 'white', '&:disabled': { backgroundColor: secondary, color: secondaryText, }, }, }, { props: { size: 'large' }, style: { fontWeight: '700', }, }, { props: { size: 'medium' }, style: { fontWeight: '600', }, }, { props: { size: 'small' }, style: { fontWeight: '600', }, }, ], }, MuiToggleButtonGroup: { styleOverrides: { root: { '&.MuiToggleButtonGroup-root': { backgroundColor: secondary, }, }, }, }, MuiToggleButton: { styleOverrides: { root: { '&.MuiToggleButton-root': { backgroundColor: secondary, textTransform: 'none', borderColor: 'none', fontWeight: 'bold', color: primaryText, border: 'none', '&:hover': { backgroundColor: 'none', fontWeight: 'bold', borderRadius: 5, }, '&.Mui-selected': { backgroundColor: primary, color: primaryText, fontWeight: 'bold', boxShadow: '2px 2px 2px 2px' + secondary, borderRadius: 5, }, '&.Mui-disabled': { backgroundColor: '', color: 'White', fontWeight: 'bold', borderRadius: 5, '&.Mui-selected': { backgroundColor:'blue', color: 'blue', fontWeight: 'bold', boxShadow: '2px 2px 2px 2px' , borderRadius: 5, }, }, }, }, }, }, }, };

const theme = createTheme(themeOptions);

export default function ThemeRegistry({children}:{children:React.ReactNode}){
    return (
        <NextAppDirEmotionCacheProvider options={{key:'mui'}}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    )
}