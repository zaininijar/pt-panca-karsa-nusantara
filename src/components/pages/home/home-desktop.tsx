import {
  ArrowDown,
  ForwardArrow,
  Slider,
  WorkCard,
} from "@/components/general";
import {
  VStack,
  Container,
  Heading,
  Text,
  Center,
  Box,
  HStack,
  Button,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import { Settings } from "react-slick";
import { worksData } from "./data";

type HomeDesktopProps = {
  sliderSettings: Settings;
};

const HomeDesktop = (props: HomeDesktopProps) => {
  const { sliderSettings } = props;

  const newSliderProps = {
    settings: sliderSettings,
    isMobile: false,
  };

  return (
    <VStack
      width={`100%`}
      minHeight={`80vh`}
      mt={`220px`}
      gap={`120px`}
      mb={`120px`}
    >
      <Container maxW="container.xl" px={"80px"}>
        <Box>
          <Heading size={`xxl`} textAlign={`center`}>
            <Text color={`primary.500`} width={`auto`} display={`inline`}>
              BUSINESS
            </Text>
            {" & "}
            <Text color={`primary.500`} display={`inline`}>
              STRATEGYC
            </Text>{" "}
            PHYLOSOPHY
          </Heading>
          <Center mt={`32px`} mb={`56px`}>
            <ArrowDown width={`60px`} height={`60px`} className="loop-down" />
          </Center>
          <Slider {...newSliderProps} />
        </Box>
        <Box my={`120px`}>
          <HStack justifyContent={`space-between`} alignItems={`center`}>
            <Heading size={`lg`} color={`secondary.500`}>
              Our Works
            </Heading>
            <Button variant={`secondary`} size={`sm`} gap={`10px`}>
              <Text>See All Works</Text>
              <ForwardArrow w={`24px`} h={`24px`} />
            </Button>
          </HStack>
          <Grid
            mt={`40px`}
            templateColumns={`repeat(3, 1fr)`}
            gap={`24px`}
            width={`100%`}
          >
            {worksData.map((data, key) => (
              <WorkCard key={key} data={data} isMobile={false} />
            ))}
          </Grid>
        </Box>
      </Container>
    </VStack>
  );
};

const proffession = [
  {
    id: 1,
    name: "software_engineer",
    title: "SOFTWARE ENGINEER",
  },
  {
    id: 2,
    name: "frontend",
    title: "FRONT END",
  },
  {
    id: 3,
    name: "backend",
    title: "BACK END",
  },
  {
    id: 4,
    name: "app_developer",
    title: "APP DEVELOPER",
  },
];

export default HomeDesktop;
