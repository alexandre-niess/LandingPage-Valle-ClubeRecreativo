import { Box, CssBaseline } from "@mui/material";
import * as React from "react";
import Footer from "./sections/Footer";
import Clients from "./sections/Clients";
import History from "./sections/History";
import Navbar from "./sections/Navbar";
import Numbers from "./sections/Numbers";
import Services from "./sections/Services";
import HeroSection from "./sections/HeroSection";
import Contact from "./sections/Contact";
import { IframeProvider, IframeContext } from "../../context/IframeContext"; // Importa o contexto
import { useContext, useEffect } from "react";
import NumerosClube from "./sections/NumerosClube";

export function ClubeRecreativo() {
  return (
    <IframeProvider>
      <Box>
        <CssBaseline />
        <Navbar />
        <HeroSection />
        <Clients />
        <History />
        <Services />
        <Numbers />
        <Contact />
        <Footer />
        <IframeRenderer />
      </Box>
    </IframeProvider>
  );
}

const IframeRenderer = () => {
  const { showIframe } = useContext(IframeContext);

  useEffect(() => {
    if (showIframe) {
      document.body.style.overflow = "hidden"; // Remove o scroll quando o iframe estiver aberto
    } else {
      document.body.style.overflow = "auto"; // Restaura o scroll quando o iframe for fechado
    }

    return () => {
      document.body.style.overflow = "auto"; // Garante que o scroll seja restaurado ao desmontar o componente
    };
  }, [showIframe]);

  return <NumerosClube />;
};
