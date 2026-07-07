import { Box, Typography } from "@mui/material";
import LazyImage from "../Common/LazyImage";
import Print1 from "../../assets/Print1.png";
import Print2 from "../../assets/Print2.png";
import Print3 from "../../assets/Print3.png";
import Print4 from "../../assets/Print4.png";
import Print5 from "../../assets/Print5.png";

const articles = [
  {
    image: Print1,
    title: "Indian Express Article",
    date: "2005",
  },
  {
    image: Print2,
    title: "Deccan Herald",
    date: "27 Oct 2005",
  },
  {
    image: Print3,
    title: "Prajavaani",
    date: "2 Aug 2009",
  },
  {
    image: Print4,
    title: "Prajavaani",
    date: "13 Nov 2008",
  },
  {
    image: Print5,
    title: "Eenadu",
    date: "20 Aug 2010",
  },
];

const PrintMediaSection = () => {
  return (
    <Box
      sx={{
        background: "#F6F0E5",
        py: 10,
      }}
    >
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          px: { xs: 3, md: 6 },
        }}
      >
        <Typography
          sx={{
            color: "#2D4A2B",
            fontWeight: 600,
            fontSize: 20,
            lineHeight: "21px",
            mb: "10px",
          }}
        >
          Print Media
        </Typography>
        <Box sx={{ width: "70px", height: "2px", background: "#2D4A2B", mb: 2 }} />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(5,1fr)",
            },
            gap: 3,
          }}
        >
          {articles.map((article, index) => (
            <Box
              key={index}
              sx={{
                background: "#FFFDF9",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #E5DDD0",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                },
              }}
            >
              <Box sx={{ width: "100%", height: 220 }}>
                <LazyImage
                  src={article.image}
                  alt={article.title}
                  height="100%"
                  borderRadius="0px"
                />
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography
                  sx={{
                    fontSize: 18,
                    lineHeight: "31px",
                    letterSpacing: "-0.2px",
                    fontWeight: 400,
                    color: "#2D2A26",
                  }}
                >
                  {article.title}
                </Typography>
                <Typography
                  sx={{
                    mt: 0.5,
                    fontSize: "12.5px",
                    lineHeight: "19.38px",
                    color: "#5C524A",
                  }}
                >
                  {article.date}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PrintMediaSection;