import {
  CircularProgress,
  Dialog,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface VideoModalProps {
  src: string;
  isOpen: boolean;
  close: () => void;
  title: string;
}

const VideoModal = ({ src, isOpen, close, title }: VideoModalProps) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <Dialog
      onClose={close}
      open={isOpen}
      maxWidth={false}
      fullWidth
      PaperProps={{
        style: {
          margin: 0,
          width: "70%",
          borderRadius: "8px",
        },
      }}
    >
      <DialogTitle
        sx={{
          backgroundColor: "#1b1b1d",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingY: "8px",
          paddingX: "16px",
        }}
      >
        <Typography fontSize={20}>{title}</Typography>
        <IconButton onClick={close}>
          <CloseIcon sx={{ fontSize: 24 }} />
        </IconButton>
      </DialogTitle>
      {!videoLoaded && (
        <CircularProgress
          sx={{ alignSelf: "center" }}
          color="primary"
          size={35}
        />
      )}
      <video
        autoPlay
        loop
        muted
        onLoadedData={handleVideoLoad}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "0 0 8px 8px",
          objectFit: "contain",
          display: videoLoaded ? "block" : "none",
        }}
      >
        <source src={src} type="video/webm" />
      </video>
    </Dialog>
  );
};

export default VideoModal;
