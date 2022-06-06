import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";

import "./AppTitle.css";

interface AppTitleProps {
  title: string;
  subtitle?: string;
}

const AppTitle = ({ title, subtitle }: AppTitleProps): JSX.Element => {
  return (
    <Container maxWidth="sm">
      <Box className="app-title-container">
        <Typography variant="h5" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          className="app-title-container__subtitle"
          variant="subtitle1"
          align="center"
          gutterBottom
        >
          {subtitle}
        </Typography>
      </Box>
    </Container>
  );
};

export default AppTitle;
