import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import "./AppButtons.css";

interface Buttonprops {
  text: string;
  className?: string;
  value?: string;
  handleClick?: (e: any) => void;
}

export default function BasicButtonGroup({ text, handleClick }: Buttonprops) {
  return (
    <Container maxWidth="sm">
      <Box
        alignItems="center"
        justifyContent="center"
        className="app-button__container"
      >
        <Button
          sx={{ height: "calc(var(--base-spacer-l)*1.25)" }}
          variant="contained"
          className="app-button__item--small"
          value={text}
          onClick={handleClick}
        >
          {text}
        </Button>
      </Box>
    </Container>
  );
}
