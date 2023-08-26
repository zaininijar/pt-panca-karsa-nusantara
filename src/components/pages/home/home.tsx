import React, { useState } from "react";
import HomeDesktop from "./home-desktop";
import HomeMobile from "./home-mobile";
import Navbar from "../../general/navbar/navbar";
import { Footer } from "@/components/general";
import { Box, HStack } from "@chakra-ui/react";

type HomeProps = {
  isMobile: boolean;
};

const Home = (props: HomeProps) => {
  const { isMobile } = props;
  const [current, setCurrent] = useState<Number>(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: (dots: React.ReactNode) => (
      <HStack
        width={`100%`}
        justifyContent={`center`}
        alignItems={`center`}
        position={`absolute`}
        bottom={`30px`}
        gap={`16px`}
      >
        {dots}
      </HStack>
    ),
    afterChange: (current: number) => setCurrent(current),
    customPaging: (i: number) => (
      <div>
        {current == i ? (
          <Box
            width={`10px`}
            height={"10px"}
            backgroundColor={`primary.500`}
            rounded={`full`}
          ></Box>
        ) : (
          <Box
            width={`10px`}
            height={"10px"}
            backgroundColor={`white`}
            rounded={`full`}
          ></Box>
        )}
      </div>
    ),
  };

  return (
    <>
      <Navbar isMobile={isMobile} />
      {isMobile ? (
        <HomeMobile />
      ) : (
        <HomeDesktop sliderSettings={sliderSettings} />
      )}
      <Footer isMobile={isMobile} />
    </>
  );
};

export default Home;
