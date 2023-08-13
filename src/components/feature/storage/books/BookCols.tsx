import Typography from "@mui/material/Typography";
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import { GridRowId } from "@mui/x-data-grid/models/gridRows";
import ActionDeleteBook from "./ActionDeleteBook";

export const bookCols: GridColDef[] = [
  {
    field: "title",
    headerName: "Title",
    width: 400,
    editable: true,
    renderCell: (params) => {
      return (
        <Typography
          variant="caption"
          component="p"
          className="text-[#474862] dark:text-white"
        >
          {params.value}
        </Typography>
      );
    },
  },
  {
    field: "author",
    headerName: "Author",
    width: 300,
    editable: true,
    renderCell: (params) => {
      return (
        <Typography
          variant="caption"
          component="p"
          className="text-[#474862] dark:text-white"
        >
          {params.value}
        </Typography>
      );
    },
  },
  {
    field: "editor",
    headerName: "Editor",
    type: "string",
    width: 200,
    editable: true,
    renderCell: (params) => {
      return (
        <Typography
          variant="caption"
          component="p"
          className="text-[#474862] dark:text-white"
        >
          {params.value}
        </Typography>
      );
    },
  },
  {
    field: "genre",
    headerName: "Genre",
    type: "string",
    width: 200,
    editable: true,
    renderCell: (params) => {
      return (
        <Typography
          variant="caption"
          component="p"
          className="text-[#474862] dark:text-white"
        >
          {params.value}
        </Typography>
      );
    },
  },
  {
    field: "pages",
    headerName: "Pages",
    type: "number",
    width: 150,
    headerAlign: "center",
    align: "center",
    editable: true,
    renderCell: (params) => {
      return (
        <Typography
          variant="caption"
          component="p"
          className="text-[#474862] dark:text-white"
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
    getActions: ({ id }: { id: GridRowId }) => {
      return [<ActionDeleteBook id={id} />];
    },
  },
];
