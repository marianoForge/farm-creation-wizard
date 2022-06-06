import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "./AppTexts.css";

interface AppTextsProps {
  text: string;
  className?: string;
}

const AppTexts = ({ text }: AppTextsProps): JSX.Element => {
  return (
    <Box className="app-texts__container">
      <Typography variant="body1" paragraph gutterBottom>
        {text}
      </Typography>
    </Box>
  );
};

export default AppTexts;
