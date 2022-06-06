import { useContext } from "react";
import MobileStepper from "@mui/material/MobileStepper";

import { StepContext } from "../context/StepContext";

export default function DotsMobileStepper() {
  const step = useContext(StepContext);

  return (
    <MobileStepper
      variant="progress"
      steps={6}
      position="static"
      activeStep={step}
      sx={{
        maxWidth: 400,
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
      }}
      nextButton={false}
      backButton={false}
    />
  );
}
