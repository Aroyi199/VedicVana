import { Box, Typography, Button } from "@mui/material";

const steps = [
  "Fill your birth details in a simple form.",
  "Complete the ₹1515 payment securely through Razorpay.",
  "Receive your Birth Tree details, local names, personalised mantra and guidance directly to your email.",
];

const features = [
  "Birth Tree Identification",
  "Local names & sacred associations",
  "Personalised mantra guidance",
  "Consultation follow-up after payment",
];

const ServicesCTA = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#F5EFE0",
        px: { xs: 3, md: "40px" },
        py: { xs: 8, md: "96px" },
      }}
    >
      <Box sx={{ maxWidth: "1320px", mx: "auto" }}>
        <Box
          sx={{
            background: "#294C2A",
            borderRadius: "28px",
            overflow: "hidden",
            px: { xs: 4, md: "56px" },
            py: { xs: 5, md: "56px" },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.45fr 0.9fr",
            },
            gap: { xs: 5, md: "56px" },
            alignItems: "start",
          }}
        >
          {/* LEFT SIDE */}
          <Box>
            <Typography
              sx={{
                fontFamily: "JetBrains Mono",
                fontSize: "10.5px",
                lineHeight: "16px",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#C89B45",
                mb: 2,
              }}
            >
              — DISCOVER YOUR SACRED TREE
            </Typography>

            <Typography
              sx={{
                fontFamily: "Fraunces",
                fontWeight: 300,
                fontSize: { xs: "36px", md: "52px" },
                lineHeight: { xs: "42px", md: "58px" },
                letterSpacing: "-1px",
                color: "#F5EFE0",
                maxWidth: "620px",
                mb: 5,
              }}
            >
              Connect with Your
              <br />
              Spiritual Birth Tree
            </Typography>

            {/* What Happens Next */}
            <Box
              sx={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "18px",
                p: "28px",
                maxWidth: "600px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Fraunces",
                  fontWeight: 300,
                  fontSize: "28px",
                  lineHeight: "34px",
                  color: "#F5EFE0",
                  mb: 3,
                }}
              >
                What happens next
              </Typography>

              {steps.map((step, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                    mb: index !== steps.length - 1 ? "18px" : 0,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#C89B45",
                      fontSize: "16px",
                      mt: "1px",
                    }}
                  >
                    →
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "15px",
                      lineHeight: "26px",
                      color: "rgba(245,239,224,0.80)",
                    }}
                  >
                    {step}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* RIGHT SIDE */}
          <Box
            sx={{
              background: "#FBF7EC",
              borderRadius: "20px",
              p: "32px",
              width: "100%",
              maxWidth: "360px",
              justifySelf: { xs: "stretch", md: "end" },
            }}
          >
            {/* Features */}
            <Box sx={{ mb: 4 }}>
              {features.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    mb: index !== features.length - 1 ? "18px" : 0,
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#2D4A2B",
                      mt: "8px",
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "15px",
                      lineHeight: "24px",
                      color: "#2A2520",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Divider */}
            <Box
              sx={{
                height: "1px",
                background: "rgba(92,58,33,0.12)",
                mb: 4,
              }}
            />

            {/* Amount label */}
            <Typography
              sx={{
                fontFamily: "JetBrains Mono",
                fontSize: "10.5px",
                letterSpacing: "2.2px",
                textTransform: "uppercase",
                color: "#8B6A48",
                mb: 1,
              }}
            >
              Amount
            </Typography>

            {/* Price + INR inline */}
            <Box
              sx={{
                display: "flex",
                alignItems: "baseline",
                gap: "10px",
                mb: 5,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Fraunces",
                  fontWeight: 300,
                  fontSize: "54px",
                  lineHeight: "54px",
                  color: "#2A2520",
                }}
              >
                ₹1515
              </Typography>

              <Typography
                sx={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#8B6A48",
                }}
              >
                INR
              </Typography>
            </Box>

            {/* Button */}
            <Button
              fullWidth
              sx={{
                height: "56px",
                borderRadius: "999px",
                background: "#2D4A2B",
                color: "#FBF7EC",
                fontFamily: "Fraunces",
                fontWeight: 500,
                fontSize: "15px",
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  background: "#244022",
                  boxShadow: "none",
                },
              }}
            >
              Discover My Sacred Tree →
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesCTA;