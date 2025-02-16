import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";

const whiteLogos = [
  "../elements/header/assets/Vector-1.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg",
];

const darkLogos = [
  "image 1.svg",
  "image 3.svg",
  "image 4.svg",
  "image 5.svg",
  "image 6.svg",
  "image 2.svg",
];

// Escolha o conjunto de logos para exibir
const logos = darkLogos;

const logoStyle = {
  width: "100px",
  height: "80px",
  margin: "16px",
  borderRadius: "8px",
  transition: "transform 0.3s, opacity 0.3s",
  opacity: 0.9,
};

const isMobile = window.matchMedia("(max-width: 960px)").matches;
export default function Clients() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        py: { xs: 4, sm: 6 }, // Padding vertical
      }}
    >
      <Box id="logoCollection" sx={{ width: "100%" }}>
        <Typography
          component="p"
          variant="subtitle2"
          align="center"
          color="text.secondary"
          sx={{ mb: isMobile ? "0px" : "10px", mt: isMobile ? "30px" : "0px" }}
        >
          Confira alguns de nossos clientes:
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Centraliza as logos
            alignItems: "center",
            gap: 4, // Espaçamento entre logos
            flexWrap: "wrap", // Permite que as logos fiquem organizadas em várias linhas
            py: 2,
          }}
        >
          {logos.map((logo, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: "0 1 auto",
              }}
            >
              <img
                src={logo}
                alt={`Logo do cliente ${index + 1}`}
                style={logoStyle}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1.0)")}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
