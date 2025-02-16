import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useMediaQuery } from "@mui/material";

export default function History() {
  const isMobile = useMediaQuery("(max-width: 960px)");
  return (
    <Box id="historia" sx={{ width: "100%", backgroundColor: "#e8eef8" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",

          width: "100%",
          textAlign: "left",
          backgroundColor: "#e8eef8", // Fundo azul claro
          px: 4,
        }}
      >
        {/* Coluna de texto */}
        <Box
          sx={{
            flex: 2,
            pr: { md: 4 },
            marginRight: "30px",
          }}
        >
          <Box
            sx={{
              display: "inline-block", // Garante que o box tenha largura igual ao conteúdo do Typography
              textAlign: "left", // Alinhamento do conteúdo
              mt: "70px", // Margem superior geral
              mb: "30px", // Margem inferior geral
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: "bold",
                color: "#6b6b6b",
                mb: 1, // Margem inferior menor para encostar no separador
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Nossa História
            </Typography>
            <Box
              sx={{
                width: "100%", // Largura igual à tipografia
                height: "2px", // Altura da linha decorativa
                backgroundColor: "#b87333", // Cor da linha
                borderRadius: "2px", // Bordas arredondadas
              }}
            />
          </Box>

          <Typography
            variant="body1"
            sx={{ lineHeight: 1.8, mb: 2, color: "#333" }}
          >
            A <strong>Valle Consultores</strong> foi fundada em{" "}
            <strong>1983</strong> com o propósito de ajudar as{" "}
            <strong>empresas</strong> e <strong>empresários</strong> nas
            questões <strong>contábeis</strong>, <strong>fiscais</strong> e{" "}
            <strong>tributárias</strong>, continuamente e de forma{" "}
            <strong>consultiva</strong>.
          </Typography>
          <Typography
            variant="body1"
            sx={{ lineHeight: 1.8, mb: 2, color: "#333" }}
          >
            Com espírito <strong>empreendedor</strong> e sempre vestindo a{" "}
            <strong>camisa</strong> dos seus clientes, passou a ter destaque no{" "}
            <strong>mercado mineiro</strong>, tendo expressiva{" "}
            <strong>expansão orgânica</strong> através das{" "}
            <strong>indicações</strong> efetuadas por seus{" "}
            <strong>clientes satisfeitos</strong>.
          </Typography>
          <Typography
            variant="body1"
            sx={{ lineHeight: 1.8, mb: 2, color: "#333" }}
          >
            Essa <strong>expansão</strong>, com a conservação da{" "}
            <strong>qualidade</strong> dos <strong>serviços prestados</strong>,
            só foi possível graças à manutenção de um{" "}
            <strong>time de profissionais</strong> extremamente{" "}
            <strong>qualificados</strong> e <strong>éticos</strong>, bem como à
            incessante busca por <strong>melhorias</strong> e implementação de{" "}
            <strong>tecnologias</strong> que dão suporte a este time.
          </Typography>
          <Typography
            variant="body1"
            sx={{ lineHeight: 1.8, mb: 2, color: "#333" }}
          >
            Atualmente a <strong>Valle</strong> atende{" "}
            <strong>nacionalmente</strong> além dos{" "}
            <strong>serviços contábeis</strong> inicialmente propostos,
            entregando também outros serviços de <strong>backoffice</strong>,
            como <strong>gestão financeira</strong>, <strong>tesouraria</strong>{" "}
            e <strong>coworking</strong>, para que o <strong>empresário</strong>{" "}
            se preocupe exclusivamente com suas <strong>atividades fins</strong>
            .
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "#333",
              mb: isMobile ? "60px" : "0px",
            }}
          >
            Somos a <strong>extensão do negócio</strong> de nossos{" "}
            <strong>clientes</strong>.
            <br />
            Nossa <strong>orientação fortalece</strong>.
          </Typography>
        </Box>

        {/* Coluna de imagem */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="./logo_line.png" // Substituir pelo caminho correto da imagem
            alt="Logo Valle"
            style={{
              display: isMobile ? "none" : "block",
              width: "auto",
              height: "100%",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
