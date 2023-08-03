import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomButton from "../../shared/CustomButton";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Table from "./Table";
import CustomModal from "./CustomModal";
import { useState } from "react";
import { ResourcesProps } from "../../../models/Resources";
import { database } from "../../../firebase";
import { ref, set } from "firebase/database";
import { closeModal, openModal } from "../../../store/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateResourceValues } from "../../../store/resourcesRows/resourceRowsSlice";
import { resourceRowSelector } from "../../../store/resourcesRows/selector";

const resourceCol: GridColDef[] = [
  {
    field: "title",
    headerName: "Title",
    width: 300,
    editable: true,
    renderCell: (params) => {
      return (
        <Typography variant="caption" component="p" className="text-[#474862]">
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
        <Typography variant="caption" component="p" className="text-[#474862]">
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
        <Typography variant="caption" component="p" className="text-[#474862]">
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
          //onClick={handleDeleteClick(id)}
          color="inherit"
        />,
      ];
    },
  },
];

function Resources() {
  const dispatch = useDispatch();
  const resourceValues = useSelector(resourceRowSelector);

  const [resourcesList, setResourcesList] = useState<ResourcesProps[]>([]);

  const onValChanges = (event: any) => {
    dispatch(
      updateResourceValues({
        ...resourceValues,
        [event.target.name]: event.target.value,
      })
    );
  };

  const addNewBook = () => {
    const dataObj = (data: any) => [...data, resourceValues];
    setResourcesList(dataObj);
    dispatch(closeModal());
    writeBook(resourceValues);
  };

  const writeBook = (data: any) => {
    const { id, title, link, tag, short_description } = data;
    set(ref(database, "resources" + id), {
      id,
      title,
      link,
      tag,
      short_description,
    });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box className="flex justify-end my-4">
        <CustomButton title="Add" functionClick={() => dispatch(openModal())} />
      </Box>
      <CustomModal
        input={resourceValues}
        onValChanges={onValChanges}
        addFunction={addNewBook}
      />
      <Table
        rows={resourcesList}
        setRows={setResourcesList}
        table="resources"
        columns={resourceCol}
      />
    </Box>
  );
}

export default Resources;
