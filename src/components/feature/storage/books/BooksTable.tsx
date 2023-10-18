import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import { BooksProps } from "../../../../models/Book"
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import Chip from "@mui/material/Chip";
import RatingStars from "../../../shared/RatingStars";
import { GridRowId } from "@mui/x-data-grid/models/gridRows";
import ActionDeleteBook from "./ActionDeleteBook";
import Table from "../Table";

function BooksTable({ rows }: { rows: BooksProps[] }){
    const { t } = useTranslation();

    const bookCols: GridColDef[] = [
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
          field: "author",
          headerName: t("author"),
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
          field: "genre",
          headerName: t("genre"),
          type: "string",
          flex:1,
          renderCell: (params) => {
            const genre = params.value;
            return <Chip label={t(`genres.${genre}`)} color="primary" />;
          },
        },
        {
          field: "rating",
          headerAlign: "left",
          headerName: t("rating"),
          flex:1,
          renderCell: (params) => {
            return <RatingStars starsValue={params.value}/>
          },
        },
        {
          field: "reading_year",
          headerName: t("reading_year"),
          headerAlign: "center",
          align: "center",
          flex:1,
          renderCell: (params) => {
            return (
              <Typography variant="caption" component="p">
                {params.value}
              </Typography>
            );
          }
        },
        {
          field: "actions",
          headerName: t("delete"),
          type: "actions",
          flex:1,
          getActions: ({ id }: { id: GridRowId }) => {
            return [<ActionDeleteBook id={id} />];
          },
        },
      ];

    return (
        <Table cols={bookCols} rows={rows}/>
    )
}

export default BooksTable