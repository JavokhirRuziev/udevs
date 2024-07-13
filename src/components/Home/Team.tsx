import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState, useRef } from "react";
import Container from "@mui/material/Container";
import { ReactComponent as TeamBanner } from "../../assets/images/team-banner.svg";

const Team = () => {
  const [count, setCount] = useState(0);
  const [showPlus, setShowPlus] = useState(false);
  const [hasCountStarted, setHasCountStarted] = useState(false);

  useEffect(() => {
    if (hasCountStarted) {
      const target = 100;
      const duration = 3000;
      const stepTime = Math.abs(Math.floor(duration / target));
      let start = 0;
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === target) {
          clearInterval(timer);
          setShowPlus(true);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [hasCountStarted]);

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
          if (entry.target.classList.contains("count-up")) {
            setHasCountStarted(true);
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
    <Box sx={{ bgcolor: "primary.light", p: "80px 0px" }}>
      <Container>
        <Typography
          variant="h1"
          color="primary.main"
          mb={"43px"}
          fontSize={"64px !important"}
          className="staggered hidden"
        >
          Team
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box maxWidth={500}>
            <Typography
              variant="h4"
              lineHeight={"40px"}
              mb={"26px"}
              className="staggered hidden"
            >
              For each project, we form a team that includes a project manager,
              business analyst, UI / UX designer, DevOps, QA engineer, backend
              and front-end developers.
            </Typography>
            <Typography
              className="staggered hidden count-up"
              variant="h1"
              fontSize={"120px !important"}
              color={"primary.main"}
            >
              {count}
              {showPlus && <span className="plus-sign">+</span>}
            </Typography>
            <Typography className="staggered hidden" variant="h1">
              Dedicated team
            </Typography>
          </Box>
          <Box className="larger hidden">
            <TeamBanner />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Team;
