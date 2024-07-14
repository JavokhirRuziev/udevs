import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import ErpBanner from "../../assets/images/mobile-banner.png";
import Erp from "../../assets/images/erp-image.png";
import { ReactComponent as Architecture } from "../../assets/images/icons/architecture.svg";
import { ReactComponent as AutoTesting } from "../../assets/images/icons/testing.svg";
import { ReactComponent as Stress } from "../../assets/images/icons/stress.svg";
import { ReactComponent as Load } from "../../assets/images/icons/load.svg";
import { ReactComponent as Devops } from "../../assets/images/icons/devops.svg";
import { ReactComponent as Cloud } from "../../assets/images/icons/cloud.svg";
import { ReactComponent as CICD } from "../../assets/images/icons/ci:cd.svg";

const erpArr = [
    { name: "Architecture", icon: <Architecture /> },
    { name: "Auto testing", icon: <AutoTesting /> },
    { name: "Stress testing", icon: <Stress /> },
    { name: "Load testing", icon: <Load /> },
    { name: "Devops", icon: <Devops /> },
    { name: "Cloud", icon: <Cloud /> },
    { name: "CI / CD", icon: <CICD /> },
];

const ErpCard = ({ el }: { el: { name: string; icon: any } }) => {
    return (
        <Box sx={mobileCardStyles}>
            {el?.icon}
            <Typography variant="h3" mt={"12px"} fontSize={"18px !important"}>
                {el?.name}
            </Typography>
        </Box>
    );
};

const Optimization = () => {
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
        <Box sx={{ bgcolor: "primary.light" }}>
            <Container>
                <Box sx={{ p: "80px 0px" }}>
                    <Typography
                        variant="h1"
                        color="primary.main"
                        sx={textStyles}
                        className="staggered hidden"
                    >
                        Optimization Infrastructure
                    </Typography>
                    <Box sx={contentWrapperStyles}>
                        <Box
                            sx={bannersContainerStyles}
                            className="larger hidden"
                        >
                            <img
                                src={ErpBanner}
                                alt="mobile-banner"
                                id="mobile-banner"
                            />
                            <img src={Erp} alt="erp" id="erp" />
                        </Box>
                        <Box sx={rightSideContainerStyles}>
                            <Typography
                                variant="h2"
                                mb={"26px"}
                                className="staggered hidden"
                            >
                                Our experienced professionals will help you
                                optimize your infrastructure
                            </Typography>
                            <Box
                                sx={erpContainerStyles}
                                className="staggered hidden"
                            >
                                {erpArr?.map((el, ind) => (
                                    <ErpCard key={ind} {...{ el }} />
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Optimization;

const mobileCardStyles = {
    p: "10px 20px 10px 10px",
    bgcolor: "secondary.main",
    borderRadius: "8px",
    width: "120px",
    height: 98,
};

const erpContainerStyles = {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    my: "40px",
};

const contentWrapperStyles = {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    flexDirection: {
        mobile: "column",
        tablet: "unset",
        desktop: "unset",
    },
    alignItems: { mobile: "center", tablet: "unset", desktop: "unset" },
};

const bannersContainerStyles = {
    maxWidth: 500,
    position: "relative",
    width: { mobile: "100%", tablet: "50%", desktop: "50%" },
    "#mobile-banner": {
        borderRadius: "24px",
        objectFit: "cover",
        width: "100%",
        height: "100%",
    },
    "#erp": {
        position: "absolute",
        left: 0,
        top: "50%",
        transform: "translateY(-50%)",
        width: "100%",
    },
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

const rightSideContainerStyles = {
    maxWidth: 500,
    width: {
        mobile: "100%",
        tablet: "50%",
        desktop: "50%",
    },
};
