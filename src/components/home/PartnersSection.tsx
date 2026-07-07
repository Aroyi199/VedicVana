import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LazyImage from "../Common/LazyImage";
import HLP from "../../assets/HLP.png";
import Samrachana from "../../assets/Samrachana.png";
import SSA from "../../assets/SSA.png";

const partners = [
  { logo: SSA, name: "Sree Surya Aanjaneya Swamy Devalayam" },
  { logo: HLP, name: "HLP World" },
  { logo: Samrachana, name: "Samrachana" },
];

const PartnersSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "rgba(245, 239, 224, 0.88)",
        px: { xs: 3, md: 5, lg: 6 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1320px",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: { xs: "flex-start", lg: "center" },
          justifyContent: "space-between",
          gap: { xs: 6, md: 8, lg: 8 },
        }}
      >
        {/* LEFT CONTENT */}
        <Box sx={{ maxWidth: "470px", flexShrink: 0 }}>
          <Typography
            sx={{
              fontFamily: "JetBrains Mono",
              fontSize: "11px",
              lineHeight: "16.5px",
              letterSpacing: "2px",
              fontWeight: 500,
              color: "#5C3A21",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            Our Network
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontFamily: "Fraunces",
              fontWeight: 300,
              fontSize: { xs: "40px", md: "60px", lg: "72px" },
              lineHeight: { xs: "48px", md: "64px", lg: "76px" },
              letterSpacing: "-2px",
              color: "#2A2520",
              mb: 3,
            }}
          >
            Trusted{" "}
            <Box
              component="span"
              sx={{
                fontStyle: "italic",
                color: "#2D4A2B",
              }}
            >
              Partners
            </Box>
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: "28.8px",
              color: "#5C524A",
              fontWeight: 400,
              maxWidth: "410px",
            }}
          >
            We collaborate with organizations that share our commitment to
            preserving tradition while embracing innovation. Together, we
            create meaningful impact across communities.
          </Typography>
        </Box>

        {/* RIGHT LOGOS */}
        <Box
          sx={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: { xs: 3, md: 4, lg: 5 },
            alignItems: "start",
          }}
        >
          {partners.map((partner) => (
            <Box
              key={partner.name}
              onClick={() => navigate("/partners")}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              {/* logo */}
              <Box
                sx={{
                  width: { xs: "110px", md: "140px", lg: "150px" },
                  height: { xs: "110px", md: "140px", lg: "150px" },
                  mb: 1.5,
                }}
              >
                <LazyImage
                  src={partner.logo}
                  alt={partner.name}
                  height="100%"
                  borderRadius={partner.name === "HLP World" ? "18px" : "0px"}
                />
              </Box>
              {/* name */}
              <Typography
                sx={{
                  fontFamily: "Fraunces",
                  fontSize: "15px",
                  lineHeight: "27px",
                  letterSpacing: "-0.2px",
                  color: "#2D4A2B",
                  fontWeight: 600,
                  maxWidth: "180px",
                }}
              >
                {partner.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PartnersSection;