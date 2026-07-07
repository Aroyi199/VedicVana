import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const projectTypes = [
  {
    title: "Home Sacred Gardens",
    tag: "RESIDENTIAL",
    price: "₹15,000 – ₹75,000",
  },
  {
    title: "Nakshatra Gardens",
    tag: "SACRED",
    price: "₹50,000 – ₹5 Lakhs+",
  },
  {
    title: "Farm Sacred Forests",
    tag: "LARGE-SCALE",
    price: "₹5 Lakhs – ₹10 Lakhs+",
  },
  {
    title: "Temple Projects",
    tag: "INSTITUTIONAL",
    price: "Custom Pricing",
  },
];

const consultationIncludes = [
  "Site Review",
  "Climate Suitability Assessment",
  "Sacred Plant Recommendations",
  "Biodiversity Planning",
  "Concept Layout Guidance",
];

const whyBookReasons = [
  "Personalized recommendations for your birth star and space",
  "Suitable plants selected for your local climate and soil",
  "Sacred and ecological guidance rooted in traditional wisdom",
  "Biodiversity-focused planning for long-term impact",
  "Practical implementation advice from field experts",
];

const inputSx = {
  "& .MuiOutlinedInput-root": {
    fontFamily: "Inter",
    fontSize: "14px",
    backgroundColor: "#FBF7EC",
    "& fieldset": { borderColor: "#E0D8C5" },
    "&:hover fieldset": { borderColor: "#C3922E" },
    "&.Mui-focused fieldset": { borderColor: "#2D4A2B" },
  },
};

const labelSx = {
  fontFamily: "JetBrains Mono",
  fontSize: "10px",
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "#5C524A",
  mb: "8px",
  display: "block",
};

