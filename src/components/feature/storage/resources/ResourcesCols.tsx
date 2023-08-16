import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import ActionDeleteResource from "./ActionDeleteResource";

export const resourceCol: GridColDef[] = [
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
      return [<ActionDeleteResource id={id} />];
    },
  },
];
