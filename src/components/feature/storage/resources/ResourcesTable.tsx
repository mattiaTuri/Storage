import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import { useTranslation } from "react-i18next";
import ActionDeleteResource from "./ActionDeleteResource";
import { ResourcesProps } from "../../../../models/Resource";
import Table from "../Table";
import { GridRowId } from "@mui/x-data-grid/models/gridRows";

function ResourcesTable({ rows }: { rows: ResourcesProps[] }){
    const { t } = useTranslation();

    const resourceCol: GridColDef[] = [
        {
          field: "title",
          headerName: t("title"),
          flex:1,
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
          headerName: t("link"),
          flex:1,
          renderCell: (params) => {
            return (
              <Link href={params.value} target="_blank" variant="caption">
                {params.value}
              </Link>
            );
          },
        },
        {
          field: "description",
          headerName: t("description"),
          type: "string",
          flex:1,
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
          headerName: t("tag"),
          type: "string",
          headerAlign: "center",
          align: "center",
          flex:1,
          renderCell: (params) => {
            return (
              <Chip label={params.value} color="primary" />
            );
          },
        },
        {
          field: "actions",
          headerName: t("delete"),
          type: "actions",
          flex:1,
          getActions: ({ id }: { id: GridRowId }) => {
            return [<ActionDeleteResource id={id} />];
          },
        },
      ];

      return (
        <Table cols={resourceCol} rows={rows}/>
      )
}

export default ResourcesTable