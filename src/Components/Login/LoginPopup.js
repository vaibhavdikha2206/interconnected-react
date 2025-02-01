import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import ErrorIcon from "@mui/icons-material/Error"; // You can use a Material UI error icon or custom image

function LoginPopup({ open, onClose, onLogin }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: "16px",
          width: "400px",
          maxHeight: "400px", // Ensure dialog doesn't exceed a reasonable height
          overflow: "hidden", // Prevents content overflow during animations
        },
      }}
    >
      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: "-100%" }} // Start above the dialog box
        animate={{ opacity: 1, y: 0 }} // Rush into position
        transition={{
          y: { type: "spring", stiffness: 800, damping: 15 }, // Jerk effect
          opacity: { duration: 0.2 }, // Fade in quickly
        }}
      >
        <Box sx={{ textAlign: "center", padding: "16px", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
          {/* Error Image or Icon */}
          <Box sx={{ marginBottom: "16px" }}>
            <ErrorIcon sx={{ fontSize: "60px", color: "#d32f2f" }} />
            {/* Alternatively, you can use an image */}
            {/* <img src="path_to_your_error_image.png" alt="error" style={{ width: "80px", height: "80px" }} /> */}
          </Box>

          <DialogTitle sx={{ fontWeight: "bold", fontSize: "1.5rem", color: "#333", marginBottom: "16px" }}>
            Login Required
          </DialogTitle>
          <DialogContent>
            <Typography sx={{ margin: "16px 0", color: "#555" }}>
              You need to log in to access this feature.
            </Typography>
          </DialogContent>
          <DialogActions
            sx={{
              justifyContent: "center",
              flexDirection: "column",
              gap: "12px",
              padding: "16px", // Ensure buttons fit within the dialog
            }}
          >
            <Button
              onClick={onLogin}
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#1976d2",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "8px",
                "&:hover": { backgroundColor: "#1565c0" },
              }}
            >
              Login
            </Button>
            <Button
              onClick={onClose}
              variant="text"
              sx={{
                color: "#888",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": { color: "#555" },
              }}
            >
              Cancel
            </Button>
          </DialogActions>
        </Box>
      </motion.div>
    </Dialog>
  );
}

export default LoginPopup;
