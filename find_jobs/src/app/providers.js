"use client";

import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "../style/theme";


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {

    if (typeof window !== 'undefined') {
      const storedDarkMode = localStorage.getItem('mode');
      if (storedDarkMode === 'dark') {
        setMode(darkTheme);
      }
    }
  }, []);

  useEffect(() => {

    if (typeof window !== 'undefined') {
      localStorage.setItem('mode', mode);
    }
  }, [mode]);

  const theme = useMemo(() => (mode === "light" ? lightTheme : darkTheme), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);


// import { ThemeProvider as MuiThemeProvider, CssBaseline, createTheme } from "@mui/material";
// import { ThemeProvider as NextThemeProvider, useTheme } from "next-themes";
// import { useEffect, useMemo, useState } from "react";
// import { lightTheme, darkTheme } from "../style/theme";

// export default function Providers({ children }) {
//     const { theme } = useTheme();

//     useEffect(() => {
//         console.log("Current theme:", theme);
//     }, [theme]);
//     // console.log(theme)
//     const muiTheme = useMemo(
//         () =>
//             createTheme({
//                 palette: {
//                     mode: theme === 'dark' ? 'dark' : 'light',
//                 },
//             }),
//         [theme]
//     );

//     return (
//         <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
//             <MuiThemeProvider theme={muiTheme}>
//                 <CssBaseline />
//                 {children}
//             </MuiThemeProvider>
//         </NextThemeProvider>
//     );
// }
