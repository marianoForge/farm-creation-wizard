import Box from "@mui/material/Box";
import AppButtons from "../../components/AppButtons/AppButtons";
import AppTitle from "../../components/AppTitle/AppTitle";
import AppTextField from "../../components/AppTextfield/AppTextfield";
import Container from "@mui/material/Container";

interface FishTypeProps {
  handleClick: (e: any) => void;
}
const FishType = ({ handleClick }: FishTypeProps): JSX.Element => {
  return (
    <Container sx={{  padding:0, minHeight: "680px" }} >
      <AppTitle title="Select Fish You Are Using" />
      
      <Box sx={{ marginBottom: "3rem" }} />
      <AppButtons text="Coi Carp" handleClick={handleClick} />
      <AppButtons text="Eurasian Carp" handleClick={handleClick} />
      <AppButtons
        text="Coi Carp"
        className="farm-creation__button"
        handleClick={handleClick}
      />
      <AppButtons
        text="Coi Carp"
        className="farm-creation__button"
        handleClick={handleClick}
      />
      <AppButtons
        text="Coi Carp"
        className="farm-creation__button"
        handleClick={handleClick}
      />
      <Box sx={{ marginBottom: "3rem" }} />
      <AppTextField text="Other Type" />
    </Container>
  );
};

export default FishType;
