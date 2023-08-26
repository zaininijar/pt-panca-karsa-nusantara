import React, { useState, useEffect } from "react";
import NavbarMobile from "./navbar-mobile";
import NavbarDesktop from "./navbar-desktop";
import {
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  IconButton,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { CSIcon } from "../icons/default-icons";
import { Logo } from "..";

type NavbarProps = {
  isMobile: boolean;
};

const Navbar = (props: NavbarProps) => {
  const { isMobile } = props;

  const { isOpen, onToggle } = useDisclosure();

  const [scrollTopValue, setScrollTopValue] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY || 0;
    setScrollTopValue(scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      bg={scrollTopValue > 0 ? "white" : "white"}
      color={useColorModeValue("gray.600", "white")}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={scrollTopValue > 0 ? "gray.200" : "transparent"}
      position={"fixed"}
      zIndex={99}
      insetX={0}
      top={`0`}
      transition={"all 0.3s ease"}
      py={scrollTopValue > 0 ? "0px" : "24px"}
      backdropBlur={"3xl"}
    >
      <Container maxW={`container.xl`} px={isMobile ? `20px` : "80px"}>
        <Flex
          width={`100%`}
          minH={"60px"}
          align={"center"}
          justifyContent={`space-between`}
        >
          <Flex ml={{ base: -2 }} display={{ base: "flex", lg: "none" }}>
            <IconButton
              color={scrollTopValue > 0 ? "gray.500" : "white"}
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              _hover={{
                bg: "transparent",
              }}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", lg: "space-between" }}
          >
            <Stack
              width={`64px`}
              height={`50px`}
              justifyContent={`center`}
              alignItems={`center`}
              position={`relative`}
            >
              <Image
                src={scrollTopValue ? Logo : Logo}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                alt="Logo Kormi Kaltra"
              />
            </Stack>

            <Flex
              display={{ base: "none", lg: "flex" }}
              ml={10}
              alignItems={`center`}
            >
              <NavbarDesktop
                textColor={scrollTopValue ? "gray.800" : "neutral.800"}
              />
            </Flex>
          </Flex>
          <Box width="1px" height="24px" bg={`#E5E5DE`} mx={`33px`}></Box>
          <Stack w={`auto`} direction={"row"} justifyContent={`end`}>
            {isMobile ? (
              <Button variant={`secondary`} size={"sm"}>
                <CSIcon width={5} height={5} />
              </Button>
            ) : (
              <Button variant={`secondary`} size={"sm"}>
                Contact Us
              </Button>
            )}
          </Stack>
        </Flex>
      </Container>

      <Collapse in={isOpen} animateOpacity>
        <NavbarMobile />
      </Collapse>
    </Box>
  );
};

export default Navbar;
