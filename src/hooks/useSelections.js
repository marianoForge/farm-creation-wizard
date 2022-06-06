import { useState } from "react";

export const useSelections = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectionsArray, setSelectionsArray] = useState([]);

  const handleClick = (e) => {
    const label = e.target.value;

    if (label && activeStep === 0) {
      setSelectionsArray((prev) => [...prev, { selected: label }]);
      setActiveStep(1);
    }
    if (label && activeStep === 1) {
      setSelectionsArray((prev) => [...prev, { selected: label }]);
      setActiveStep(2);
    }
    if (label && activeStep === 2) {
      setSelectionsArray((prev) => [...prev, { selected: label }]);
      setActiveStep(3);
    }
    if (label && activeStep === 3) {
      setSelectionsArray((prev) => [...prev, { selected: label }]);
      setActiveStep(4);
    }
    if (label && activeStep === 4) {
      setSelectionsArray((prev) => [...prev, { selected: label }]);
      if (selectionsArray.length > 5) {
        setActiveStep(5);
      }
    }
  };
  return [activeStep, setActiveStep, handleClick, selectionsArray];
};
