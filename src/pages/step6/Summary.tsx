import AppTitle from "../../components/AppTitle/AppTitle";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import SummaryList from "./SummaryList";
import AppTexts from "../../components/AppTexts/AppTexts";

import Container from "@mui/material/Container";

import "./SummaryStep.css";

interface SummaryProps{ 
  selectionsArray: []
}

const PlantType = ({ selectionsArray }: SummaryProps) => {
  return (
    <Container sx={{ padding: 0, minHeight: "650px" }}>
      <AppTitle title="Thank you!" />
      <AppTitle title="Your Farm is created with the following choices." />
      <Box sx={{ marginBottom: "3rem" }} />
      <Box className="summary-list__container ">
      <List>
        <SummaryList selectionsArray={selectionsArray} />
      </List>
      
      </Box>
      <Box sx={{ marginBottom: "3rem" }} />
      <AppTexts
          text=" Meling sonade. Androgam trollfilter. Pseudogest tites i bere såväl som
        mir respektive povönde. "
        />
    </Container>
  );
};

export default PlantType;
