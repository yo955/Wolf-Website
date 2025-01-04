"use client";

import React, { useState } from "react";
import {
  Link,
  Button,
  IconButton,
  DrawerMenu,
  ImgAtom,
}  from '@/components';
import { CiMenuFries } from "react-icons/ci";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Navbar: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isDesktop = useMediaQuery("(min-width:600px)");
  const [state, setState] = useState({
    bottom: false,
  });

  const toggleDrawer = (open: boolean) => () => {
    setState({ bottom: open });
  };

  const handleClick = () => {
    window.location.href = "tel:+01550227582";
  };

  const handleSmoothScroll = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="NAVBAR">
      <div className="navbar-content">
        <Link href="/">
        <ImgAtom
            src={"/images/Nav/logo.png"}
            alt={"Logo"}
            className={"logo-wo"}
            height={70}
            width={70}
          />
        </Link>
        {isDesktop && (
          <>
            <span
              className="link-nav"
              onClick={() => handleSmoothScroll("#services")}
            >
              Services
            </span>
            <span
              className="link-nav"
              onClick={() => handleSmoothScroll("#work")}
            >
              Work
            </span>
            <span
              className="link-nav"
              onClick={() => handleSmoothScroll("#pricing")}
            >
              Pricing
            </span>
            <span
              className="link-nav "
              
              onClick={() => handleSmoothScroll("#faqs")}
            >
              FAQs
            </span>
          </>
        )}
        <Button onClick={handleClick} className="custom-button" id="ptn">
          We are here
        </Button>
        <IconButton
          sx={{
            display: { xs: "block", lg: "none" },
          }}
          onClick={toggleDrawer(true)}
        >
          <CiMenuFries className="w-[27px] h-[23px] text-[#121212] font-[700]" />
        </IconButton>
      </div>
      {isMobile && (
        <DrawerMenu open={state.bottom} onClose={toggleDrawer(false)} />
      )}
    </div>
  );
};
