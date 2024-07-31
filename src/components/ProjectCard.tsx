import { useState } from "react";
import { Typography, Box, Link, Chip, CircularProgress } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

interface ProjectCardProps {
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

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "380px",
        height: "100%",
        borderRadius: "12px",
        backgroundColor: "#1b1b1d",
        margin: "16px",
        padding: "16px",
        boxShadow: "-1px 2px 4px #000",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "-1px 5px 15px #000",
        },
      }}
    >
      <Box
        justifyContent="center"
        alignItems="center"
        display="flex"
        height="35%"
        padding="5px"
        position="relative"
      >
        {isIncomplete ? (
          <img
            src={imgSource}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: "8px",
              objectFit: "fill",
            }}
          />
        ) : (
          <>
            {!videoLoaded && <CircularProgress color="primary" size={35} />}
            <video
              autoPlay
              loop
              onLoadedData={handleVideoLoad}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: "8px",
                objectFit: "contain",
                display: videoLoaded ? "block" : "none",
              }}
            >
              <source src={imgSource} type="video/webm" />
            </video>
          </>
        )}
      </Box>

      <Box padding="5px">
        <Typography>{title}</Typography>
        <Typography fontSize="20px" marginTop="12px">
          {description}
        </Typography>
      </Box>

      <Box padding="3px">
        {stack.map((skill) => (
          <Chip
            key={skill}
            sx={{ fontSize: "14px", margin: "2px" }}
            label={skill}
          />
        ))}
      </Box>

      <Typography variant="body2" position="absolute" bottom="7px" right="13px">
        {month} {year}
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        position="absolute"
        bottom="0px"
        left="10px"
      >
        <Link
          target="_blank"
          href={repoLink}
          width="wrap-content"
          height="wrap-content"
          sx={{ marginRight: "5px" }}
        >
          <GitHubIcon
            color="secondary"
            sx={{ "&:hover": { color: "#328633" }, fontSize: "30px" }}
          />
        </Link>
        {websiteLink && (
          <Link
            target="_blank"
            href={websiteLink}
            width="wrap-content"
            height="wrap-content"
          >
            <LaunchIcon
              color="primary"
              sx={{ "&:hover": { color: "#4261bd" }, fontSize: "30px" }}
            />
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default ProjectCard;
