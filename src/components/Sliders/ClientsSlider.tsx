import React from "react";
import SwiperCore from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Box from "@mui/material/Box";
SwiperCore.use([Autoplay, Navigation, Pagination]);

const ClientsSlider = ({
  arr,
  reverseDirection,
}: {
  arr: any[];
  reverseDirection: boolean;
}) => {
  return (
    <Box sx={swiperWrapperStyles}>
      <Swiper
        loop={true}
        freeMode={true}
        slidesPerView={5}
        spaceBetween={0}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
          reverseDirection,
        }}
        speed={25000}
      >
        {arr?.map((component, ind) => (
          <SwiperSlide key={ind}>
            <img
              src={component}
              alt="clients"
              width={213}
              height={128}
              className="clients-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ClientsSlider;

const swiperWrapperStyles = {
  ".swiper-wrapper": {
    transitionTimingFunction: "linear",
    columnGap: "25px",
  },
  my: "20px",
  ".swiper": {
    my: "-20px",
    py: "20px",
  },
};
