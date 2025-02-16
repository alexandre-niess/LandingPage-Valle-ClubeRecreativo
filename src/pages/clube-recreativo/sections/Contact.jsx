import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Divider, useMediaQuery, Snackbar, Alert } from "@mui/material";

export default function Contact() {
  const isMobile = useMediaQuery("(max-width: 960px)");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  return (
    <Box
      id="contato"
      sx={{
        position: "relative",
        backgroundColor: "#223344",
        color: "white",
        minHeight: isMobile ? "0px" : "110vh",
        display: "flex",
        alignItems: "center",
        py: { xs: 8, sm: 12 },
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={"./logo_gradient.png"}
        alt="Logo Valle Gradient"
        sx={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "80%", sm: "50%" },
          maxWidth: "600px",
          opacity: 0.75,
          zIndex: 0,
          display: isMobile ? "none" : "block", // Oculta no mobile
        }}
      />
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: { xs: 4, md: 8 },
          zIndex: 1,
        }}
      >
        <Box sx={{ flex: 1, textAlign: "left", ml: isMobile ? 4 : 0 }}>
          <Typography
            component="h2"
            variant="h4"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            Quer todos esses benefícios na sua empresa?
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400", mb: 4 }}>
            {isMobile
              ? "Preencha o formulário abaixo que entraremos em contato!"
              : "Preencha o formulário ao lado que entraremos em contato!"}
          </Typography>
          <Divider sx={{ backgroundColor: "grey.400", mb: 4 }} />

          <Box sx={{ mb: 2 }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "grey.400", mb: 0.5 }}
            >
              E-mail:
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              comercial@valleconsultores.com.br
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "grey.400", mb: 0.5 }}
            >
              Telefone:
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              (31) 3324-7286
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 3,
            backgroundColor: "rgba(2, 6, 24, 0.5)",
            padding: 4,
            backdropFilter: "blur(10px)",
            zIndex: 2,
          }}
        >
          <TextField
            label="Nome"
            name="nome"
            value={formData.nome}
            variant="outlined"
            fullWidth
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "grey" } }}
            sx={{ backgroundColor: "#314158", borderRadius: "4px" }}
          />
          <TextField
            label="E-mail"
            name="email"
            value={formData.email}
            variant="outlined"
            fullWidth
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "grey" } }}
            sx={{ backgroundColor: "#314158", borderRadius: "4px" }}
          />
          <TextField
            label="Telefone"
            name="telefone"
            variant="outlined"
            fullWidth
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "grey" } }}
            sx={{ backgroundColor: "#314158", borderRadius: "4px" }}
          />
          <Button
            variant="contained"
            sx={{ width: isMobile ? "100%" : "fit-content" }}
          >
            Solicitar Proposta
          </Button>
        </Box>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity={snackbarSeverity} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
