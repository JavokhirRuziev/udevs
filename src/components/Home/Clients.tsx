import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import Container from "@mui/material/Container";
import ClientsSlider from "../Sliders/ClientsSlider";
import { clients1, clients2 } from "../../assets/data/clientsData";

const Clients = () => {
  return (
    <Box sx={{ p: "80px 0px" }}>
      <Container>
        <Typography
          variant="h1"
          color="primary.main"
          mb={"43px"}
          fontSize={"64px !important"}
          width={"800px"}
        >
          Our Clients
        </Typography>
      </Container>
      <ClientsSlider arr={clients1} reverseDirection={false} />
      <ClientsSlider arr={clients2} reverseDirection />
    </Box>
  );
};

export default Clients;
