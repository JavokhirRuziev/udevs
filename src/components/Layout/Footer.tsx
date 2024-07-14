import Box from "@mui/material/Box";
import React from "react";
import Container from "@mui/material/Container";
import { ReactComponent as Logo } from "../../assets/images/icons/logo.svg";
import { footerData } from "../../assets/data/footerData";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { theme } from "../../theme";
import { socialMediaArr } from "../../assets/data/contactsData";

const Footer = () => {
    const handleScroll = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <Box sx={{ bgcolor: "primary.light" }}>
            <Container>
                <Box sx={logoContainerStyles}>
                    <Logo width={106} height={35} />
                </Box>
                <Box sx={contentWrapperStyles}>
                    {footerData?.map((el) => (
                        <Box sx={footerCategoriesStyles}>
                            <Typography variant="h3" mb={2.5}>
                                {el?.name}
                            </Typography>
                            {el?.children?.map((e) => (
                                <Link
                                    onClick={() => handleScroll(e?.id)}
                                    underline="hover"
                                    sx={{ cursor: "pointer" }}
                                >
                                    <Typography
                                        variant="h4"
                                        lineHeight={"32px"}
                                        fontSize={"18px !important"}
                                    >
                                        {e?.name}
                                    </Typography>
                                </Link>
                            ))}
                        </Box>
                    ))}
                </Box>
                <Box sx={bottomContainerStyles}>
                    <Typography variant="body1" color={"primary.main"}>
                        © 2024 Udevs. All rights reserved
                    </Typography>
                    <Box sx={{ display: "flex", columnGap: 2 }}>
                        {socialMediaArr?.map((el) => (
                            <Box sx={socialItemContainerStyles}>{el?.icon}</Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;

const contentWrapperStyles = {
    display: "flex",
    justifyContent: "space-between",
    py: 5,
    rowGap: "20px",
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    flexDirection: { mobile: "column", tablet: "unset", desktop: "unset" },
    alignItems: { mobile: "center", tablet: "unset", desktop: "unset" },
};

const bottomContainerStyles = {
    py: "25px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: {
        mobile: "column-reverse",
        tablet: "unset",
        desktop: "unset",
    },
    rowGap: "20px",
};

const socialItemContainerStyles = {
    p: 1,
    borderRadius: 5,
    bgcolor: "secondary.main",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const logoContainerStyles = {
    display: "flex",
    justifyContent: "center",
    pt: "48px",
};

const footerCategoriesStyles = {
    maxWidth: {
        mobile: 300,
        tablet: "auto",
        desktop: "auto",
    },
    width: {
        mobile: "100%",
        tablet: "auto",
        desktop: "auto",
    },
};
