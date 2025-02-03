import { useState } from "react";
import {
  Typography,
  Box,
  Link,
  Chip,
  CircularProgress,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import VideoModal from "./VideoModal";

export interface ProjectCardProps {
  title: string;
  description: string;
  websiteLink?: string;
  repoLink: string;
  month: string;
  year: string;
  imgSource: string;
  stack: string[];
  isIncomplete?: boolean;
}

const ProjectCard = ({
  title,
  description,
  websiteLink,
  repoLink,
  month,
  year,
  imgSource,
  stack,
  isIncomplete,
}: ProjectCardProps) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [displayBigVideo, setDisplayBigVideo] = useState(false);
  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };
  const theme = useTheme();

  return (
    <>
      {/* modal */}
      <VideoModal
        src={imgSource}
        close={() => setDisplayBigVideo(false)}
        isOpen={displayBigVideo}
        title={title}
      />

      <Box
        display="flex"
        flexDirection="column"
        rowGap="25px"
        maxHeight="fit-content"
        height={{
          xs: "fit-content",
          sm: "fit-content",
          md: "fit-content",
          lg: "95%",
        }}
        borderRadius="12px"
        marginX="10px"
        marginY="10px"
        width="100%"
        sx={{
          backgroundColor: "#1b1b1d",
          padding: "12px",
          boxShadow: "-1px 2px 4px #000",
          transition: "transform 0.3s, box-shadow 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-7.5px)",
            boxShadow: "-1px 5px 15px #000",
          },
        }}
      >
        {/* demo */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="40%"
          borderRadius="8px"
          overflow="hidden"
          position="relative"
          sx={{ flexShrink: 0 }}
        >
          {isIncomplete ? (
            <img
              src={imgSource}
              alt={`${title} preview`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <>
              {!videoLoaded && <CircularProgress color="primary" size={35} />}
              <Box
                sx={{
                  "&:hover": { transform: "scale(1.013)" },
                  opacity: videoLoaded ? 1 : 0,
                  transition: "transform 0.3s ease-in-out",
                  width: "100%",
                  height: "100%",
                }}
              >
                <video
                  onClick={() => setDisplayBigVideo(true)}
                  autoPlay
                  loop
                  muted
                  onLoadedData={handleVideoLoad}
                  style={{
                    cursor: "pointer",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: videoLoaded ? "block" : "none",
                  }}
                >
                  <source src={imgSource} type="video/webm" />
                </video>
              </Box>
            </>
          )}
        </Box>

        {/* title + desc */}
        <Box paddingY="10px" marginBottom="10px" marginTop="-20px">
          <Typography variant="h6" color="primary.light">
            {title}
          </Typography>
          <Typography variant="body1" color="gray" marginTop="8px">
            {description}
          </Typography>
        </Box>

        {/* stack */}
        <Box
          display="flex"
          flexWrap="wrap"
          gap="4px"
          paddingY="5px"
          marginTop="50px"
        >
          {stack.map((skill) => (
            <Chip
              fontSize={{ xs: "12px", sm: "14px", md: "16px" }}
              sx={{ borderRadius: "9px", margin: "2px" }}
              key={skill}
              label={skill}
            />
          ))}
        </Box>

        {/* links + dates */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Box display="flex" gap="10px">
            <Link
              target="_blank"
              href={repoLink}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <GitHubIcon
                color="secondary"
                sx={{
                  transition: "color 0.2s",
                  "&:hover": { color: theme.palette.secondary.dark },
                  fontSize: "28px",
                }}
              />
            </Link>
            {websiteLink && (
              <Link
                target="_blank"
                href={websiteLink}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <LaunchIcon
                  color="primary"
                  sx={{
                    transition: "color 0.2s",
                    "&:hover": { color: theme.palette.primary.dark },
                    fontSize: "28px",
                  }}
                />
              </Link>
            )}
          </Box>
          <Typography variant="body2" color="gray">
            {month} {year}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ProjectCard;
