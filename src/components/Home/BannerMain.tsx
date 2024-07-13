import Box from "@mui/material/Box";
import { ReactComponent as MainBanner } from "../../assets/images/main-banner.svg";
import { ReactComponent as LogoLarge } from "../../assets/images/icons/logo-large.svg";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { headerCategories } from "../../assets/data/headerData";

const sentences: string[] =
  headerCategories[2]?.children?.map((el) => el?.name) || [];

const BannerMain = () => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let typingTimeout: any;
    if (isTyping) {
      if (charIndex < sentences[currentSentenceIndex].length) {
        typingTimeout = setTimeout(() => {
          setDisplayedText(
            (prev) => prev + sentences[currentSentenceIndex][charIndex]
          );
          setCharIndex((prev) => prev + 1);
        }, 100);
      } else {
        setTimeout(() => {
          setIsTyping(false);
        }, 1000);
        typingTimeout = setTimeout(() => {
          setIsTyping(true);
          setCharIndex(0);
        }, 2000);
      }
    } else {
      if (charIndex > 0) {
        typingTimeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 100);
      } else {
        setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isTyping, currentSentenceIndex]);

  useEffect(() => {
    const elements = document.querySelectorAll(".staggered");
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.remove("hidden");
        element.classList.add("SlideFromBottomToTop");
      }, index * 500);
    });
  }, []);

  return (
    <Box className="bg-main">
      <Container>
        <Box sx={leftSideTextWrapperStyles}>
          <Box sx={{ maxWidth: 547 }}>
            <LogoLarge
              className="staggered hidden"
              style={{ width: 267, height: 89, marginBottom: "24px" }}
            />
            <Typography
              variant="h1"
              mb={"20px"}
              color={"grey.700"}
              className="staggered hidden"
            >
              IT-Outsourcing Company
            </Typography>
            <Typography
              variant="h1"
              mb={"48px"}
              color={"primary.main"}
              className="staggered hidden"
            >
              {displayedText}
              <Typography
                component={"span"}
                className={`cursor`}
                ml={0.5}
              ></Typography>
            </Typography>
            <Button size="large" fullWidth className="staggered hidden">
              Contact
            </Button>
          </Box>
          <MainBanner width={547} height={414} />
        </Box>
      </Container>
    </Box>
  );
};

export default BannerMain;

const leftSideTextWrapperStyles = {
  display: "flex",
  justifyContent: "space-between",
  p: "110px 15px",
  alignItems: "center",
  width: "100%",
  mt: "72px",
};
