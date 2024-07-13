import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import { ReactComponent as Frontend } from "../../assets/images/icons/frontend.svg";
import { ReactComponent as Backend } from "../../assets/images/icons/backend.svg";
import { ReactComponent as Architecture } from "../../assets/images/icons/architecture.svg";
import { ReactComponent as DevOps } from "../../assets/images/icons/devops.svg";
import { ReactComponent as UXUI } from "../../assets/images/icons/ux-ui.svg";
import { ReactComponent as QA } from "../../assets/images/icons/qa.svg";
import MobileBanner from "../../assets/images/consulting-banner.svg";

const mobileArr = [
  { name: "Frontend", icon: <Frontend /> },
  { name: "Backend", icon: <Backend /> },
  { name: "Architecture", icon: <Architecture /> },
  { name: "DevOps", icon: <DevOps /> },
  { name: "UX / UI", icon: <UXUI /> },
  { name: "QA", icon: <QA /> },
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

const Consulting = () => {
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
            IT consulting
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ maxWidth: 500 }}>
              <Typography variant="h2" mb={"26px"} className="staggered hidden">
                We can improve the qualifications of your employees thereby
                increasing the efficiency of your company
              </Typography>
              <Box sx={mobileContainerStyles} className="staggered hidden">
                {mobileArr?.map((el, ind) => (
                  <MobileCard {...{ el }} key={ind} />
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
                height="313px"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Consulting;

const mobileCardStyles = {
  p: "10px 20px 10px 10px",
  bgcolor: "primary.light",
  borderRadius: "8px",
  minWidth: "120px",
};

const mobileContainerStyles = {
  display: "flex",
  gap: "15px",
  my: "40px",
  flexWrap: "wrap",
};
