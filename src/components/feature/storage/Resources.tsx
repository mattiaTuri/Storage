import Box from "@mui/material/Box";
import { GridActionsCellItem, GridColDef, GridRowId } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomButton from "../../shared/CustomButton";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Table from "./Table";
import CustomModal from "./CustomModal";
import { closeModal, openModal } from "../../../store/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateResourceValues } from "../../../store/resourceRow/resourceRowsSlice";
import { resourceRowsSelector } from "../../../store/resourceRow/selector";
import {
  addResource,
  removeResource,
} from "../../../store/resourcesList/resourcesListSlice";
import { resourcesListSelector } from "../../../store/resourcesList/selector";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { ResourcesProps } from "../../../models/Resources";

function Resources() {
  const dispatch = useDispatch();
  const resourceValues: ResourcesProps = useSelector(resourceRowsSelector);
  const resourcesList = useSelector(resourcesListSelector);

  const onValChanges = (event: any) => {
    dispatch(
      updateResourceValues({
        ...resourceValues,
        [event.target.name]: event.target.value,
      })
    );
  };

  const addNewResource = () => {
    dispatch(addResource(resourceValues));
    dispatch(closeModal());
  };

  const deleteRow = (id: GridRowId) => {
    dispatch(removeResource({ id, resourcesList }));
  };

  const resourceCol: GridColDef[] = [
    {
      field: "title",
      headerName: "Title",
      width: 300,
      editable: true,
      renderCell: (params) => {
        return (
          <Typography
            variant="caption"
            component="p"
            className="text-[#474862]"
          >
            {params.value}
          </Typography>
        );
      },
    },
    {
      field: "link",
      headerName: "Link",
      width: 400,
      renderCell: (params) => {
        return (
          <Link
            href={params.value}
            target="_blank"
            variant="caption"
            className="text-[#474862]"
          >
            {params.value}
          </Link>
        );
      },
    },
    {
      field: "short_description",
      headerName: "Short description",
      type: "string",
      width: 400,
      editable: true,
      renderCell: (params) => {
        return (
          <Typography
            variant="caption"
            component="p"
            className="text-[#474862]"
          >
            {params.value}
          </Typography>
        );
      },
    },
    {
      field: "tag",
      headerName: "Tag",
      type: "string",
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <Typography
            variant="caption"
            component="p"
            className="text-[#474862]"
          >
            {params.value}
          </Typography>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 100,
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => deleteRow(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Box className="flex justify-end my-4">
        <CustomButton title="Add" functionClick={() => dispatch(openModal())}>
          <AddCircleOutlinedIcon className="text-[#474862] dark:text-white group-hover:text-white ease-in-out z-10" />
        </CustomButton>
      </Box>
      <CustomModal
        input={resourceValues}
        onValChanges={onValChanges}
        addFunction={addNewResource}
      />
      <Table
        rows={resourcesList.resources}
        table="resources"
        columns={resourceCol}
      />
    </Box>
  );
}

export default Resources;
