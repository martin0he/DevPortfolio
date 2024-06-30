import { Box, Typography } from "@mui/material";

interface ExpCardProps {
  startYear: string;
  endYear: string;
  startMonth: string;
  endMonth: string;
  title: string;
  company: string;
  description: string;
}

const ExpCard = ({
  startYear,
  startMonth,
  endMonth,
  endYear,
  title,
  company,
  description,
}: ExpCardProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#1b1b1d",
        width: { xs: "90%", sm: "75%", md: "60%", lg: "50%" },
        padding: "16px",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "width 0.3s ease-in-out",
        margin: "16px",
        boxShadow: "-1px 2px 4px #000",
      }}
    >
      <Typography variant="h6" color="primary">
        {title}
      </Typography>
      <Typography variant="subtitle1" color="secondary">
        {company}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
      <Typography variant="caption" color="textSecondary">
        {startMonth} {startYear} - {endMonth} {endYear}
      </Typography>
    </Box>
  );
};

export default ExpCard;
