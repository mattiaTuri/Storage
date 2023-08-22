import Typography from "@mui/material/Typography";
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import { GridRowId } from "@mui/x-data-grid/models/gridRows";
import ActionDeleteBook from "./ActionDeleteBook";
import Checkbox from "@mui/material/Checkbox";
import i18n from "i18next";

export const bookCols: GridColDef[] = [
  {
    field: "title",
    headerName: i18n.t("title"),
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
    headerName: i18n.t("author"),
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
    headerName: i18n.t("editor"),
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
    headerName: i18n.t("genre"),
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
    headerName: i18n.t("pages"),
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
    headerName: i18n.t("is_read"),
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
    headerName: i18n.t("delete"),
    type: "actions",
    width: 100,
    getActions: ({ id }: { id: GridRowId }) => {
      return [<ActionDeleteBook id={id} />];
    },
  },
];
