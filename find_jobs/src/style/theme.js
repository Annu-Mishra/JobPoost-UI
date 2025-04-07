import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: 'var(--font-roboto)',

    },
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        background: {
            default: '#f5f5f5',
            paper: '#ffffff',
        },
        text: {
            primary: '#000000',
            secondary: '#555555'
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#000000',
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#0859F7',
                    textDecoration: 'none',
                    '&:hover': {
                        textDecoration: 'underline',
                    },
                },
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#0859F7',
                    color: 'white',
                    textTransform: 'none',
                    borderRadius:'50px',
                    '&:hover': {
                        textDecoration: 'underline',
                    },
                },
                contained: {
                    backgroundColor: '#0859F7',
                    color: '#0000000',
                },
            },
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    '& label': {
                        color: 'gray',
                    },
                    '& label.Mui-focused': {
                        color: 'blue',
                    },

                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#ffffff", // Set AppBar background color
                    color: "#000000",          // Set text color
                    boxShadow: "none",         // Remove shadow if needed
                },
            },
        },
    }
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#bb86fc',
        },
        background: {
            default: '#121212',
            // box: '#333333',
            paper: '#1c1c1c',
        },
        text: {
            primary: '#ffffff',
            secondary: 'rgba(255, 255, 255, 0.7)',

        },

    },
    components: {
       MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#ffffff',
                },
            },
        },


        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#bb86fc',
                    textDecoration: 'none',
                    '&:hover': {
                        textDecoration: 'underline',
                    },
                },
            },
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    '& label': {
                        color: 'rgba(255, 255, 255, 0.7)',
                    },
                    '& label.Mui-focused': {
                        color: '#bb86fc',
                    },
                },
            },
        },

        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#fffffff", // Set AppBar background color
                    color: "#000000",          // Set text color
                },
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#0859F7',
                    color: 'white',
                    textTransform: 'none',
                    borderRadius:'50px',
                    '&:hover': {
                        textDecoration: 'underline',
                    },
                },
                contained: {
                    backgroundColor: '#0859F7',
                    color: '#0000000',
                },
            },
        },
    }
});

export default theme