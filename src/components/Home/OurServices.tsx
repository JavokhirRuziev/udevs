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
        <Typography
          variant="h1"
          color="primary.main"
          mb={"43px"}
          fontSize={"64px !important"}
        >
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
  height: 145,
  p: "32px",
  width: "25.8%",
};

const cardsWrapperStyles = {
  display: "flex",
  flexWrap: "wrap",
  columnGap: "30px",
  rowGap: "24px",
};
