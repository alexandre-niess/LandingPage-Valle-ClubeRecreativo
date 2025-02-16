// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClubeRecreativo } from "./pages/clube-recreativo/ClubeRecreativo";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#B08466",
      verde: "#223344",
    },
    background: {
      default: "#F6F6F6", // Cor de fundo padrão
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: "Sora",

    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      [`@media (max-width:600px)`]: {
        fontSize: "2rem",
      },
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      [`@media (max-width:600px)`]: {
        fontSize: "1.75rem",
      },
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
      [`@media (max-width:600px)`]: {
        fontSize: "1.5rem",
      },
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
      [`@media (max-width:600px)`]: {
        fontSize: "1.25rem",
      },
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 400,
      [`@media (max-width:600px)`]: {
        fontSize: "1.1rem",
      },
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 400,
      [`@media (max-width:600px)`]: {
        fontSize: "0.9rem",
      },
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      [`@media (max-width:600px)`]: {
        fontSize: "0.9rem",
      },
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.43,
      [`@media (max-width:600px)`]: {
        fontSize: "0.8rem",
      },
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 500,
      textTransform: "uppercase",
      [`@media (max-width:600px)`]: {
        fontSize: "0.8rem",
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClubeRecreativo />} />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
