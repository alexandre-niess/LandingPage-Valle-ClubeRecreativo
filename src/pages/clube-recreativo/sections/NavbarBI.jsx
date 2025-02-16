import * as React from "react";
import { useContext } from "react";
import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IframeContext } from "../../../context/IframeContext";

export default function NavbarBI() {
  const { setShowIframe } = useContext(IframeContext);

  const handleCloseIframe = () => {
    setShowIframe(false);
  };

  return (
    <>
      {/* Navbar */}
      <Box
        className="navbar"
        sx={{
          backgroundColor: "#1C2A38",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 2,
          px: { xs: 2, md: 6 },
        }}
      >
        {/* Logo - Ao clicar, volta para a landing page */}
        <Box onClick={handleCloseIframe} sx={{ cursor: "pointer" }}>
          <img src="/logo.svg" alt="Logo" width={70} height={70} />
        </Box>
      </Box>

      {/* Botão de Voltar - Alinhado à esquerda */}
      <Box sx={{ mt: 2, ml: 2 }}>
        {" "}
        {/* Margem para distanciar da navbar */}
        <Button
          variant="transparent" // Usa um botão mais leve
          onClick={handleCloseIframe}
          startIcon={<ArrowBackIcon />}
          sx={{
            color: "#B78362",
            ml: "15px",
          }}
        >
          Voltar
        </Button>
      </Box>
    </>
  );
}
