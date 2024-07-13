import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import { ReactComponent as UX } from "../../assets/images/icons/ux.svg";
import { ReactComponent as UI } from "../../assets/images/icons/ui.svg";
import { ReactComponent as Prototyping } from "../../assets/images/icons/prototype.svg";
import { ReactComponent as Mobile } from "../../assets/images/icons/mobile.svg";
import { ReactComponent as Web } from "../../assets/images/icons/web.svg";
import { ReactComponent as Atom } from "../../assets/images/icons/atom.svg";
import { ReactComponent as Figma } from "../../assets/images/icons/figma.svg";
import { ReactComponent as Sketch } from "../../assets/images/icons/sketch.svg";
import { ReactComponent as Lottie } from "../../assets/images/icons/lottie.svg";
import { ReactComponent as AI } from "../../assets/images/icons/ai.svg";
import MobileBanner from "../../assets/images/mobile-banner.png";
import MobileImage from "../../assets/images/ui:ux.png";

const mobileArr = [
  { name: "UX", icon: <UX /> },
  { name: "UI", icon: <UI /> },
  { name: "Prototyping", icon: <Prototyping /> },
  { name: "Mobile Design", icon: <Mobile /> },
  { name: "Web Design", icon: <Web /> },
  { name: "Atomic Design", icon: <Atom /> },
];
const mobileProgramsArr = [
  { name: "Figma", icon: <Figma /> },
  { name: "Sketch", icon: <Sketch /> },
  { name: "Lottie", icon: <Lottie /> },
  { name: "Illustrator", icon: <AI /> },
];

const MobileCard = ({ el }: { el: { name: string; icon: any } }) => {
  return (
    <Box sx={mobileCardStyles}>
      {el?.icon}
      <Typography variant="h3" mt={"12px"} fontSize={"18px !important"}>
        {el?.name}
      </Typography>
    </Box>
  );
};
const MobileProgramCard = ({ el }: { el: { name: string; icon: any } }) => {
  return (
    <Box>
      <Box height={56} width={56}>
        {el?.icon}
      </Box>
      <Typography variant="h3" mt={"12px"}>
        {el?.name}
      </Typography>
    </Box>
  );
};

const UIUX = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".staggered, .hidden, .larger");
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
    <Box className="bg-main">
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
            UI / UX design
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ maxWidth: 500 }}>
              <Typography variant="h2" mb={"26px"} className="staggered hidden">
                Our company takes a human-centered approach to design
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                  my: "40px",
                  flexWrap: "wrap",
                }}
                className="staggered hidden"
              >
                {mobileArr?.map((el, ind) => (
                  <MobileCard {...{ el }} key={ind} />
                ))}
              </Box>
              <Typography
                variant="h1"
                mt={"24px"}
                mb={"32px"}
                className="staggered hidden"
              >
                Technologies
              </Typography>
              <Box
                sx={{ display: "flex", columnGap: "48px", mb: "24px" }}
                className="staggered hidden"
              >
                {mobileProgramsArr?.map((el, ind) => (
                  <MobileProgramCard {...{ el }} key={ind} />
                ))}
              </Box>
            </Box>
            <Box
              sx={{ maxWidth: 500, position: "relative" }}
              className="larger hidden"
            >
              <img
                src={MobileBanner}
                alt="mobile-banner"
                width="500px"
                height="563px"
              />
              <img
                src={MobileImage}
                alt="mobile-image"
                width="500px"
                height="472px"
                style={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default UIUX;

const mobileCardStyles = {
  p: "10px 20px 10px 10px",
  bgcolor: "primary.light",
  borderRadius: "8px",
  minWidth: "120px",
};
