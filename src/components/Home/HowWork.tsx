import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import { ReactComponent as Contact } from "../../assets/images/icons/contact.svg";
import { ReactComponent as Analysis } from "../../assets/images/icons/analysis.svg";
import { ReactComponent as Team } from "../../assets/images/icons/team-work.svg";
import { ReactComponent as Offer } from "../../assets/images/icons/offer.svg";
import { ReactComponent as Start } from "../../assets/images/icons/start.svg";
import useBreakpoints from "../../hooks/breakpoints";

const proccessArr = [
    {
        name: "Сontact",
        desc: "Send us your project request or project idea.",
        icon: <Contact />,
    },
    {
        name: "Analysis",
        desc: "We will contact you to clarify your project requirements.",
        icon: <Analysis />,
    },
    {
        name: "Offer",
        desc: "We will provide you with our free, non-binding application.",
        icon: <Offer />,
    },
    {
        name: "Team",
        desc: "We provide a team for your requirements.",
        icon: <Team />,
    },
    {
        name: "Start",
        desc: "You will get to know the team and we'll get started.",
        icon: <Start />,
    },
];

const HowWork = () => {
    const { mobile } = useBreakpoints();
    useEffect(() => {
        const elements = document.querySelectorAll(".staggered, .hidden");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains("staggered")) {
                        entry.target.classList.remove("hidden");
                        entry.target.classList.add("SlideFromBottomToTop");
                    }
                    observer.unobserve(entry.target);
                }
            });
        });

        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);
    return (
        <Container>
            <Box sx={{ p: "80px 0px" }}>
                <Typography
                    variant="h1"
                    color="primary.main"
                    sx={textStyles}
                    className="staggered hidden"
                >
                    How we work!
                </Typography>
                <Box sx={wrapperStyles} className="staggered hidden">
                    {!mobile && <Box className="how-works" />}
                    {proccessArr?.map((el) => (
                        <Box sx={cardWrapperStyles}>
                            <Box>{el?.icon}</Box>
                            <Box sx={proccessTextStyles}>
                                <Typography variant="h2" textAlign={"center"}>
                                    {el?.name}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={textStylesBody1}
                                >
                                    {el?.desc}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    );
};

export default HowWork;

const wrapperStyles = {
    mt: "80px",
    pt: "30px",
    height: { mobile: "auto", tablet: 216, desktop: 216 },
    position: "relative",
    display: "flex",
    flexDirection: { mobile: "column", tablet: "unset", desktop: "unset" },
    rowGap: 3,
};

const cardWrapperStyles = {
    display: "flex",
    flexDirection: { mobile: "row", tablet: "column", desktop: "column" },
    maxWidth: { mobile: "100%", tablet: 236, desktop: 236 },
    alignItems: "center",
    rowGap: 1,
    columnGap: 3,
    px: "20px",
};

const textStyles = {
    mb: "43px",
    fontSize: {
        mobile: "32px !important",
        desktop: "64px !important",
        tablet: "64px !important",
    },
    width: {
        mobile: "100%",
        tablet: "800px",
        desktop: "800px",
    },
};

const proccessTextStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: {
        mobile: "flex-start",
        tablet: "unset",
        desktop: "unset",
    },
    rowGap: 1,
};

const textStylesBody1 = {
    color: "grey.600",
    fontSize: "16px !important",
    textAlign: {
        mobile: "unset",
        tablet: "center",
        desktop: "center",
    },
};
