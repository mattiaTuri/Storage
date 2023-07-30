import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { GridActionsCellItem } from "@mui/x-data-grid/components/cell/GridActionsCellItem";
import { GridColDef } from "@mui/x-data-grid/models/colDef";
import DeleteIcon from "@mui/icons-material/Delete";
import { database } from "../../../firebase";
import { child, get, ref } from "firebase/database";
import { useEffect } from "react";

function Table({ list, setList, table, columns }: any) {
  useEffect(() => {
    get(child(ref(database), table)).then((snapshot: any) => {
      snapshot.forEach((elem: any) => {
        const dataObj = (data: any) => [...data, elem.val()];
        setList(dataObj);
        console.log(dataObj);
      });
    });
  }, []);

  return (
    <DataGrid
      rows={list.map((elem: any, index: number) => ({
        id: index + 1,
        ...elem,
      }))}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      slots={{ noRowsOverlay: CustomNoRowsOverlay }}
      pageSizeOptions={[10]}
      disableRowSelectionOnClick
    />
  );
}

function CustomNoRowsOverlay() {
  return (
    <Box className="h-full flex items-center justify-center">
      <p>No data available</p>
    </Box>
  );
}

export default Table;
