"use client";

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../icons/default-icons";
import Image from "next/image";
import { Logo } from "..";

const LogoFooter = (props: any) => {
  return (
    <Stack
      width={`150px`}
      height={`70px`}
      justifyContent={`center`}
      alignItems={`center`}
    >
      <Image
        src={Logo}
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        alt="Logo Kormi Kaltra"
      />
    </Stack>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function FooterMobile() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <LogoFooter color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <TwitterIcon />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <YoutubeIcon />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <InstagramIcon />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Link Cepat</ListHeader>
            <Box as="a" href={"#"}>
              Sejarah Kormi Kaltra
            </Box>
            <Box as="a" href={"#"}>
              Struktur Organisasi
            </Box>
            <Box as="a" href={"#"}>
              Event
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Registrasi</ListHeader>
            <Box as="a" href={"#"}>
              Akun
            </Box>
            <Box as="a" href={"#"}>
              Inorga
            </Box>
            <Box as="a" href={"#"}>
              Pegiat
            </Box>
            <Box as="a" href={"#"}></Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Unduhan</ListHeader>
            <Box as="a" href={"#"}>
              Foto
            </Box>
            <Box as="a" href={"#"}>
              Video
            </Box>
            <Box as="a" href={"#"}>
              Dokumen
            </Box>
            <Box as="a" href={"#"}></Box>
          </Stack>
        </SimpleGrid>
        <HStack py={`10px`} justifyContent={`center`}>
          <Text fontSize={"sm"} textAlign={`center`}>
            © 2023 Chakra Templates. All rights reserved
          </Text>
        </HStack>
      </Container>
    </Box>
  );
}
