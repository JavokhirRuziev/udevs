import Box from "@mui/material/Box";
import { ReactComponent as MainBanner } from "../../assets/images/main-banner.svg";
import { ReactComponent as LogoLarge } from "../../assets/images/icons/logo-large.svg";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { headerCategories } from "../../assets/data/headerData";
import useBreakpoints from "../../hooks/breakpoints";

const sentences: string[] =
    headerCategories[2]?.children?.map((el) => el?.name) || [];

const BannerMain = () => {
    const { mobile } = useBreakpoints();
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        let typingTimeout: any;
        if (isTyping) {
            if (charIndex < sentences[currentSentenceIndex].length) {
                typingTimeout = setTimeout(() => {
                    setDisplayedText(
                        (prev) =>
                            prev + sentences[currentSentenceIndex][charIndex]
                    );
                    setCharIndex((prev) => prev + 1);
                }, 100);
            } else {
                setTimeout(() => {
                    setIsTyping(false);
                }, 1000);
                typingTimeout = setTimeout(() => {
                    setIsTyping(true);
                    setCharIndex(0);
                }, 2000);
            }
        } else {
            if (charIndex > 0) {
                typingTimeout = setTimeout(() => {
                    setDisplayedText((prev) => prev.slice(0, -1));
                    setCharIndex((prev) => prev - 1);
                }, 100);
            } else {
                setCurrentSentenceIndex(
                    (prev) => (prev + 1) % sentences.length
                );
                setIsTyping(true);
            }
        }

        return () => clearTimeout(typingTimeout);
    }, [charIndex, isTyping, currentSentenceIndex]);

    useEffect(() => {
        const elements = document.querySelectorAll(".staggered");
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.remove("hidden");
                element.classList.add("SlideFromBottomToTop");
            }, index * 500);
        });
    }, []);

    return (
        <Box className="bg-main">
            <Container>
                <Box sx={leftSideTextWrapperStyles}>
                    <Box sx={leftSideContainerStyles}>
                        <LogoLarge className="staggered hidden" id="logo" />
                        <Typography
                            variant="h1"
                            mb={"20px"}
                            color={"grey.700"}
                            className="staggered hidden"
                        >
                            IT-Outsourcing Company
                        </Typography>
                        <Typography
                            variant="h1"
                            mb={"48px"}
                            color={"primary.main"}
                            className="staggered hidden"
                        >
                            {displayedText}
                            <Typography
                                component={"span"}
                                className={`cursor`}
                                ml={0.5}
                            ></Typography>
                        </Typography>
                        {!mobile && (
                            <Button
                                size="large"
                                fullWidth
                                className="staggered"
                            >
                                Contact
                            </Button>
                        )}
                    </Box>
                    <Box sx={bannerContainerStyles}>
                        <MainBanner id="banner" />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default BannerMain;

const leftSideTextWrapperStyles = {
    display: "flex",
    justifyContent: {
        mobile: "center",
        desktop: "space-between",
        tablet: "space-between",
    },
    p: { mobile: "94px 0px", desktop: "110px 0px", tablet: "110px 0px" },
    alignItems: "center",
    mt: "72px",
    flexDirection: { mobile: "column", tablet: "unset", desktop: "unset" },
};

const leftSideContainerStyles = {
    maxWidth: { desktop: 547, tablet: 547, mobile: "100%" },
    width: { mobile: "100%", tablet: "50%", desktop: "50%" },
    textAlign: { mobile: "center", desktop: "unset", tablet: "unset" },
    "#logo": {
        width: { mobile: 125, desktop: 267, tablet: 267 },
        height: { mobile: 41, tablet: 89, desktop: 89 },
        marginBottom: "24px",
    },
    ".cursor": {
        fontSize: { mobile: "24px", tablet: "40px", desktop: "40px" },
        display: "inline-block",
        width: { mobile: "3px", tablet: "3px", desktop: "6px" },
        height: { mobile: "24px", tablet: "24px", desktop: "36px" },
        backgroundColor: "#1b5bf7",
        ml: "2px",
    },
};

const bannerContainerStyles = {
    "#banner": {
        maxWidth: 547,
        width: {
            mobile: "100%",
            desktop: "100%",
            tablet: "100%",
        },
    },
    width: { mobile: "auto", desktop: "50%", tablet: "50%" },
};
