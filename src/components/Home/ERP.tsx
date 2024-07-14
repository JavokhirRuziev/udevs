import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import ErpBanner from "../../assets/images/mobile-banner.png";
import Erp from "../../assets/images/erp-image.png";
import { ReactComponent as CRM } from "../../assets/images/icons/crm.svg";
import { ReactComponent as ELearning } from "../../assets/images/icons/e-learning.svg";
import { ReactComponent as ECommerce } from "../../assets/images/icons/e-commerce.svg";
import { ReactComponent as POS } from "../../assets/images/icons/pos.svg";
import { ReactComponent as SmsEmail } from "../../assets/images/icons/sms-email.svg";
import { ReactComponent as Warehouse } from "../../assets/images/icons/werehouse.svg";

const erpArr = [
    { name: "CRM", icon: <CRM /> },
    { name: "eLearning", icon: <ELearning /> },
    { name: "E-Commerce", icon: <ECommerce /> },
    { name: "POS", icon: <POS /> },
    { name: "Sms / Email", icon: <SmsEmail /> },
    { name: "Warehouse", icon: <Warehouse /> },
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

const ERP = () => {
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
                        ERP systems
                    </Typography>
                    <Box sx={bannerContainerStyles}>
                        <Box sx={bannersStyles} className="larger hidden">
                            <img
                                src={ErpBanner}
                                alt="mobile-banner"
                                id="mobile-banner"
                            />
                            <img src={Erp} alt="erp" id="erp" />
                        </Box>
                        <Box
                            sx={{
                                maxWidth: 500,
                                width: {
                                    mobile: "100%",
                                    tablet: "50%",
                                    desktop: "50%",
                                },
                            }}
                        >
                            <Typography
                                variant="h2"
                                mb={"26px"}
                                className="staggered hidden"
                            >
                                IT Systems of any level of complexity at a
                                convenient time for you
                            </Typography>
                            <Box
                                sx={itemsContainerStyles}
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

export default ERP;

const mobileCardStyles = {
    p: "10px 20px 10px 10px",
    bgcolor: "secondary.main",
    borderRadius: "8px",
    width: "120px",
    height: 98,
};

const bannersStyles = {
    maxWidth: 500,
    position: "relative",
    "#mobile-banner": {
        width: "100%",
        height: "100%",
        borderRadius: "24px",
        objectFit: "cover",
    },
    "#erp": {
        position: "absolute",
        left: 0,
        top: "50%",
        transform: "translateY(-50%)",
        width: "100%",
    },
};

const itemsContainerStyles = {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    my: "40px",
    justifyContent: { mobile: "center", tablet: "unset", desktop: "unset" },
};

const bannerContainerStyles = {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    flexDirection: { mobile: "column", tablet: "unset", desktop: "unset" },
    alignItems: { mobile: "center", tablet: "unset", desktop: "unset" },
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
