import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const menuItems = [
  { name: "História", href: "historia" },
  { name: "Serviços", href: "servicos" },
  { name: "Caso CRM", href: "numeros" },
  { name: "Contato", href: "contato" },
];

export default function Footer() {
  const handleSmoothScroll = (event, href) => {
    event.preventDefault();
    const target = document.getElementById(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#62748E",
        color: "#CAD5E2",
        py: { xs: 6, sm: 8 },
      }}
    >
      <Container>
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={3}>
            <img
              src={"./logo.svg"}
              alt="Logo Valle"
              style={{ width: "120px", height: "auto", marginBottom: "20px" }}
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", textTransform: "uppercase", mb: 1 }}
            >
              Sessões
            </Typography>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={`#${item.href}`}
                onClick={(event) => handleSmoothScroll(event, item.href)}
                underline="none"
                sx={{ display: "block", color: "#CAD5E2", mb: 1 }}
              >
                {item.name}
              </Link>
            ))}
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", textTransform: "uppercase", mb: 1 }}
            >
              Redes Sociais
            </Typography>

            <Link
              href="https://www.instagram.com/valleconsultores?igsh=dW9xNDIxaXFmMXA0"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#CAD5E2",
                mb: 1,
              }}
            >
              <img
                src="/instagram.svg"
                alt="Instagram"
                style={{ width: 20, height: 20, marginRight: 8 }}
              />
              Instagram
            </Link>

            <Link
              href="https://www.linkedin.com/company/valleconsultores/"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#CAD5E2",
                mb: 1,
              }}
            >
              <img
                src="/linkedin.svg"
                alt="LinkedIn"
                style={{ width: 20, height: 20, marginRight: 8 }}
              />
              LinkedIn
            </Link>

            <Link
              href="https://www.facebook.com/share/1XknycWe7q/"
              underline="none"
              sx={{ display: "flex", alignItems: "center", color: "#CAD5E2" }}
            >
              <img
                src="/facebook.svg"
                alt="Facebook"
                style={{ width: 20, height: 20, marginRight: 8 }}
              />
              Facebook
            </Link>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", textTransform: "uppercase", mb: 1 }}
            >
              Contato
            </Typography>
            <Typography variant="body2" sx={{ color: "#CAD5E2", mb: 1 }}>
              comercial@valleconsultores.com.br
            </Typography>
            <Typography variant="body2" sx={{ color: "#CAD5E2" }}>
              (31) 3324-7286
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: { xs: 4, sm: 6 },
            textAlign: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            pt: 3,
          }}
        >
          <Typography variant="body2" sx={{ color: "#CAD5E2" }}>
            Copyright ©
            <Link
              href="https://valleconsultores.com.br/"
              sx={{ color: "#CAD5E2", fontWeight: "bold" }}
            >
              Valle Consultores
            </Link>{" "}
            2025
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
