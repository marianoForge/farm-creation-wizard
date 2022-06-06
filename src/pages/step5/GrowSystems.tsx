import Box from "@mui/material/Box";
import AppTitle from "../../components/AppTitle/AppTitle";
import AppTexts from "../../components/AppTexts/AppTexts";
import AppButtonsSmall from "../../components/AppButtons/AppButtonsSmall";
import Container from "@mui/material/Container";
import AppTextfieldSmall from "../../components/AppTextfield/AppTextfieldSmall";


interface PlantTypeProps {
  handleClick: (e: any) => void;
}
const PlantType = ({ handleClick }: PlantTypeProps): JSX.Element => {
  return (
    <Container sx={{ padding: 0, minHeight: "680px" }}>
      <>
        <AppTitle
          title="Grow System"
          subtitle="Please select on option per group"
        />

        <Box sx={{ marginBottom: "3rem" }} />
        <AppTexts text="Select Farm Type" />
        <Box sx={{ display: "flex" }}>
          <AppButtonsSmall text="Media Beds" handleClick={handleClick} />
          <AppButtonsSmall text="Tower" handleClick={handleClick} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <AppButtonsSmall text="NFT" handleClick={handleClick} />
          <AppButtonsSmall text="Raft" handleClick={handleClick} />
        </Box>
        <AppTexts text="Water Volume" />
        <Box sx={{ display: "flex" }}>
          <AppButtonsSmall text="100" handleClick={handleClick} />
          <AppButtonsSmall text="300" handleClick={handleClick} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <AppButtonsSmall text="1000" handleClick={handleClick} />
          <AppTextfieldSmall text="Other Type" />
        </Box>
        <AppTexts text="System Count" />
        <Box sx={{ display: "flex" }}>
          <AppButtonsSmall text="1" handleClick={handleClick} />
          <AppButtonsSmall text="2" handleClick={handleClick} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <AppButtonsSmall text="5" handleClick={handleClick} />
          <AppTextfieldSmall text="Other Type" />
        </Box>
        <Box sx={{ marginBottom: "1.5rem" }} />

        <AppTexts
          text=" Meling sonade. Androgam trollfilter. Pseudogest tites i bere såväl som
        mir respektive povönde. "
        />
      </>
    </Container>
  );
};

export default PlantType;
