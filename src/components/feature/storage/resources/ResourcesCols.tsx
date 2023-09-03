import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import ActionDeleteResource from "./ActionDeleteResource";
import i18next from "i18next";

const resourceCol: GridColDef[] = [
  {
    field: "title",
    headerName: i18next.t("title"),
    width: 300,
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
    field: "link",
    headerName: i18next.t("link"),
    width: 400,
    renderCell: (params) => {
      return (
        <Link href={params.value} target="_blank" variant="caption">
          {params.value}
        </Link>
      );
    },
  },
  {
    field: "short_description",
    headerName: i18next.t("short_description"),
    type: "string",
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
    field: "tag",
    headerName: i18next.t("tag"),
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
    field: "actions",
    headerName: i18next.t("delete"),
    type: "actions",
    width: 100,
    getActions: ({ id }) => {
      return [<ActionDeleteResource id={id} />];
    },
  },
];
