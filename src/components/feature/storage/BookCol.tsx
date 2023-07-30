import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import { GridActionsCellItem } from "@mui/x-data-grid/components/cell/GridActionsCellItem";

export const bookCol: GridColDef[] = [
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
    field: "author",
    headerName: "Author",
    width: 250,
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
    field: "genre",
    headerName: "Genre",
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
    field: "editor",
    headerName: "Editor",
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
    field: "pages",
    headerName: "Pages",
    type: "number",
    width: 150,
    headerAlign: "center",
    align: "center",
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
          // onClick={() => deleteRow(id)}
          color="inherit"
        />,
      ];
    },
  },
];
