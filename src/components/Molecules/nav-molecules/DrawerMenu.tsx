import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Link} from '@/components';

interface DrawerMenuProps {
  open: boolean;
  onClose: () => void;
}

export const DrawerMenu: React.FC<DrawerMenuProps> = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiPaper-root": {
          height: "60%",
          borderRadius: "24px 24px 0px 0px",
          backgroundColor: "#182A48",
          color: "#E0E0E0",
          padding: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "64px",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "#243551",
          width: "100%",
          height: "36px",
          padding: "16px",
          position: "absolute",
          top: "0",
          left: "0",
          borderRadius: "24px 24px 0px 0px ",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "#E0E0E0",
            width: "32px",
            height: "4px",
            borderRadius: "100px",
          }}
        ></div>
      </Box>
      <Link href="#services">
        <Typography
          component="a"
          sx={{ fontSize: "24px", fontWeight: "400", lineHeight: "37px" }}
        >
          Services
        </Typography>
      </Link>
      <Link href="#work">
        <Typography
          component="a"
          sx={{ fontSize: "24px", fontWeight: "400", lineHeight: "37px" }}
        >
          Work
        </Typography>
      </Link>
      <Link href="#pricing">
        <Typography
          component="a"
          sx={{ fontSize: "24px", fontWeight: "400", lineHeight: "37px" }}
        >
          Pricing
        </Typography>
      </Link>
      <Link href="#faqs">
        <Typography
          component="a"
          sx={{ fontSize: "24px", fontWeight: "400", lineHeight: "37px" }}
        >
          FAQs
        </Typography>
      </Link>
    </Drawer>
  );
};

