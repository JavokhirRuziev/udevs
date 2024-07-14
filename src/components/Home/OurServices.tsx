import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { servicesArr } from "../../assets/data/servicesData";

const ServiceCard = ({ el }: { el: { name: string; icon: any } }) => {
    return (
        <Box sx={cardWrapperStyles}>
            <img src={el?.icon} alt="icon" width={35} height={35} />
            <Typography variant="h3" mt={"24px"}>
                {el?.name}
            </Typography>
        </Box>
    );
};

const OurServices = () => {
    return (
        <Container>
            <Box sx={{ p: "100px 0px" }}>
                <Typography variant="h1" color="primary.main" sx={textStyles}>
                    Our services
                </Typography>
                <Box sx={cardsWrapperStyles} className="SlideFromBottomToTop">
                    {servicesArr?.map((el) => (
                        <ServiceCard {...{ el }} />
                    ))}
                </Box>
            </Box>
        </Container>
    );
};

export default OurServices;

const cardWrapperStyles = {
    borderRadius: 1,
    bgcolor: "primary.light",
    height: { mobile: 130, tablet: 145, desktop: 145 },
    p: { mobile: "14px", tablet: "32px", desktop: "32px" },
    width: { mobile: "40%", tablet: "25.8%", desktop: "25.8%" },
};

const cardsWrapperStyles = {
    display: "flex",
    flexWrap: "wrap",
    gap: { mobile: "12px", tablet: "30px", desktop: "30px" },
    justifyContent: { desktop: "unset", tablet: "center", mobile: "center" },
};

const textStyles = {
    fontSize: {
        mobile: "32px !important",
        desktop: "64px !important",
        tablet: "64px !important",
    },
    textAlign: {
        mobile: "center",
        tablet: "unset",
        desktop: "unset",
    },
    mb: "43px",
};
