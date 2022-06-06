import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppButtons from "../../components/AppButtons/AppButtons";
import AppTexts from "../../components/AppTexts/AppTexts";
import AppTitle from "../../components/AppTitle/AppTitle";

interface FarmCreationProps {
  handleClick: (e: any) => void;
}

const FarmCreation = ({ handleClick }: FarmCreationProps) => {

 
  return (
    <Container sx={{  padding:0, minHeight: "680px" }} >
      <AppTitle
        title="Farm Creation"
        subtitle="Provide more information about your farm and to better farm
          management."
      />
      <Box sx={{ marginBottom: "3rem" }} />
      <AppButtons
        text="Create New Farm"
        value="Create New Farm"
        handleClick={handleClick}
      />
      <AppButtons text="Use My Templates" handleClick={handleClick} />
      <AppButtons
        text="Configure Later"
        className="farm-creation__button"
        handleClick={handleClick}
      />
      <Box sx={{ marginBottom: "3rem" }} />
      <AppTexts
        text="Lörem ipsum ber prera vamyska prenade speda. Multiling makrossa tills speskade sende. 
        Dävis migeng mined sad. Mis pultvätta töbel fyr. Ined minnesprick, exor homot derar."
      />
      <AppTexts
        text=" Meling sonade. Androgam trollfilter. Pseudogest tites i bere såväl som
        mir respektive povönde. Derortad ladil. Kuddbok olig i lyrad om posäv
        transtiv."
      />
    </Container>
  );
};

export default FarmCreation;
