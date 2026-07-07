import { Box, Typography, Modal, IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface PostPaymentModalProps {
  open: boolean;
  onClose: () => void;
  paymentId: string;
}

const PostPaymentModal = ({ open, onClose, paymentId }: PostPaymentModalProps) => {
  return (
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
          width: { xs: "100%", md: "420px" },
          backgroundColor: "#FBF7EC",
          borderRadius: "24px",
          p: { xs: "32px 28px", md: "40px 36px" },
          textAlign: "center",
          outline: "none",
          boxShadow: "0 24px 80px rgba(0,0,0,0.18)",
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

        <CheckCircleIcon sx={{ fontSize: 56, color: "#2D4A2B", mb: 2 }} />

        <Typography
          sx={{
            fontFamily: "Fraunces",
            fontWeight: 400,
            fontSize: "28px",
            color: "#2A2520",
            mb: 1,
          }}
        >
          Payment Successful
        </Typography>

        <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "22px",
            color: "#5C524A",
            mb: 3,
          }}
        >
          Thank you! Our consultant will reach out to you shortly with your
          Birth Tree details.
        </Typography>

        {paymentId && (
          <Typography
            sx={{
              fontFamily: "JetBrains Mono",
              fontSize: "12px",
              color: "#8C7B6E",
            }}
          >
            Payment ID: {paymentId}
          </Typography>
        )}
      </Box>
    </Modal>
  );
};

export default PostPaymentModal;