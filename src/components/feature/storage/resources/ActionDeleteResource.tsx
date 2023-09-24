import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { GridRowId } from "@mui/x-data-grid/models/gridRows";
import { resourcesSelector } from "../../../../store/resources/selector";
import { removeResource } from "../../../../controller/resourcesApi";
import { IconButton } from "@mui/material";

function ActionDeleteResource({ id }: { id: GridRowId }) {
  const dispatch = useDispatch();
  const resources = useSelector(resourcesSelector);

  return (
    <IconButton
      sx={{ width: "50px", height: "50px" }}
      onClick={() => dispatch(removeResource({ id, resources }))}
    >
      <DeleteIcon color="secondary" />
    </IconButton>
  );
}

export default ActionDeleteResource;
