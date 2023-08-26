import { worksType } from "@/components/pages/home/data";
import React from "react";

type WorkCardMobileProps = {
  data: worksType;
};

const WorkCardMobile = (props: WorkCardMobileProps) => {
  const { data } = props;

  return <div>WorkCardMobile</div>;
};

export default WorkCardMobile;
