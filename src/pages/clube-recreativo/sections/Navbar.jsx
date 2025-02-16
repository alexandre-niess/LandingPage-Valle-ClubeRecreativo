import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";

const menuItems = [
  { name: "HISTÓRIA", href: "historia" },
  { name: "SERVIÇOS", href: "servicos" },
  { name: "CRM", href: "numeros" },
  { name: "CONTATO", href: "contato" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleSmoothScroll = (event, href) => {
    event.preventDefault();
    const target = document.getElementById(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <Box
      className="navbar"
      sx={{
        backgroundColor: "#1C2A38",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 2.5,
        px: { xs: 2, md: 6 },
      }}
    >
      <Box>
        <img src="/logo.svg" alt="Logo" width={70} height={70} />
      </Box>

      <IconButton
        sx={{
          display: { xs: "flex", md: "none" },
          color: "white",
          zIndex: "10",
        }}
        onClick={() => setOpen(true)}
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
        {menuItems.map((item, index) => (
          <React.Fragment key={item.href}>
            <Link
              href={`#${item.href}`}
              underline="none"
              sx={{
                color: "white",
                fontWeight: "500",
                textTransform: "uppercase",
                fontSize: "14px",
                cursor: "pointer",
                mx: 2,
                "&:hover": { color: "#BC7B51" },
              }}
              onClick={(event) => handleSmoothScroll(event, item.href)}
            >
              {item.name}
            </Link>
            {index !== menuItems.length - 1 && (
              <Typography
                sx={{
                  mx: "12px",
                  color: "#BC7B51",
                  fontSize: "16px",
                  fontWeight: "bold",
                  userSelect: "none",
                  display: { xs: "none", md: "inline" },
                }}
              >
                |
              </Typography>
            )}
          </React.Fragment>
        ))}
        <Button
          variant="contained"
          sx={{ ml: 3 }}
          onClick={(event) => handleSmoothScroll(event, "contato")}
        >
          Entre em contato
        </Button>
      </Box>

      <Drawer
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-paper": { backgroundColor: "white", height: "auto" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 4,
          }}
        >
          <IconButton
            sx={{ alignSelf: "flex-end", mr: 2 }}
            onClick={() => setOpen(false)}
          >
            <CloseIcon sx={{ zIndex: "2" }} />
          </IconButton>

          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={`#${item.href}`}
              underline="none"
              sx={{
                color: "black",
                fontWeight: "500",
                textTransform: "uppercase",
                fontSize: "16px",
                my: 2,
                cursor: "pointer",
                "&:hover": { color: "#BC7B51" },
              }}
              onClick={(event) => handleSmoothScroll(event, item.href)}
            >
              {item.name}
            </Link>
          ))}

          <Button
            variant="contained"
            sx={{ mt: 3 }}
            onClick={(event) => handleSmoothScroll(event, "contato")}
          >
            Entre em contato
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
