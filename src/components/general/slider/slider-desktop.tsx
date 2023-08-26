import { data } from "@/components/pages/home/data";
import { Button, Heading, Stack, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Slider, { Settings } from "react-slick";

type SliderDesktopProps = {
  settings: Settings;
};

const SliderDesktop = (props: SliderDesktopProps) => {
  const { settings } = props;
  return (
    <Slider {...settings}>
      {data.map((dt, key) => (
        <Stack
          key={key}
          width={`100%`}
          height={`528px`}
          borderRadius={`16px`}
          overflow={`hidden`}
          position={`relative`}
        >
          <Image
            fill
            src={dt.image_url}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            alt={`image : ${dt.title}`}
          />
          <VStack
            position={`absolute`}
            zIndex={9}
            top={-2}
            height={`100%`}
            alignItems={`center`}
            justifyContent={`center`}
            backgroundImage="radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8127626050420168) 100%)"
            px={`140px`}
            gap={`32px`}
          >
            <Heading size={"xs"} color={`white`} textAlign={`center`}>
              {dt.title}
            </Heading>
            <Button variant={`primary`} size={"sm"}>
              See more
            </Button>
          </VStack>
        </Stack>
      ))}
    </Slider>
  );
};

export default SliderDesktop;
