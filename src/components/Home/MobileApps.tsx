import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import { ReactComponent as IOS } from "../../assets/images/icons/ios.svg";
import { ReactComponent as Android } from "../../assets/images/icons/android.svg";
import { ReactComponent as Crossplatform } from "../../assets/images/icons/cross-platform.svg";
import { ReactComponent as Swift } from "../../assets/images/icons/swift.svg";
import { ReactComponent as Kotlin } from "../../assets/images/icons/kotlin.svg";
import { ReactComponent as Flutter } from "../../assets/images/icons/flutter.svg";
import MobileBanner from "../../assets/images/mobile-banner.png";
import MobileImage from "../../assets/images/mobile-image.png";

const mobileArr = [
  { name: "iOS", icon: <IOS /> },
  { name: "Android", icon: <Android /> },
  { name: "Crossplatform", icon: <Crossplatform /> },
];
const mobileProgramsArr = [
  { name: "Swift", icon: <Swift /> },
  { name: "Kotlin", icon: <Kotlin /> },
  { name: "Flutter", icon: <Flutter /> },
];

const MobileCard = ({ el }: { el: { name: string; icon: any } }) => {
  return (
    <Box sx={mobileCardStyles}>
      {el?.icon}
      <Typography variant="h3" mt={"12px"}>
        {el?.name}
      </Typography>
    </Box>
  );
};
const MobileProgramCard = ({ el }: { el: { name: string; icon: any } }) => {
  return (
    <Box>
      {el?.icon}
      <Typography variant="h3" mt={"12px"}>
        {el?.name}
      </Typography>
    </Box>
  );
};

const MobileApps = () => {
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
            Development of mobile applications
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ maxWidth: 500 }}>
              <Typography variant="h2" mb={"26px"} className="staggered hidden">
                In collaboration with startups, we have learned how to create a
                creative and functional user interface for mobile applications.
              </Typography>
              <Box
                sx={{ display: "flex", columnGap: "15px", my: "40px" }}
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

export default MobileApps;

const mobileCardStyles = {
  p: "10px 20px 10px 10px",
  bgcolor: "primary.light",
  borderRadius: "8px",
  minWidth: "150px",
};
