import { Box, Typography } from "@mui/material";
import leaves from "../../assets/leaves.png";

const QuoteSection = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        pt: { xs: 8, md: 12 },
        backgroundColor: "#EFE8D3",
        color:'#EFE8D3',
        px: { xs: 3, md: 6 },
        py: { xs: 6, md: 6 },
        

        pb: { xs: 6, md: 8 },
        
      }}
    >
      <Box
        sx={{

          maxWidth: "1100px",
       
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Top logo */}
        <Box
          component="img"
          src={leaves}
          alt="VedicVanas mark"
          sx={{
            width: { xs: 42, md: 60 },
            height: "auto",
            mb: { xs: 4, md: 5 },
          }}
        />

        {/* Quote */}
        <Typography
          sx={{
            fontFamily: "Fraunces",
            fontStyle: "italic",
            fontWeight: 300,
            color: "#2A2520",
            fontSize:  "42px",
            lineHeight: '56.7px',
            letterSpacing: "-0.42px",
            maxWidth: "980px",
          }}
        >
          “Plant a tree and let it stand. In time, it will return
          
          the blessing tenfold — to your family, to your
          
          village, and to the gods who watch from above.”
        </Typography>

        {/* Citation */}
        <Typography
          sx={{
            mt: { xs: 4, md: 5 },
            fontFamily: "JetBrains Mono",
            fontWeight:'400',
            fontSize:  "11px",
            lineHeight: '17px',
            letterSpacing: "2.2px",
            textTransform: "uppercase",
            color: "#5C3A21",
          }}
        >
          — Varāhamihira · Bṛhat Saṃhitā · c. 550 CE
        </Typography>
      </Box>
    </Box>
  );
};

export default QuoteSection;