import { Typography } from "@mui/material";

interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <Typography fontSize={{ lg: 42, md: 37, sm: 32, xs: 26 }} fontWeight={500}>
      {title}
    </Typography>
  );
};

export default PageHeader;
