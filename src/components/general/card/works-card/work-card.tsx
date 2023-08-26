import React from "react";
import WorkCardMobile from "./work-card-mobile";
import WorkCardDesktop from "./work-card-desktop";
import { worksType } from "@/components/pages/home/data";

type WorkCardProps = {
  isMobile: boolean;
  data: worksType;
};

const WorkCard = (props: WorkCardProps) => {
  const { isMobile, data } = props;
  return isMobile ? (
    <WorkCardMobile data={data} />
  ) : (
    <WorkCardDesktop data={data} />
  );
};

export default WorkCard;
