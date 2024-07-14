import { createTheme } from "@mui/material/styles";

// x|s, extra-small: 0px
// s|m, small: 600px
// m|d, medium: 900px
// l|g, large: 1200px
// x|l, extra-large: 1536px

export let theme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 900,
            desktop: 1140,
        },
    },
    palette: {
        mode: "light",
        primary: {
            main: "#1b5bf7",
            light: "#f4f7ff",
        },
        secondary: { main: "#e0e8ff" },
        info: {
            main: "#ff5722",
            light: "#FF572233",
        },
        error: {
            main: "#F50000",
            light: "#F5000033",
        },
        warning: {
            main: "#01CAB0",
            light: "#01CAB033",
        },
        common: {
            black: "#18191f",
        },
    },
    typography: {
        fontFamily: `'Manrope-Regular', sans-serif`,
    },
    components: {
        MuiContainer: {
            defaultProps: {
                disableGutters: true,
                fixed: true,
                maxWidth: "xl",
            },
        },
        MuiStack: {
            defaultProps: {
                direction: "row",
            },
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                disableFocusRipple: true,
                disableRipple: true,
                variant: "contained",
            },
            styleOverrides: {
                root: {
                    textTransform: "none",
                    minWidth: "112px",
                    maxWidth: "248px",
                    transitionBehavior: "normal",
                    transitionDuration: "0.2s",
                    transitionTimingFunction: "ease-in-out",
                    transitionDelay: "0s",
                    transitionProperty: "all",
                    ":hover": {
                        transform: "scale(1.05)",
                        backgroundColor: "#1b5bf7",
                    },
                },
            },
        },
    },
});

theme = createTheme(theme, {
    components: {
        MuiContainer: {
            styleOverrides: {
                maxWidthXl: {
                    [theme.breakpoints.down("desktop")]: {
                        padding: "0 16px",
                        maxWidth: "100%",
                    },
                    [theme.breakpoints.up("desktop")]: {
                        maxWidth: "1120px",
                    },
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.common.white,
                    boxShadow: theme.shadows[1],
                    borderRadius: "8px",
                    padding: "18px 0px",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                sizeSmall: {
                    fontSize: 14,
                    padding: "5px 16px",
                    borderRadius: 8,
                },
                sizeMedium: {
                    fontSize: 20,
                    padding: "5px 16px",
                    borderRadius: 8,
                },
                sizeLarge: {
                    fontSize: 20,
                    padding: "8px 16px",
                    borderRadius: 8,
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    [theme.breakpoints.down("tablet")]: {
                        fontSize: 24,
                        fontFamily: `'Manrope-Bold', sans-serif`,
                    },
                    [theme.breakpoints.between("tablet", "desktop")]: {
                        fontSize: 40,
                        fontFamily: `'Manrope-Bold', sans-serif`,
                    },
                    [theme.breakpoints.up("desktop")]: {
                        fontSize: 40,
                        fontFamily: `'Manrope-Bold', sans-serif`,
                    },
                },
                h2: {
                    [theme.breakpoints.down("desktop")]: {
                        fontSize: 18,
                        fontFamily: `'Manrope-Bold', sans-serif`,
                    },
                    [theme.breakpoints.up("desktop")]: {
                        fontSize: 24,
                        fontFamily: `'Manrope-Ragular', sans-serif`,
                    },
                },
                h3: {
                    [theme.breakpoints.down("desktop")]: {
                        fontSize: 16,
                        fontFamily: `'Manrope-Medium', sans-serif`,
                    },
                    [theme.breakpoints.up("desktop")]: {
                        fontFamily: `'Manrope-Medium', sans-serif`,
                        fontSize: 20,
                    },
                },
                h4: {
                    [theme.breakpoints.down("desktop")]: {
                        fontSize: 16,
                        fontFamily: `'Manrope-Regular', sans-serif`,
                    },
                    [theme.breakpoints.up("desktop")]: {
                        fontFamily: `'Manrope-Regular', sans-serif`,
                        fontSize: 20,
                    },
                },
                body1: {
                    fontFamily: `'Manrope-Medium', sans-serif`,
                    fontSize: 14,
                },
                body2: {
                    fontFamily: `'Manrope-Regular', sans-serif`,
                    fontSize: 13,
                },
                subtitle1: {
                    fontFamily: `'Manrope-Regular', sans-serif`,
                    fontSize: 12,
                    color: theme.palette.grey[600],
                },
                subtitle2: {
                    fontFamily: `'Manrope-Regular', sans-serif`,
                    fontSize: 11,
                },
            },
        },
    },
});
