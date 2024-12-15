"use client";

import React, { useState } from "react";
import Link from "../atoms/Link";
import Button from "../atoms/Button";
import IconButton from "../atoms/IconButton";
import DrawerMenu from "../molecules/DrawerMenu";
import { CiMenuFries } from "react-icons/ci";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar: React.FC = () => {
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

  return (
    <div className="NAVBAR">
      <div className="navbar-content">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="logo" />
        </Link>
        {isDesktop && (
          <>
            <Link href="#services">Services</Link>
            <Link href="#work">Work</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#faqs">FAQs</Link>
          </>
        )}
        <Button onClick={handleClick} className="custom-button" id="ptn">
          We're here
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

export default Navbar;
