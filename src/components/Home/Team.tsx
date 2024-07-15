import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { ReactComponent as TeamBanner } from "../../assets/images/team-banner.svg";

const Team = () => {
    const [count, setCount] = useState(0);
    const [showPlus, setShowPlus] = useState(false);
    const [hasCountStarted, setHasCountStarted] = useState(false);

    useEffect(() => {
        if (hasCountStarted) {
            const target = 100;
            const duration = 3000;
            const stepTime = Math.abs(Math.floor(duration / target));
            let start = 0;
            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === target) {
                    clearInterval(timer);
                    setShowPlus(true);
                }
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [hasCountStarted]);

    useEffect(() => {
        const elements = document.querySelectorAll(
            ".staggered, .hidden, .larger"
        );
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains("staggered")) {
                        entry.target.classList.remove("hidden");
                        entry.target.classList.add("SlideFromBottomToTop");
                    } else if (entry.target.classList.contains("larger")) {
                        entry.target.classList.remove("hidden");
                        entry.target.classList.add("ToLarger");
                    }
                    if (entry.target.classList.contains("count-up")) {
                        setHasCountStarted(true);
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
        <Box sx={{ bgcolor: "primary.light", p: "80px 0px" }}>
            <Container>
                <Typography
                    variant="h1"
                    color="primary.main"
                    sx={textStyles}
                    className="staggered hidden"
                >
                    Team
                </Typography>
                <Box sx={contentWrapperStyles}>
                    <Box sx={rightSideContainerStyles}>
                        <Typography
                            variant="h4"
                            lineHeight={"40px"}
                            mb={"26px"}
                            className="staggered hidden"
                        >
                            For each project, we form a team that includes a
                            project manager, business analyst, UI / UX designer,
                            DevOps, QA engineer, backend and front-end
                            developers.
                        </Typography>
                        <Typography
                            className="staggered hidden count-up"
                            variant="h1"
                            sx={textStylesH1}
                        >
                            {count}
                            {showPlus && <span className="plus-sign">+</span>}
                        </Typography>
                        <Typography className="staggered hidden" variant="h1">
                            Dedicated team
                        </Typography>
                    </Box>
                    <Box className="larger hidden" sx={bannerContainerStyles}>
                        <TeamBanner id="banner" />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Team;

const contentWrapperStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: {
        mobile: "column-reverse",
        tablet: "unset",
        desktop: "unset",
    },
};

const bannerContainerStyles = {
    "#banner": {
        maxWidth: 500,
        width: "100%",
    },
    width: { mobile: "100%", tablet: "50%", desktop: "50%" },
};

const textStyles = {
    fontSize: {
        mobile: "32px !important",
        desktop: "64px !important",
        tablet: "64px !important",
    },
    mb: "43px",
};

const textStylesH1 = {
    color: "primary.main",
    fontSize: {
        mobile: "80px !important",
        desktop: "120px !important",
        tablet: "120px !important",
    },
};

const rightSideContainerStyles = {
    width: {
        mobile: "100%",
        tablet: "50%",
        desktop: "50%",
    },
    maxWidth: 500,
};
