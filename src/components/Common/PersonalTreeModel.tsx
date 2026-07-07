import { useState } from "react";
import { Box, Typography, Modal, IconButton } from "@mui/material";
import PostPaymentModal from "./PostPaymentModel";

interface FormData {
  name: string;
  dob: string;
  tob: string;
  placeOfBirth: string;
}

interface FormErrors {
  name?: string;
  dob?: string;
  tob?: string;
  placeOfBirth?: string;
}

interface PersonalTreeModalProps {
  open: boolean;
  onClose: () => void;
}

const PersonalTreeModal = ({ open, onClose }: PersonalTreeModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    dob: "",
    tob: "",
    placeOfBirth: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [paymentId, setPaymentId] = useState("");

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.tob) newErrors.tob = "Time of birth is required";
    if (!formData.placeOfBirth.trim()) newErrors.placeOfBirth = "Place of birth is required";
    return newErrors;
  };

  const handlePayment = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const options = {
      key: "rzp_test_T88a2gVPgJVR0T",
      amount: 151500,
      currency: "INR",
      name: "Vedic Vanas",
      description: "Birth Tree Consultation",
      image: "",
      handler: function (response: { razorpay_payment_id: string }) {
        setPaymentId(response.razorpay_payment_id);
        onClose();
        setFormData({ name: "", dob: "", tob: "", placeOfBirth: "" });
        setShowSuccess(true);
      },
      prefill: {
        name: formData.name,
      },
      notes: {
        customer_name: formData.name,
        date_of_birth: formData.dob,
        time_of_birth: formData.tob,
        place_of_birth: formData.placeOfBirth,
      },
      theme: {
        color: "#2D4A2B",
      },
      modal: {
        ondismiss: function () {
          console.log("Payment cancelled");
        },
      },
    };

    if (!window.Razorpay) {
      alert("Payment system is loading. Please try again in a moment.");
      return;
    }

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function (response: any) {
      alert(`Payment failed: ${response.error.description}`);
    });
    rzp.open();
  };

  const inputStyles = {
    width: "100%",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(42,37,32,0.2)",
    outline: "none",
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    color: "#2A2520",
    py: "10px",
    px: 0,
    "::placeholder": { color: "#B0A89E" },
  };

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, md: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: { xs: "100%", md: "860px" },
            maxHeight: { xs: "90vh", md: "auto" },
            overflowY: { xs: "auto", md: "visible" },
            borderRadius: "24px",
            overflow: "hidden",
            outline: "none",
            boxShadow: "0 24px 80px rgba(0,0,0,0.18)",
          }}
        >
          {/* LEFT — green panel */}
          <Box
            sx={{
              width: { xs: "100%", md: "380px" },
              flexShrink: 0,
              backgroundColor: "#2D4A2B",
              p: { xs: "32px 28px", md: "40px 36px" },
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            <Typography
              sx={{
                fontFamily: "JetBrains Mono",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(251,247,236,0.6)",
                mb: 2,
              }}
            >
              Basic Details
            </Typography>

            <Typography
              sx={{
                fontFamily: "Fraunces",
                fontWeight: 400,
                fontSize: { xs: "32px", md: "38px" },
                lineHeight: { xs: "40px", md: "46px" },
                color: "#FBF7EC",
                mb: 3,
              }}
            >
              Find the Tree Connected to Your Soul
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                lineHeight: "22px",
                color: "rgba(251,247,236,0.75)",
                mb: 4,
              }}
            >
              Want to know your Birth Tree? Please consult us to receive your
              Birth Tree details, local names, and personalized mantra.
            </Typography>

            <Box
              sx={{
                width: "100%",
                height: "1px",
                backgroundColor: "rgba(251,247,236,0.15)",
                mb: 4,
              }}
            />

            <Typography
              sx={{
                fontFamily: "JetBrains Mono",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(251,247,236,0.6)",
                mb: 1,
              }}
            >
              Consultation Fee
            </Typography>
            <Typography
              sx={{
                fontFamily: "Fraunces",
                fontSize: "52px",
                fontWeight: 400,
                color: "#FBF7EC",
                letterSpacing: "-1px",
                lineHeight: 1,
                mb: 4,
              }}
            >
              ₹1515
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "Birth Tree identification",
                "Local names and sacred association",
                "Personalized mantra guidance",
                "Consultant follow-up after payment",
              ].map((item) => (
                <Box
                  key={item}
                  sx={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
                >
                  <Typography
                    sx={{
                      color: "rgba(251,247,236,0.5)",
                      fontSize: "14px",
                      lineHeight: "22px",
                      flexShrink: 0,
                    }}
                  >
                    —
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13.5px",
                      lineHeight: "22px",
                      color: "rgba(251,247,236,0.85)",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* RIGHT — form panel */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#FBF7EC",
              p: { xs: "32px 28px", md: "40px 40px" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <IconButton
              onClick={onClose}
              sx={{
                position: "absolute",
                top: "16px",
                right: "16px",
                color: "#5C524A",
                width: "32px",
                height: "32px",
              }}
            >
              ✕
            </IconButton>

            <Box>
              <Typography
                sx={{
                  fontFamily: "Fraunces",
                  fontWeight: 400,
                  fontSize: { xs: "28px", md: "34px" },
                  lineHeight: "40px",
                  color: "#2A2520",
                  mb: 0.5,
                }}
              >
                Your details
              </Typography>
              <Typography
                sx={{
                  fontSize: "13.5px",
                  color: "#8C7B6E",
                  mb: 4,
                }}
              >
                Who are we preparing this consultation for?
              </Typography>

              {/* NAME */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    fontFamily: "JetBrains Mono",
                    fontSize: "9.5px",
                    fontWeight: 500,
                    letterSpacing: "1.8px",
                    textTransform: "uppercase",
                    color: "#5C3A21",
                    mb: 1,
                  }}
                >
                  Name
                </Typography>
                <Box
                  component="input"
                  placeholder="Enter full name"
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange("name", e.target.value)
                  }
                  sx={{
                    ...inputStyles,
                    borderBottomColor: errors.name ? "#C0392B" : "rgba(42,37,32,0.2)",
                  }}
                />
                {errors.name && (
                  <Typography sx={{ fontSize: "11px", color: "#C0392B", mt: 0.5 }}>
                    {errors.name}
                  </Typography>
                )}
              </Box>

              {/* DOB + TOB */}
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3, mb: 3 }}>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "JetBrains Mono",
                      fontSize: "9.5px",
                      fontWeight: 500,
                      letterSpacing: "1.8px",
                      textTransform: "uppercase",
                      color: "#5C3A21",
                      mb: 1,
                    }}
                  >
                    Date of Birth
                  </Typography>
                  <Box
                    component="input"
                    type="date"
                    value={formData.dob}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleChange("dob", e.target.value)
                    }
                    sx={{
                      ...inputStyles,
                      borderBottomColor: errors.dob ? "#C0392B" : "rgba(42,37,32,0.2)",
                    }}
                  />
                  {errors.dob && (
                    <Typography sx={{ fontSize: "11px", color: "#C0392B", mt: 0.5 }}>
                      {errors.dob}
                    </Typography>
                  )}
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "JetBrains Mono",
                      fontSize: "9.5px",
                      fontWeight: 500,
                      letterSpacing: "1.8px",
                      textTransform: "uppercase",
                      color: "#5C3A21",
                      mb: 1,
                    }}
                  >
                    Time of Birth
                  </Typography>
                  <Box
                    component="input"
                    type="time"
                    value={formData.tob}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleChange("tob", e.target.value)
                    }
                    sx={{
                      ...inputStyles,
                      borderBottomColor: errors.tob ? "#C0392B" : "rgba(42,37,32,0.2)",
                    }}
                  />
                  {errors.tob && (
                    <Typography sx={{ fontSize: "11px", color: "#C0392B", mt: 0.5 }}>
                      {errors.tob}
                    </Typography>
                  )}
                </Box>
              </Box>

              {/* PLACE OF BIRTH */}
              <Box sx={{ mb: 5 }}>
                <Typography
                  sx={{
                    fontFamily: "JetBrains Mono",
                    fontSize: "9.5px",
                    fontWeight: 500,
                    letterSpacing: "1.8px",
                    textTransform: "uppercase",
                    color: "#5C3A21",
                    mb: 1,
                  }}
                >
                  Place of Birth
                </Typography>
                <Box
                  component="input"
                  placeholder="City, State, Country"
                  value={formData.placeOfBirth}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange("placeOfBirth", e.target.value)
                  }
                  sx={{
                    ...inputStyles,
                    borderBottomColor: errors.placeOfBirth ? "#C0392B" : "rgba(42,37,32,0.2)",
                  }}
                />
                {errors.placeOfBirth && (
                  <Typography sx={{ fontSize: "11px", color: "#C0392B", mt: 0.5 }}>
                    {errors.placeOfBirth}
                  </Typography>
                )}
              </Box>
            </Box>

            {/* Pay button */}
            <Box
              component="button"
              onClick={handlePayment}
              sx={{
                width: "100%",
                height: "61.59px",
                minWidth: "190px",
                paddingTop: "17px",
                paddingRight: "46.51px",
                paddingBottom: "18.59px",
                paddingLeft: "46.252px",
                backgroundColor: "#2D4A2B",
                color: "#FBF7EC",
                border: "none",
                borderRadius: "999px",
                fontFamily: "Inter",
                fontSize: "15px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "background-color 0.2s",
                "&:hover": { backgroundColor: "#244022" },
              }}
            >
              Proceed to RazorPay
            </Box>
          </Box>
        </Box>
      </Modal>

      {/* Post Payment Success Modal */}
      <PostPaymentModal
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        paymentId={paymentId}
      />
    </>
  );
};

export default PersonalTreeModal;