const Contact = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    discuss: "",
    message: "",
  });

  const handleChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = () => {
    console.log("Consultation request submitted:", form);
    
  };

  return (
    <Box sx={{ backgroundColor: "#F5EFE0", minHeight: "100%" }}>
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: "24px", md: "40px" },
          pt: { xs: "60px", md: "96px" },
          pb: "80px",
        }}
      >
        {/* Eyebrow */}
        <Typography
          sx={{
            fontFamily: "JetBrains Mono",
            fontSize: "10.5px",
            lineHeight:'15.75px',
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "#5C3A21",
            mb: "16px",
          }}
        >
          Book a Consultation
        </Typography>

        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "Fraunces",
            fontWeight: 300,
            width:'1123px',
            height:'64px',
            fontSize:'60.27px',
            lineHeight:'63.88px',
            letterSpacing:'-2px',
            color: "#2A2520",
            mb: "16px",
          }}
        >
          Let's Create a{" "}
          <Box component="span" sx={{ fontStyle: "italic",color:'#2D4A2B' }}>
            Meaningful Landscape
          </Box>{" "}
          Together.
        </Typography>

        {/* Subtext */}
        <Typography
          sx={{
            fontFamily: "Inter",
            width:'810px',
            height:'58px',
            fontSize: "17px",
            color: "#5C524A",
            
            mb: "48px",
            lineHeight: '29px',
          }}
        >
          Whether you're planning a sacred garden, temple landscape,
          biodiversity project, or wellness space, we'll help you choose the
          right plants and create a landscape aligned with your purpose.
        </Typography>

        {/* Two-column layout */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.3fr" },
            gap: "32px",
          }}
        >
          {/* LEFT COLUMN */}
          <Box>
            {/* Pricing card */}
            <Box
              sx={{
                backgroundColor: "#1F3A20",
                borderRadius: "16px",
                p: "32px",
                color: "#FBF7EC",
                mb: "40px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "10px",
                  lineHeight:'15px',
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#F5EFE073",
                  mb: "16px",
                }}
              >
                Online Consultation
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Fraunces",
                  fontWeight: 300,
                  fontSize: "48.21px",
                  lineHeight:'48.21px',
                  letterSpacing:'-1.5px',
                  
                  mb: "4px",
                }}
              >
                ₹2,999 – ₹9,999*
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "12px",
                  lineHeight:'18px',
                  fontWeight:'400',
                  color: "#F5EFE073",
                  mb: "28px",
                }}
              >
                Sacred Landscape Consultation
              </Typography>

              <Typography
                sx={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "10px",
                  lineHeight:'15px',
                  letterSpacing: "1.8px",
                  textTransform: "uppercase",
                  color: "#F5EFE073",
                  mb: "16px",
                }}
              >
                Includes
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", mb: "24px",color:'#F5EFE0CC' }}>
                {consultationIncludes.map((item) => (
                  <Box
                    key={item}
                    sx={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
                  >
                    <Box
                      component="span"
                      sx={{
                        color: "#B08A3E",
                        fontSize: "13px",
                        mt: "2px",
                      }}
                    >
                      ✓
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontSize: "13px",
                        color: "rgba(251,247,236,0.9)",
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "11px",
                  color: "rgba(251,247,236,0.5)",
                }}
              >
                * Charges vary based on site area, project complexity, and
                level of detailing required.
              </Typography>
            </Box>

            {/* Project types */}
            <Typography
              sx={{
                fontFamily: "JetBrains Mono",
                fontSize: "10.5px",
                lineHeight:'15.75px',
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#5C3A21",
                mb: "20px",
              }}
            >
              Project Types We Support
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {projectTypes.map((proj, index) => (
                <Box
                  key={proj.title}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    py: "16px",
                    borderTop: index === 0 ? "none" : "1px solid #E0D8C5",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight:'24px',
                        color: "#2A2520",
                      }}
                    >
                      {proj.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "JetBrains Mono",
                        fontSize: "10px",
                        lineHeight:'15px',
                        letterSpacing: "1.5px",
                        color: "#5C3A21",
                        mt: "2px",
                      }}
                    >
                      {proj.tag}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "15px",
                      lineHeight:'22.5px',
                      color: "#2D4A2B",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {proj.price}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Contact footer info */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: "40px",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: "JetBrains Mono",
                    fontSize: "10px",
                    lineHeight:"15px",
                    letterSpacing: "1.8px",
                    textTransform: "uppercase",
                    color: "#5C3A21",
                    mb: "6px",
                  }}
                >
                  Write to Us
                </Typography>
                <Typography sx={{ fontFamily: "Inter", fontSize: "14px", color: "#2A2520",lineHeight:'21px' }}>
                  veni@vedicvanas.com
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "JetBrains Mono",
                    fontSize: "10px",
                    lineHeight:'15px',
                    letterSpacing: "1.8px",
                    textTransform: "uppercase",
                    color: "#5C3A21",
                    mb: "6px",
                  }}
                >
                  Based In
                </Typography>
                <Typography sx={{ fontFamily: "Inter", fontSize: "14px", color: "#2A2520",lineHeight:'21px' }}>
                  Hyderabad, Telangana, India
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* RIGHT COLUMN — Form */}
          <Box
            sx={{
              backgroundColor: "#FBF7EC",
              borderRadius: "16px",
              p: { xs: "24px", md: "40px" },
              border: "1px solid #E0D8C5",
            }}
          >
            <Typography
              sx={{
                fontFamily: "JetBrains Mono",
                fontSize: "10.5px",
                letterSpacing: "2.2px",
                lineHeight:'15.75px',
                textTransform: "uppercase",
                color: "#5C3A21",
                mb: "12px",
              }}
            >
              Consultation Request
            </Typography>

            <Typography
              sx={{
                fontFamily: "Fraunces",
                fontWeight: 400,
                fontSize: "30px",
                letterSpacing:'-0.5px',
                color: "#2A2520",
                mb: "32px",
                lineHeight: '36px',
              }}
            >
              Start Your Sacred Landscape Journey
            </Typography>

            {/* Row 1: Full Name / Email */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: "20px",
                mb: "20px",
              }}
            >
              <Box>
                <Typography component="label" sx={labelSx}>
                  Full Name *
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Your full name"
                  value={form.fullName}
                  onChange={handleChange("fullName")}
                  sx={inputSx}
                />
              </Box>
              <Box>
                <Typography component="label" sx={labelSx}>
                  Email *
                </Typography>
                <TextField
                  fullWidth
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange("email")}
                  sx={inputSx}
                />
              </Box>
            </Box>

            {/* Row 2: Phone / Location */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: "20px",
                mb: "20px",
              }}
            >
              <Box>
                <Typography component="label" sx={labelSx}>
                  Phone Number *
                </Typography>
                <TextField
                  fullWidth
                  placeholder="+91 00000 00000"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  sx={inputSx}
                />
              </Box>
              <Box>
                <Typography component="label" sx={labelSx}>
                  Location *
                </Typography>
                <TextField
                  fullWidth
                  placeholder="City, State"
                  value={form.location}
                  onChange={handleChange("location")}
                  sx={inputSx}
                />
              </Box>
            </Box>

            {/* Row 3: I would like to discuss */}
            <Box sx={{ mb: "20px" }}>
              <Typography component="label" sx={labelSx}>
                I Would Like to Discuss *
              </Typography>
              <TextField
                fullWidth
                placeholder="Mention what you want to discuss"
                value={form.discuss}
                onChange={handleChange("discuss")}
                sx={inputSx}
              />
            </Box>

            {/* Row 4: Message */}
            <Box sx={{ mb: "28px" }}>
              <Typography component="label" sx={labelSx}>
                Message *
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="Tell us about your vision, goals, or any specific requirements..."
                value={form.message}
                onChange={handleChange("message")}
                sx={inputSx}
              />
            </Box>

            {/* Submit button */}
            <Button
              fullWidth
              onClick={handleSubmit}
              sx={{
                backgroundColor: "#1F3A20",
                color: "#FBF7EC",
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "14px",
                textTransform: "none",
                borderRadius: "10px",
                py: "14px",
                mb: "12px",
                "&:hover": { backgroundColor: "#16290F" },
              }}
            >
              Book Consultation →
            </Button>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "12px",
                lineHeight:'18px',
                color: "#8B6A48",
                textAlign: "center",
                mb: "32px",
              }}
            >
              We respond within 2–3 working days.
            </Typography>

            {/* Why book a consultation */}
            <Typography
              sx={{
                fontFamily: "JetBrains Mono",
                fontSize: "10.5px",
                lineHeight:'15.75px',
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#5C3A21",
                mb: "16px",
              }}
            >
              Why Book a Consultation?
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {whyBookReasons.map((reason) => (
                <Box
                  key={reason}
                  sx={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
                >
                  <Box
                    component="span"
                    sx={{ color: "#2D4A2B", fontSize: "13px", mt: "2px" }}
                  >
                    ✓
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "13.5px",
                      lineHeight:'21px',
                      color: "#5C524A",
                    }}
                  >
                    {reason}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;