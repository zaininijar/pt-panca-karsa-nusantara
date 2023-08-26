import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { ForwardArrow, Logo } from "..";

const LogoFooter = () => {
  return (
    <Stack
      width={`65px`}
      height={`50px`}
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

export default function FooterDesktop() {
  return (
    <>
      <Container
        as={Stack}
        maxW={"container.xl"}
        px={`80px`}
        py={`40px`}
        bg={`secondary.500`}
        color={`white`}
      >
        <HStack justifyContent={`space-between`} gap={`60px`}>
          <VStack alignItems={`start`} flex={1}>
            <Heading size={`md`} letterSpacing={`-0.2px`}>
              Innovate your manufacturing with Us!
            </Heading>
            <Text size={`xl`} pt={`24px`} pb={`40px`}>
              Ready to revolutionize your manufacturing process? We`re your
              trusted partner in creating cutting-edge solutions. Reach out now
              to explore limitless possibilities together!
            </Text>
            <Button variant={`primary`} size={`sm`} gap={`10px`}>
              <Text>See All Works</Text>
              <ForwardArrow w={`24px`} h={`24px`} />
            </Button>
          </VStack>
          <Box
            width={`411px`}
            h={`460px`}
            position={`relative`}
            overflow={`hidden`}
            borderRadius={`16px`}
          >
            <Image
              style={{ objectFit: "cover", objectPosition: "center" }}
              fill
              src={"/images/footer/1.jpg"}
              alt={"footer-image"}
            />
          </Box>
        </HStack>
      </Container>
      <Container
        as={Stack}
        maxW={"container.xl"}
        px={`80px`}
        py={`32px`}
        bg={`secondary.500`}
        color={`white`}
        backgroundColor={`secondary.700`}
      >
        <HStack
          borderBottom={`1px solid white`}
          justifyContent={`space-between`}
          pb={`32px`}
        >
          <LogoFooter />
          <Box textAlign={`end`}>
            <Text variant={`subhead1`} letterSpacing="-0.22px">
              MANUFACTURING / FABRICATION PROCESS
            </Text>
            <UnorderedList display={`flex`} gap={`30px`} mt={`12px`}>
              <ListItem>
                <Text variant={`subhead4`} letterSpacing="-0.14px">
                  Crossover Re-cut & Rethread
                </Text>
              </ListItem>
              <ListItem>
                <Text variant={`subhead4`} letterSpacing="-0.14px">
                  Fabrication of Various Pup Joints
                </Text>
              </ListItem>
              <ListItem>
                <Text variant={`subhead4`} letterSpacing="-0.14px">
                  Resize Riser Spool
                </Text>
              </ListItem>
            </UnorderedList>
          </Box>
        </HStack>
        <HStack pt={`24px`} justifyContent={`space-between`}>
          <Text variant={`label1`} fontWeight={600}>
            2023 PT. PANCA KARSA NUSANTARA. ALL RIGHT RESERVED
          </Text>
          <Text variant={`label1`} fontWeight={600}>
            Kebijakan Privasi | Syarat & Ketentuan
          </Text>
        </HStack>
      </Container>
    </>
  );
}
