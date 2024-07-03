import {
  Box,
  Chip,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const CustomTooltip = styled(
  ({ className, ...props }: TooltipProps & { isMdUp: boolean }) => (
    <Tooltip
      {...props}
      classes={{ popper: className }}
      arrow
      placement="right-start"
    />
  )
)(({ isMdUp }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    borderRadius: "15px",
    backgroundColor: "#1b1b1d",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: isMdUp ? 250 : 100,
    border: "4.3px solid #1b1b1d",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#1b1b1d",
    "&::before": {
      backgroundColor: "#1b1b1d",
      border: "1px solid #1b1b1d",
    },
  },
}));

interface ExpCardProps {
  startYear: string;
  endYear: string;
  startMonth: string;
  endMonth: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

const ExpCard = ({
  startYear,
  startMonth,
  endMonth,
  endYear,
  title,
  company,
  description,
  technologies,
}: ExpCardProps) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <CustomTooltip
      isMdUp={isMdUp}
      title={
        <>
          {technologies.map((tech) => (
            <Chip
              sx={{ padding: "1px", margin: "3px", fontSize: "15px" }}
              label={tech}
            />
          ))}
        </>
      }
    >
      <Box
        sx={{
          backgroundColor: "#1b1b1d",
          width: { xs: "85%", sm: "90%", md: "93%" },
          padding: "16px",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",

          margin: "16px",
          boxShadow: "-1px 2px 4px #000",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateX(-5px)",
            boxShadow: "-1px 5px 15px #000",
          },
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
    </CustomTooltip>
  );
};

export default ExpCard;
