import { v4 as uuidv4 } from "uuid";
import CheckIcon from "@mui/icons-material/Check";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";

import "./SummaryStep.css";

const SummaryList = ({ selectionsArray }) => {
  return (
    <>
      {selectionsArray.map((selection) => (
        <ListItem disablePadding>
          <ListItemIcon>
            <CheckIcon color="success" />
          </ListItemIcon>
          <ListItemText key={uuidv4()}>
            <span className="summary-list__text">{selection.selected}</span>
          </ListItemText>
        </ListItem>
      ))}
    </>
  );
};

export default SummaryList;
