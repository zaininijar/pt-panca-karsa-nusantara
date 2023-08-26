import React from "react";
import FooterDesktop from "./footer-desktop";
import FooterMobile from "./footer-mobile";

type FooterProps = {
  isMobile: boolean;
};

const Footer = (props: FooterProps) => {
  const { isMobile } = props;
  return isMobile ? <FooterMobile /> : <FooterDesktop />;
};

export default Footer;
