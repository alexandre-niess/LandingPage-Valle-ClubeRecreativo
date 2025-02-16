import * as React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { IframeContext } from "../../../context/IframeContext"; // Importa o contexto

export default function Numbers() {
  const isMobile = useMediaQuery("(max-width: 960px)");
  const { handleShowIframe } = useContext(IframeContext); // Usa o contexto para ativar o iframe

  return (
    <>
      <Box
        id="numeros"
        sx={{
          backgroundColor: "#F8FAFC", // Fundo claro
          pt: { xs: 8, sm: 12 }, // Espaçamento vertical
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Empilhado em telas pequenas
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 4, md: 8 },
          }}
        >
          {/* Coluna Esquerda - Texto */}
          <Box
            sx={{
              flex: 1,
              textAlign: isMobile ? "left" : "left", // Alinha textos à esquerda no mobile
            }}
          >
            {/* Título da seção */}
            <Box
              sx={{
                display: "inline-block",
                textAlign: "left",
                ml: isMobile ? 4 : 0,
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  color: "#6B7280", // Cinza escuro
                }}
              >
                Caso de Sucesso
              </Typography>
              {/* Linha decorativa com largura ajustável */}
              <Box
                sx={{
                  width: "100%", // Adapta à largura do conteúdo
                  height: "3px",
                  backgroundColor: "#b87333",
                  my: 1, // Margem acima e abaixo
                }}
              />
              {/* Nome dos Parceiros */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#1F2937", // Cinza
                  mt: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {" "}
                VALLE CONSULTORES{" "}
                <span role="img" aria-label="handshake">
                  {" "}
                  🤝{" "}
                </span>{" "}
                CLUBE RECREATIVO{" "}
              </Typography>{" "}
            </Box>

            {/* Descrição */}
            <Typography
              variant="body1"
              sx={{ mt: 2, color: "#4B5563", ml: isMobile ? 4 : 0 }}
            >
              Além de todos os tributos do clube, oferecemos em nossa plataforma
              própria com <strong>dashboards</strong> que dão uma visão geral de
              toda a sua empresa.
            </Typography>

            {/* Botão de ação */}
            <Button
              variant="contained"
              sx={{ mt: "40px", ml: isMobile ? 4 : 0 }}
              onClick={handleShowIframe}
            >
              Acesse os números do clube
            </Button>
          </Box>

          {/* Coluna Direita - Imagem */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={"./mockup.png"} // Altere para o caminho correto da imagem
              alt="Dashboard Valle"
              style={{
                marginBottom: isMobile ? "70px" : "0px",
                marginTop: isMobile ? "50px" : "0px",
                width: "100%",
                maxWidth: "500px",
                height: "auto",
              }}
            />
          </Box>
        </Container>

        {/* Gráfico visível apenas em telas grandes */}
        <img
          src="./graficos.png"
          style={{
            display: isMobile ? "none" : "block",
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
    </>
  );
}
