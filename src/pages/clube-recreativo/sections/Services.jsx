import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

// Importação dos ícones do MUI
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GavelIcon from "@mui/icons-material/Gavel";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

// Dados dos serviços
const services = [
  {
    icon: <BusinessCenterIcon fontSize="large" />,
    title: "Gestão Contábil",
    description:
      "Decisões erradas custam caro! Tenha balancetes em tempo real, unindo fiscal, financeiro e trabalhista para uma gestão estratégica segura.",
  },
  {
    icon: <PeopleAltIcon fontSize="large" />,
    title: "Gestão Trabalhista",
    description:
      "Folha de pagamento sem falhas! Cuidamos de todo o processo de gestão de pessoal, da admissão ao desligamento, garantindo conformidade e eficiência.",
  },
  {
    icon: <GavelIcon fontSize="large" />,
    title: "Legalização de Empresas",
    description:
      "Burocracia não é barreira! Facilitamos desde a escolha do regime jurídico até a obtenção de licenças, garantindo segurança na abertura do seu negócio.",
  },
  {
    icon: <AttachMoneyIcon fontSize="large" />,
    title: "BPO Financeiro",
    description:
      "Tempo é dinheiro! Deixe a gestão financeira com a gente e foque no crescimento do seu negócio.",
  },
  {
    icon: <BarChartIcon fontSize="large" />,
    title: "Gestão Tributária",
    description:
      "Não comprometa seu lucro! Criamos soluções personalizadas para otimizar sua carga tributária e manter sua empresa sempre em conformidade.",
  },
  {
    icon: <HomeWorkIcon fontSize="large" />,
    title: "Coworking e Sede Virtual",
    description:
      "Flexibilidade para você! Tenha um espaço profissional com infraestrutura completa para reduzir custos e ampliar oportunidades.",
  },
];

export default function Services() {
  return (
    <Box
      id="servicos"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#223344", // Fundo escuro
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // Alinha o título à esquerda
          gap: { xs: 4, sm: 8 },
        }}
      >
        {/* Título da seção */}
        <Box
          sx={{
            display: "inline-block", // Garante que o box tenha largura igual ao conteúdo do Typography
            textAlign: "left", // Alinhamento do conteúdo
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              mb: 1, // Margem inferior menor para encostar no separador
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Nossos Serviços
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

        {/* Grid de serviços */}
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  p: 3,
                  height: "100%",
                  backgroundColor: "#0F172B", // Fundo dos cards
                  color: "white",
                  border: "1px solid #1f2937", // Borda escura
                }}
              >
                <Stack spacing={2}>
                  {/* Ícone sempre visível e alinhado à esquerda */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#909090", // Cor do ícone
                      zIndex: 1, // Garante que o ícone fique sobre o card
                    }}
                  >
                    {service.icon}
                  </Box>
                  {/* Conteúdo do serviço */}
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", textAlign: "left" }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#9ca3af", textAlign: "left" }}
                  >
                    {service.description}
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
