import React from "react";
import SliderMobile from "./slider-mobile";
import { Settings } from "react-slick";
import SliderDesktop from "./slider-desktop";

type SliderProps = {
  isMobile: boolean;
  settings: Settings;
};

const Slider = (props: SliderProps) => {
  const { isMobile, settings } = props;
  const newProps = {
    settings,
  };
  return isMobile ? <SliderMobile /> : <SliderDesktop {...newProps} />;
};

export default Slider;
