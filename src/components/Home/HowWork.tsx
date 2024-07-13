import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import { ReactComponent as Contact } from "../../assets/images/icons/contact.svg";
import { ReactComponent as Analysis } from "../../assets/images/icons/analysis.svg";
import { ReactComponent as Team } from "../../assets/images/icons/team-work.svg";
import { ReactComponent as Offer } from "../../assets/images/icons/offer.svg";
import { ReactComponent as Start } from "../../assets/images/icons/start.svg";

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
          mb={"43px"}
          fontSize={"64px !important"}
          width={"800px"}
          className="staggered hidden"
        >
          How we work!
        </Typography>
        <Box sx={wrapperStyles} className="staggered hidden">
          <Box className="how-works" />
          {proccessArr?.map((el) => (
            <Box sx={cardWrapperStyles}>
              {el?.icon}
              <Typography variant="h4" textAlign={"center"}>
                {el?.name}
              </Typography>
              <Typography
                variant="body1"
                color={"grey.600"}
                textAlign={"center"}
                fontSize={"16px !important"}
              >
                {el?.desc}
              </Typography>
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
  height: 216,
  position: "relative",
  display: "flex",
};

const cardWrapperStyles = {
  display: "flex",
  flexDirection: "column",
  maxWidth: 236,
  alignItems: "center",
  rowGap: 1,
  px: "20px",
};
