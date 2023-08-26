import React from "react";
import Home from "@/components/pages/home/home";

const HomePage = (props: { isMobile: boolean }) => {
  const { isMobile } = props;

  return <Home isMobile={isMobile} />;
};

export default HomePage;
