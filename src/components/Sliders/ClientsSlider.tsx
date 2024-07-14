import React from "react";
import SwiperCore from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Box from "@mui/material/Box";
import useBreakpoints from "../../hooks/breakpoints";
SwiperCore.use([Autoplay, Navigation, Pagination]);

const ClientsSlider = ({
    arr,
    reverseDirection,
}: {
    arr: any[];
    reverseDirection: boolean;
}) => {
    const { mobile, tablet } = useBreakpoints();
    return (
        <Box sx={swiperWrapperStyles}>
            <Swiper
                loop={true}
                freeMode={true}
                slidesPerView={mobile ? 4 : tablet ? 5 : 5}
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
                            id="clients"
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
        columnGap: { desktop: "25px", tablet: "25px", mobile: "10px" },
    },
    my: "20px",
    ".swiper": {
        my: "-20px",
        py: "20px",
    },
    "#clients": {
        maxWidth: { mobile: 213, tablet: 213, desktop: 213 },
        width: "100%",
        height: "100%",
        maxHeight: { mobile: 128, tablet: 128, desktop: 128 },
        aspectRatio: 213 / 128,
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.15)",
        borderRadius: { mobile: "16px", tablet: "24px", desktop: "24px" },
    },
};
