import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Erp from "../../assets/images/delever_app.png";
import { ReactComponent as Website } from "../../assets/images/icons/website.svg";
import { ReactComponent as Admin } from "../../assets/images/icons/admin.svg";
import { ReactComponent as Crossplatform } from "../../assets/images/icons/cross-platform.svg";
import { ReactComponent as Web } from "../../assets/images/icons/web-design.svg";
import { ReactComponent as Delivery } from "../../assets/images/icons/delivery.svg";
import { ReactComponent as Mobile } from "../../assets/images/icons/mobile.svg";
import DeleverLogo from "../../assets/images/icons/delever-logo.svg";

const erpArr = [
  { name: "Website", icon: <Website /> },
  { name: "Admin panel", icon: <Admin /> },
  { name: "Crossplatform", icon: <Crossplatform /> },
  { name: "Web design", icon: <Web /> },
  { name: "Mobile design", icon: <Mobile /> },
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

const Delever = () => {
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
          <Box sx={wrapperStyles}>
            <Box
              sx={{ maxWidth: 500, position: "relative" }}
              className="larger hidden"
            >
              <img src={Erp} alt="erp" width="547px" height="407px" />
            </Box>
            <Box sx={{ maxWidth: 500 }}>
              <img
                className="staggered hidden"
                src={DeleverLogo}
                alt="delever-logo"
                width={252}
                height={49}
              />
              <Box sx={deliveryIconStyles} className="staggered hidden">
                <Delivery />
                <Typography
                  variant="body1"
                  color={"info.main"}
                  className="staggered hidden"
                >
                  Delivery
                </Typography>
              </Box>
              <Typography
                variant="h4"
                my={"26px"}
                lineHeight={"40px"}
                className="staggered hidden"
              >
                Delever - Delivery service automation targeted at both consumers
                and restaurants.
              </Typography>
              <Typography variant="h2" className="staggered hidden">
                What we did?
              </Typography>
              <Box sx={arrayWrapperStyles} className="staggered hidden">
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

export default Delever;

const mobileCardStyles = {
  p: "10px 20px 10px 10px",
  bgcolor: "primary.light",
  borderRadius: "8px",
  width: "120px",
  height: 98,
};

const deliveryIconStyles = {
  display: "flex",
  columnGap: 1,
  p: "4px 16px",
  borderRadius: "100px",
  bgcolor: "info.light",
  alignItems: "center",
  mt: "30px",
  width: "fit-content",
};

const wrapperStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const arrayWrapperStyles = {
  display: "flex",
  flexWrap: "wrap",
  gap: "15px",
  my: "40px",
};
