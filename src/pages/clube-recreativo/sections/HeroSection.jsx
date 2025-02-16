import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";

export default function HeroSection() {
  const isMobile = useMediaQuery("(max-width: 960px)");

  const handleSmoothScroll = (event, href) => {
    event.preventDefault();
    const target = document.getElementById(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // Ajusta a posição com base na altura da navbar
        behavior: "smooth",
      });
      setOpen(false); // Fecha o menu se for mobile
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: "calc(100vh - 60px)", // Define a altura dinâmica
      }}
    >
      {/* Coluna Esquerda - Texto */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#E2E8F0", // Cor diferente para a coluna da esquerda
          padding: { xs: 4, md: 6 },
          textAlign: isMobile ? "left" : "left", // Alinha texto à esquerda no mobile
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Centraliza o conteúdo verticalmente
        }}
      >
        <Box sx={{ ml: isMobile ? "0px" : "30px" }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: "bold",
              mb: 3,
              textWrap: "balance", // Ajuste automático para melhor legibilidade
            }}
          >
            Tudo para <span style={{ color: "#B78362" }}>sua empresa</span> ser
            mais eficiente, em um só lugar
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 2, color: "#555", textWrap: "balance" }}
          >
            A <strong>Valle Consultores</strong>, desde 1983, oferece{" "}
            <strong>soluções contábeis e backoffice</strong>, como gestão
            financeira e coworking, com excelência e tecnologia para que
            clientes foquem no essencial.
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold", mb: 4 }}>
            Nossa orientação fortalece.
          </Typography>
          <Button
            variant="contained"
            sx={{ width: "fit-content" }}
            onClick={(event) => handleSmoothScroll(event, "contato")}
          >
            Entre em contato
          </Button>
        </Box>
      </Box>

      {/* Coluna Direita - Imagem */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#CAD5E2", // Cor diferente para a coluna da direita
          padding: { xs: 4, md: 6 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // Centraliza a imagem verticalmente
        }}
      >
        <img
          src={"./mockup.png"} // Altere para o caminho correto da imagem
          alt="Dashboard Valle"
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "auto",
          }}
        />
      </Box>
    </Box>
  );
}
