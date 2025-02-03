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
      placement="top-end"
    />
  )
)(({ isMdUp }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    borderRadius: "15px",
    backgroundColor: "#0e0e11",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: isMdUp ? 250 : 100,
    border: "2px dashed #57575b",
    padding: "10px",

    zIndex: 5,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#0e0e11",

    "&::before": {
      backgroundColor: "#0e0e11",
      border: "2px solid #57575b",
      zIndex: 6,
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
  imageUrl: string;
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
  imageUrl,
}: ExpCardProps) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <CustomTooltip
      key={title}
      isMdUp={isMdUp}
      title={
        <>
          {technologies.map((tech) => (
            <Chip
              sx={{
                padding: "1px",
                margin: "4px",
                fontSize: "15px",
                borderRadius: "9px",
              }}
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
          position: "relative",
          marginY: "8px",
          boxShadow: "-1px 2px 4px #000",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateX(-5px)",
            boxShadow: "-1px 5px 15px #000",
          },
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          gap="20px"
          justifyContent="space-between"
        >
          <Box display="flex" flexDirection="column">
            <Typography variant="h6" color="primary">
              {title}
            </Typography>
            <Typography
              sx={{ marginTop: "-5px" }}
              variant="subtitle1"
              color="secondary"
            >
              {company}
            </Typography>
          </Box>

          <img
            src={imageUrl}
            style={{
              width: "80px",
              height: "80px",
              contain: "cover",
              position: isMdUp ? "absolute" : "relative",
              top: isMdUp ? "8px" : "0",
              right: isMdUp ? "10px" : "0",
              borderRadius: "7px",
              opacity: 0.76,
            }}
          />
        </Box>

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
