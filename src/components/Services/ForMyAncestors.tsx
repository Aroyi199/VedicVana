import { Box, Typography } from "@mui/material";

const features = [
  {
    title: "Living remembrance",
    description: "Native plants become permanent, breathing memorials.",
  },
  {
    title: "Gratitude & continuity",
    description: "Landscapes that carry the presence of those we love.",
  },
  {
    title: "Ritual meaning",
    description: "Plantings inspired by family traditions and sacred lineage.",
  },
  {
    title: "Ancestral rootedness",
    description: "Reconnecting with the wisdom of those who came before us.",
  },
];

const ForMyAncestors = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        background: "#294C2A",
        py: "96px",
        px: "40px",
      }}
    >
      <Box
        sx={{
          maxWidth: "1320px",
          mx: "auto",
          
          px: "48px",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: "40px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            {/* Number Circle */}
            <Box
              sx={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,.18)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "11px",
                  lineHeight:'16.5px',
                  letterSpacing: "2px",
                  color: "#F5EFE080",
                }}
              >
                04
              </Typography>
            </Box>

            {/* Title */}
            <Typography
              sx={{
                fontFamily: "Fraunces",
                fontWeight: 400,
                fontSize: "72.32px",
                lineHeight: "72.32px",
                letterSpacing:'-2.5px',
                color: "#F5EFE0",
              }}
            >
              For My Ancestors
            </Typography>
          </Box>

          {/* Question */}
          <Typography
            sx={{
              fontFamily: "Fraunces",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "19.29px",
              lineHeight:'27px',
              color: "#B08A3E",
            }}
          >
            How do I honour those who came before me?
          </Typography>
        </Box>

        {/* Divider */}
        <Box
          sx={{
            width: "100%",
            height: "1px",
            background: "rgba(255,255,255,.10)",
            mb: "42px",
          }}
        />

        {/* Features */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            columnGap: "36px",
            mb: "56px",
          }}
        >
          {features.map((item) => (
            <Box key={item.title}>
              <Typography
                sx={{
                  fontFamily: "Fraunces",
                  fontSize: "17px",
                  lineHeight:'24px',
                  color: "#F5EFE0",
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "13.5px",
                  lineHeight: "22px",
                  color: "#F5EFE08C",
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Bottom */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          {/* Quote */}
          <Box
            sx={{
              width: "430px",
              background: "#FFFFFF1A",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: "10px",
              px: "20px",
              py: "18px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Fraunces",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "26px",
                color: "#B08A3E",
              }}
            >
              "Honour parents, grandparents, and your lineage through meaningful
              trees that future generations will remember."
            </Typography>
          </Box>

          {/* Large Number */}
          <Typography
            sx={{
              fontFamily: "Fraunces",
              fontWeight: 300,
              fontSize: "120.53px",
              lineHeight: "120.53px",
              letterSpacing:'-4px',
              color: "#F5EFE03B",
              userSelect: "none",
            }}
          >
            04
          </Typography>
        </Box>

        
      </Box>
    </Box>
  );
};

export default ForMyAncestors;