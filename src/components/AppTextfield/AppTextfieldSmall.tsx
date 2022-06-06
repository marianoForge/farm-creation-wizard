import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import "./AppTextfield.css";

interface TextfieldProps {
  text: string;
  className?: string;
}

const AppTextfield = ({ text }: TextfieldProps): JSX.Element => {
  return (
    <Container maxWidth="sm">
      <Box
        alignItems="center"
        justifyContent="center"
        className="app-button__container"
      >
        <TextField
          size="small"
          id="outlined-basic"
          label={text}
          variant="outlined"
        />
      </Box>
    </Container>
  );
};

export default AppTextfield;
