import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import footer from "../../assets/footer.png";
import { useState } from "react";
import PersonalTreeModal from "../Common/PersonalTreeModel";

const exploreLinks = [
  { label: "Temple Gardens", path: "/temple-gardens" },
  { label: "Projects", path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "Awards", path: "/awards" },
];

const companyLinks = [
  { label: "About", path: "/about" },
  { label: "Media", path: "/media" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => {
  const [openTreeModal, setOpenTreeModal] = useState(false);

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "#1F3320",
        color: "#FBF7EC",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1320px",
          mx: "auto",
          boxSizing: "border-box",
          px: { xs: 3, md: "40px" },
          pt: { xs: 6, md: 8 },
          pb: 5,
        }}
      >
        {/* Top area: logo/tagline + link columns */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: { xs: 5, md: 4 },
            mb: 6,
          }}
        >
          {/* Logo + tagline + CTA */}
          <Box sx={{ maxWidth: "320px" }}>
            <Box
              component="img"
              src={footer}
              alt="Vedic Vanas Logo"
              sx={{
                height: "48px",
                objectFit: "contain",
                mb: 2,
                backgroundColor: "#FBF7EC",
                borderRadius: "8px",
                p: 1,
              }}
            />
            <Typography
              sx={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 300,
                letterSpacing: "-0.22px",
                fontSize: "15px",
                lineHeight: "29.7px",
                color: "rgba(251, 247, 236, 0.75)",
                mb: 3,
              }}
            >
              Designing sacred gardens that have stood quietly at temples for
              over a decade.
            </Typography>
            <Button
              variant="contained"
              endIcon={<ArrowOutwardIcon sx={{ fontSize: 16 }} />}
              onClick={() => setOpenTreeModal(true)}
              sx={{
                backgroundColor: "#B5651D",
                color: "#fff",
                textTransform: "none",
                borderRadius: "30px",
                px: 3,
                py: 1,
                fontSize: "13px",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#9A5418",
                  boxShadow: "none",
                },
              }}
            >
              Know your personal tree
            </Button>
          </Box>

          {/* Explore column */}
          <Box>
            <Typography
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "1.98px",
                textTransform: "uppercase",
                color: "rgba(251, 247, 236, 0.5)",
                mb: 2,
              }}
            >
              Explore
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {exploreLinks.map((link) => (
                <Typography
                  key={link.label}
                  component={Link}
                  to={link.path}
                  sx={{
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "21.7px",
                    color: "rgba(251, 247, 236, 0.85)",
                    textDecoration: "none",
                    cursor: "pointer",
                    "&:hover": { color: "#FBF7EC" },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Company column */}
          <Box>
            <Typography
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 500,
                fontSize: "11px",
                lineHeight: "17px",
                letterSpacing: "1.98px",
                textTransform: "uppercase",
                color: "rgba(251, 247, 236, 0.5)",
                mb: 2,
              }}
            >
              Company
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {companyLinks.map((link) => (
                <Typography
                  key={link.label}
                  component={Link}
                  to={link.path}
                  sx={{
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "21.7px",
                    color: "rgba(251, 247, 236, 0.85)",
                    textDecoration: "none",
                    cursor: "pointer",
                    "&:hover": { color: "#FBF7EC" },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Visit column */}
          <Box>
            <Typography
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "rgba(251, 247, 236, 0.5)",
                mb: 2,
              }}
            >
              Visit
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Typography
                sx={{ fontSize: "14px", color: "rgba(251, 247, 236, 0.85)" }}
              >
                Hyderabad, Telangana, India
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "rgba(251, 247, 236, 0.85)" }}
              >
                veni@vedicvanas.com
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Bottom bar */}
        <Box
          sx={{
            borderTop: "1px solid rgba(251, 247, 236, 0.15)",
            pt: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 1.5,
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: "rgba(251, 247, 236, 0.6)",
            }}
          >
            © 2026 Vedic Vanas · All rights reserved · Design and developed
            by{" "}
            <Box component="span" sx={{ color: "#B5651D", cursor: "pointer" }}>
              MegaViz Technologies
            </Box>
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              color: "rgba(251, 247, 236, 0.5)",
            }}
          >
            सर्वे भवन्तु सुखिनः
          </Typography>
        </Box>
      </Box>

      <PersonalTreeModal
        open={openTreeModal}
        onClose={() => setOpenTreeModal(false)}
      />
    </Box>
  );
};

export default Footer;