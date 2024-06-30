import { Box } from "@mui/material";
import ExpCard from "../components/ExpCard";

const ExperiencePage = () => {
  return (
    <Box>
      <ExpCard
        startYear={"2023"}
        endYear={"2024"}
        startMonth={"June"}
        endMonth={"January"}
        title={"SoftwareDev"}
        company={"Intel"}
        description={"Lorem Ipsum kjjhe iudi we d"}
      />
    </Box>
  );
};

export default ExperiencePage;
