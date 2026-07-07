import { Box, Typography, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PersonalTreeModal from "../Common/PersonalTreeModel";
import headerlogo from "../../assets/headerlogo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Temple Gardens", path: "/temple-gardens" },
  { label: "Projects", path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "Media", path: "/media" },
  { label: "Awards", path: "/awards" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openTreeModal, setOpenTreeModal] = useState(false);

  const activePath = location.pathname;

  return (
    <Box
      component="nav"
      sx={{
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "rgba(245, 239, 224, 0.88)",
        borderBottom: "1px solid rgba(92, 58, 33, 0.14)",
        backdropFilter: "blur(12px)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1320px",
          mx: "auto",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 3,
          px: { xs: 3, md: "40px" },
          py: "18px",
        }}
      >
        {/* Logo */}
        <Box
          component="img"
          src={headerlogo}
          alt="Vedic Vanas Logo"
          onClick={() => navigate("/")}
          sx={{
            height: { xs: 40, md: 56 },
            objectFit: "contain",
            cursor: "pointer",
          }}
        />

        {/* Nav links */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: { md: 2, lg: 3 },
            flexShrink: 1,
          }}
        >
          {navLinks.map((link) => {
            const isActive = activePath === link.path;

            return (
              <Box
                key={link.label}
                onClick={() => navigate(link.path)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "13.5px",
                    fontWeight: 400,
                    color: isActive ? "#2D4A2B" : "#5C524A",
                    transition: "0.2s ease",
                    "&:hover": {
                      color: "#2D4A2B",
                    },
                  }}
                >
                  {link.label}
                </Typography>

                {isActive && (
                  <Box
                    sx={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      backgroundColor: "#5C3A21",
                      mt: 0.5,
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Box>

        {/* CTA button */}
        <Button
          variant="contained"
          endIcon={<ArrowOutwardIcon sx={{ fontSize: 16 }} />}
          onClick={() => setOpenTreeModal(true)}
          sx={{
            backgroundColor: "#1F3320",
            color: "#fff",
            textTransform: "none",
            borderRadius: "30px",
            px: 3,
            py: 1.2,
            fontSize: "13px",
            boxShadow: "none",
            whiteSpace: "nowrap",
            flexShrink: 0,
            "&:hover": {
              backgroundColor: "#23391f",
              boxShadow: "none",
            },
          }}
        >
          Know your personal tree?
        </Button>
      </Box>

      <PersonalTreeModal
        open={openTreeModal}
        onClose={() => setOpenTreeModal(false)}
      />
    </Box>
  );
};

export default Navbar;