import { Box, Typography } from "@mui/material";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";


const cards = [
  {
    icon: <PermIdentityOutlinedIcon sx={{ fontSize: 18, color: "#F5EFE0" }} />,
    title: "You",
    description:
      "Personal alignment with nature's wisdom — a garden tuned to your birth star, your dosha, your story.",
    numeral: "I",
    width:'34px',
    numeralLeft: "145px",
    gradient:
      "linear-gradient(180deg, #B58A3E 0%, #7A6A2E 38%, #1D4425 100%)",
  },
  {
    icon: <HomeOutlinedIcon sx={{ fontSize: 18, color: "#F5EFE0" }} />,
    title: "Your Space",
    description:
      "Harmonious environments that breathe life into every corner, chosen for place not catalogue.",
    numeral: "II",
    width:'69px',
    numeralLeft: "118px",
    gradient:
      "linear-gradient(180deg, #5D7B46 0%, #3C6939 38%, #123E25 100%)",
  },
  {
    icon: <PeopleOutlinedIcon sx={{ fontSize: 18, color: "#F5EFE0" }} />,
    title: "Future Generations",
    description:
      "Living legacies — trees planted today become the sacred groves your grandchildren will name.",
    numeral: "III",
    width:'104px',
    numeralLeft: "92px",
    gradient:
      "linear-gradient(180deg, #5A7B46 0%, #3A6738 38%, #123E25 100%)",
  },
  {
    icon: <ParkOutlinedIcon sx={{ fontSize: 18, color: "#F5EFE0" }} />,
    title: "Your Ancestors",
    description:
      "Honoring the lineage written in bark and leaf, and the traditions carried root to root.",
    numeral: "IV",
    width:'104px',
    numeralLeft: "90px",
    gradient:
      "linear-gradient(180deg, #8A5A2B 0%, #5E4A2A 38%, #123B24 100%)",
  },
  {
    icon: <LanguageOutlinedIcon sx={{ fontSize: 18, color: "#F5EFE0" }} />,
    title: "The Planet",
    description:
      "Sustainable ecosystems that heal soil, air, and water — one indigenous plant at a time.",
    numeral: "V",
    width:'69px',
    numeralLeft: "118px",
    gradient:
      "linear-gradient(180deg, #55784A 0%, #37663B 38%, #123E25 100%)",
  },
];

const BenefitsSection = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "rgba(245, 239, 224, 0.88)",
        px: { xs: 2, md:'40px' },
        py: { xs: 5, md: '56px' },
        pb:{xs:6,md:'72px'},
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1120px", mx: "auto" }}>
        {/* Heading */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1.5, md: 3 },
            mb: { xs: 4, md: 5 },
          }}
        >
          <Box
            sx={{
              flex: 1,
              height: "1px",
              backgroundColor: "rgba(92, 58, 33, 0.18)",
            }}
          />

          <Typography
            sx={{
              fontFamily: "Fraunces", 
              fontWeight: 400,
              fontSize: '32px',
              lineHeight: '33px',
              letterSpacing:'-0.22px',
              color: "#2D4A2B",
              textAlign: "center",
              whiteSpace: { md: "nowrap" },
            }}
          >
            We Create Meaningful Landscapes That Benefit
          </Typography>

          <Box
            sx={{
              flex: 1,
              height: "1px",
              backgroundColor: "rgba(92, 58, 33, 0.18)",
            }}
          />
        </Box>

        {/* Cards */}
        <Box
          sx={{
            width:'100%',
            height:'320px',
            minHeight:'320px',
            radius:'24px',
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(5, 1fr)",
            },
            gap: { xs: 2, md:'12px' },
          }}
        >
          {cards.map((card) => (
            <Box
              key={card.title}
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "24px",
                height:'320px',
                px:'28px',
                pt:'28px',
                pb:'24px',              
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: card.gradient,
                boxShadow: "0 10px 30px rgba(25, 49, 30, 0.14)",

                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.25) 100%)",
                  pointerEvents: "none",
                },
              }}
            >
              {/* Roman numeral */}
              <Typography
                sx={{
                  position: "absolute",
                  top:'-12px',
                  height:'120px',
                  overflow:'hidden',
                  left: card.numeralLeft,
                  fontFamily: "Fraunces",
                  fontWeight: 300,
                  fontSize: '108px',
                  lineHeight: '120px',
                  color: "#FFFFFF0F",
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              >
                {card.numeral}
              </Typography>

              {/* Top area */}
              <Box sx={{ width:'52px',height:'52px',position: "relative", zIndex: 2,radius:'14px' }}>
                <Box
                  sx={{
                    width: '48px',
                    height: '48px',
                    borderRadius: "14px",
                    backgroundColor: "#FFFFFF1F",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: { xs: 3.5, md: 4 },
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
                  }}
                >
                  {card.icon}
                </Box>
                

                <Box
                  sx={{
                    width: '32px',
                    height: "1px",
                    backgroundColor: "#FFFFFF4D",
                    mb:'72px',
                  }}
                />
              </Box>

              {/* Bottom content */}
              <Box sx={{ pt:'1px',position: "relative", zIndex: 2, mt: 2 }}>
                <Typography
                  sx={{
                    fontFamily: "Fraunces", 
                    fontSize:'20px',
                    lineHeight: '26px',
                    fontWeight: 400,
                    color: "#F5EFE0",
                    mb: 1.25,
                  }}
                >
                  {card.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize:  "13px" ,
                    lineHeight:  "21px" ,
                    fontWeight:400,
                    color: "#F5EFE0B8",
                  }}
                >
                  {card.description}
                </Typography>
              </Box>
            </Box>
            
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BenefitsSection;