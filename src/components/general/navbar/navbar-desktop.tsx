import {
  Box,
  Flex,
  Text,
  Stack,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { NAV_ITEMS, NavItem } from "./data";
import { useRouter } from "next/router";
import Link from "next/link";

type NavbarDesktopProps = {
  textColor?: string;
};

export default function NavbarDesktop(props: NavbarDesktopProps) {
  const { textColor } = props;

  const linkColor = useColorModeValue(textColor, "neutral.200");
  const popoverContentBgColor = useColorModeValue("white", "neutral.800");

  let route = useRouter().asPath;
  if (route == "/") {
    route = "/home";
  }

  return (
    <Stack direction={"row"} spacing={`32px`}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link href={navItem.href ?? "#"}>
                <Button
                  size={`sm`}
                  background={`transparent`}
                  p={2}
                  color={
                    route.includes(navItem?.triggerActive ?? "#")
                      ? "primary.500"
                      : linkColor
                  }
                  _hover={{
                    textDecoration: "none",
                    color: route.includes(navItem?.triggerActive ?? "#")
                      ? "primary.400"
                      : "primary.500",
                  }}
                >
                  {navItem.label}
                  {navItem.children && (
                    <ChevronRightIcon
                      marginLeft={`5px`}
                      transform={`rotate(90deg)`}
                    />
                  )}
                </Button>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link href={href ? href : "#"}>
      <Box
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("neutral.50", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "neutral.400" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"neutral.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Box>
    </Link>
  );
};
