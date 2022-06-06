import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/";
import { createTheme } from "@mui/material/styles";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import FarmCreation from "./pages/step1/FarmCreation";
import FarmType from "./pages/step2/FarmType";
import FishType from "./pages/step3/FishType";
import PlantType from "./pages/step4/PlantType";
import GrowSystems from "./pages/step5/GrowSystems";
import Summary from "./pages/step6/Summary";

import "./styles/variables.css";
import { useEffect } from "react";
import { StepContext } from "./context/StepContext";

import { useSelections } from "./hooks/useSelections";

const theme = createTheme({
  palette: {
    primary: {
      main: "#409A05",
    },
  },
});

export default function App() {
  const [activeStep, setActiveStep, handleClick, selectionsArray] =
    useSelections();

  useEffect(() => {
    console.log(selectionsArray);
  }, [selectionsArray]);


  return (
    <ThemeProvider theme={theme}>
      <StepContext.Provider value={activeStep}>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ padding:0, minHeight: "650px" }}>
          <Header />
          {activeStep === 0 && <FarmCreation handleClick={handleClick} />}
          {activeStep === 1 && <FarmType handleClick={handleClick} />}
          {activeStep === 2 && <FishType handleClick={handleClick} />}
          {activeStep === 3 && <PlantType handleClick={handleClick} />}
          {activeStep === 4 && <GrowSystems handleClick={handleClick} />}
          {activeStep === 5 && <Summary handleClick={handleClick} selectionsArray={selectionsArray} />}
          <Footer setActiveStep={setActiveStep} handleClick={handleClick} />
        </Container>
      </StepContext.Provider>
    </ThemeProvider>
  );
}
