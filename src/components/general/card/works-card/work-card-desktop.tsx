import { worksType } from "@/components/pages/home/data";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type WorkCardDesktopProps = {
  data: worksType;
};

const WorkCardDesktop = (props: WorkCardDesktopProps) => {
  const { data } = props;

  return (
    <Card maxW="md" borderRadius={`16px`} overflow={`hidden`}>
      <CardHeader
        width={`100%`}
        height={`260px`}
        position={`relative`}
        overflow={`hidden`}
      >
        <Image
          style={{ objectFit: "cover", objectPosition: "center" }}
          fill
          src={data.image_url}
          alt={data.title}
        />
      </CardHeader>
      <CardBody px={`16px`} pt={`24px`} pb={`10px`}>
        <Text variant={`subhead1`} color={`secondary.500`}>
          {data.title}
        </Text>
      </CardBody>
      <CardFooter px={`16px`} pt={`10px`} pb={`24px`}>
        <HStack justifyContent={`space-between`} gap={`8px`} width={`100%`}>
          <Text
            color={`secondary.500`}
            variant={`label1`}
            whiteSpace={`nowrap`}
          >
            CLIENT :
          </Text>
          <Text
            p={`8px`}
            color={`primary.500`}
            variant={`label1`}
            borderRadius={`6px`}
            backgroundColor={`primary.50`}
            textOverflow={"ellipsis"}
            overflow={`hidden`}
            whiteSpace={`nowrap`}
          >
            {data.client}
          </Text>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default WorkCardDesktop;
