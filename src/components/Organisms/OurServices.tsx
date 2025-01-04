"use client";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Container from "@mui/material/Container";
import { Text } from "@/components";
import Box from "@mui/material/Box";
import arr from "../../data/ouerCard";
import Image from "next/image";
import { useState } from "react";

export function OurServices() {
  return (
    <section id="services">
      <Text
        text={
          <div className="pairenttextclients">
            <span className="textList">Our Services</span>
            <span className="textclients">we can help you with</span>{" "}
            <div className="offer">
              <span className="offerday">
                🎉It is our birthday 40% off - 1-day limited offer <span className="spn">click to Learn
                more🎉</span>
              </span>
            </div>
          </div>
        }
        className="textListen"
      />
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {arr.map((e) => (
          <div key={e.id} style={{ marginBottom: 20 }}>
            <HoverCard item={e} />
          </div>
        ))}
      </Container>
    </section>
  );
}

function HoverCard({ item} : any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        height: "256px",
        border: "none",
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "white",
        cursor: "pointer",
        padding: "16px",
        gap: "16px",
        "&:hover": {
          background: "linear-gradient(45deg,#F0F0F0, #E0E0E0)",
          boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.25)", 
          transition: "box-shadow 0.3s ease, background 0.5s ease",
        },
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Box>
          <Image
            width={100}
            height={100}
            src={isHovered ? item.hoverImag : item.imag}
            alt="uiux"
          />
        </Box>
        <hr style={{ color: "#EAEAEA", margin: "5px" }} />
        <Typography
          sx={{
            fontWeight: "400",
            color: "#121212",
            lineHeight: "24px",
            textAlign: "start",
            paddingBottom: "10px",
          }}
        >
          {item.name}
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "16px",
            color: "#494949",
            lineHeight: "24px",
            textAlign: "start",
          }}
        >
          {item.discription}
        </Typography>
      </CardContent>
    </Card>
  );
}
