import Box from "@mui/material/Box";
import AppButtons from "../../components/AppButtons/AppButtons";
import AppTitle from "../../components/AppTitle/AppTitle";
import AppTextField from "../../components/AppTextfield/AppTextfield";
import AppTexts from "../../components/AppTexts/AppTexts";
import Container from "@mui/material/Container";

interface PlantTypeProps {
  handleClick: (e: any) => void;
}
const PlantType = ({ handleClick }: PlantTypeProps): JSX.Element => {
  return (
    <Container sx={{ padding: 0, minHeight: "680px"}}>
      <AppTitle title="Select Plant for the System" />
      <Box sx={{ marginBottom: "3rem" }} />
      <AppButtons text="Spices" handleClick={handleClick} />
      <AppButtons text="Salads" handleClick={handleClick} />
      <AppButtons
        text="CBD Autoflowers"
        className="farm-creation__button"
        handleClick={handleClick}
      />
      <Box sx={{ marginBottom: "3rem" }} />
      <AppTextField text="Other Type" />
      <Box sx={{ marginBottom: "3rem" }} />
      <AppTexts
        text=" Meling sonade. Androgam trollfilter. Pseudogest tites i bere såväl som
        mir respektive povönde. Derortad ladil. Kuddbok olig i lyrad om posäv
        transtiv."
      />
    </Container>
  );
};

export default PlantType;
