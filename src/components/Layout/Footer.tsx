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
      <Container sx={{ pt: "48px" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Logo width={106} height={35} />
        </Box>
        <Box sx={contentWrapperStyles}>
          {footerData?.map((el) => (
            <Box>
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
  borderBottom: `1px solid ${theme.palette.secondary.main}`,
};

const bottomContainerStyles = {
  py: "25px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const socialItemContainerStyles = {
  p: 1,
  borderRadius: 5,
  bgcolor: "secondary.main",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
