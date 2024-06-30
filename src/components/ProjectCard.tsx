import { Typography, Box } from "@mui/material";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  month: string;
  year: string;
}

const ProjectCard = ({
  title,
  description,
  link,
  month,
  year,
}: ProjectCardProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "450px",
        borderRadius: "12px",
        backgroundColor: "green",
        margin: "9px",
        padding: "10px",
      }}
    >
      <Typography>{title}</Typography>
      <Typography>{description}</Typography>
      <Typography>{link}</Typography>
      <Typography>{month}</Typography>
      <Typography>{year}</Typography>
    </Box>
  );
};

export default ProjectCard;
