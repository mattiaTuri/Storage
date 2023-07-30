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
import { closeModal } from "../../../store/modal/modalSlice";
import { useDispatch } from "react-redux";

const resourceCol: GridColDef[] = [
  { field: "id", headerName: "Id", width: 100 },
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
    width: 320,
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
    width: 320,
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
    width: 150,
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

const rows = [
  {
    id: 1,
    title: "Lost frequences",
    link: "https://www.youtube.com/watch?v=O9w2jIys60o",
    tag: "Fantasy",
    short_description: "",
  },
  {
    id: 2,
    title: "Nevernight: mai dimenticare",
    link: "Joy Kristoff",
    tag: "Fantasy",
    short_description: "",
  },
  {
    id: 3,
    title: "Il sussurro del destino",
    link: "Turina Mattia",
    tag: "Fantasy",
    short_description: "",
  },
  {
    id: 4,
    title: "Il club delle cinque del mattino",
    link: "",
    tag: "Psicology",
    short_description: "",
  },
  {
    id: 5,
    title: "Harry Potter: il calice di fuoco",
    link: "",
    tag: "Fantasy",
    short_description: "",
  },
];

function Resources() {
  const dispatch = useDispatch();
  const [resourceValues, setResourceValues] = useState<ResourcesProps>({
    title: "",
    link: "",
    tag: "",
    short_description: "",
  });
  const [resourcesList, setResourcesList] = useState<ResourcesProps[]>([]);

  const onValChanges = (event: any) => {
    setResourceValues({
      ...resourceValues,
      [event.target.name]: event.target.value,
    });
  };

  const addNewBook = (event: any) => {
    const dataObj = (data: any) => [...data, resourceValues];
    setResourcesList(dataObj);
    console.log(resourceValues);
    dispatch(closeModal());
    writeBook(resourceValues);
  };

  const writeBook = (data: any) => {
    const { title, link, tag, short_description } = data;
    set(ref(database, "resources" + title.replaceAll(" ", "_")), {
      title: title || null,
      link: link || null,
      tag: tag || null,
      short_description: short_description || null,
    });
  };

  return (
    <Box sx={{ height: 630, width: "100%" }}>
      <Box className="flex justify-end my-4">
        <CustomButton title="Add new resource" />
      </Box>
      <CustomModal onValChanges={onValChanges} addNewBook={addNewBook} />
      <Table
        list={resourcesList}
        setList={setResourcesList}
        table="resources"
        columns={resourceCol}
      />
    </Box>
  );
}

export default Resources;
