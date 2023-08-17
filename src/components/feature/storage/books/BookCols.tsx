import Typography from "@mui/material/Typography";
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import { GridRowId } from "@mui/x-data-grid/models/gridRows";
import ActionDeleteBook from "./ActionDeleteBook";
import Checkbox from "@mui/material/Checkbox";

export const bookCols: GridColDef[] = [
  {
    field: "title",
    headerName: "Title",
    width: 400,
    editable: true,
    renderCell: (params) => {
      return (
        <Typography variant="caption" component="p">
          {params.value}
        </Typography>
      );
    },
  },
  {
    field: "author",
    headerName: "Author",
    width: 200,
    editable: true,
    renderCell: (params) => {
      return (
        <Typography variant="caption" component="p">
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
        <Typography variant="caption" component="p">
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
        <Typography variant="caption" component="p">
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
        <Typography variant="caption" component="p">
          {params.value}
        </Typography>
      );
    },
  },
  {
    field: "read",
    headerName: "Read",
    type: "boolean",
    width: 150,
    headerAlign: "center",
    align: "center",
    editable: true,
    renderCell: (params) => {
      return (
        <Checkbox checked={params.row.isRead}/>
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
