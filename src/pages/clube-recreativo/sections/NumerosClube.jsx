import * as React from "react";
import { useState, useEffect, useContext } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  Tabs,
  Tab,
  CircularProgress,
} from "@mui/material";
import { IframeContext } from "../../../context/IframeContext"; // Contexto do Iframe
import NavbarBI from "./NavbarBI";

export default function NumerosClube() {
  const { showIframe, iframeLoaded } = useContext(IframeContext);
  const isMobile = useMediaQuery("(max-width: 960px)");
  const [urlBIContabil, setUrlBIContabil] = useState("");
  const [urlBIFolha, setUrlBIFolha] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        right: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#F2F5FA",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        transition: "opacity 0.5s ease-in-out, z-index 0.5s ease-in-out",
        opacity: showIframe ? 1 : 0,
        zIndex: showIframe ? 1000 : -1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavbarBI />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          paddingX: "20px",
        }}
      >
        {/* Texto e Tabs */}
        <Box sx={{ px: 3, pt: 2, textAlign: "left" }}>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              fontWeight: "500",
              textWrap: "balance",
            }}
          >
            Contamos com dois dashboards, o BI Contábil e o BI Folha.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              color: "#444",
              fontWeight: "600",
              textWrap: "balance",
            }}
          >
            Abaixo você pode selecionar qual deseja visualizar:
          </Typography>

          <Tabs
            value={activeTab}
            onChange={(event, newValue) => setActiveTab(newValue)}
            indicatorColor="primary"
            textColor="primary"
            sx={{
              minHeight: "48px",
              "& .MuiTabs-flexContainer": {
                justifyContent: "flex-start",
              },
            }}
          >
            <Tab label="BI Folha" />
            <Tab label="BI Contábil" />
          </Tabs>
        </Box>

        {/* Iframe ou Loader */}
        <Box sx={{ flex: 1, position: "relative", overflow: "hidden" }}>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <>
              {/* Iframe do BI Folha (carregado no background se não estiver ativo) */}

              {/* Iframe do BI Contábil (carregado no background se não estiver ativo) */}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}
