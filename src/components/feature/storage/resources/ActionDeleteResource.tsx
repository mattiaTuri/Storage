import { GridActionsCellItem } from "@mui/x-data-grid/components/cell/GridActionsCellItem";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { GridRowId } from "@mui/x-data-grid/models/gridRows";
import { resourcesSelector } from "../../../../store/resources/selector";
import { removeResource } from "../../../../controller/resourcesApi";

function ActionDeleteResource({ id }: { id: GridRowId }) {
  const dispatch = useDispatch();
  const resources = useSelector(resourcesSelector);

  return (
    <GridActionsCellItem
      icon={<DeleteIcon />}
      label="Delete"
      onClick={() => dispatch(removeResource({ id, resources }))}
      color="inherit"
      className="dark:text-white"
    />
  );
}

export default ActionDeleteResource;
