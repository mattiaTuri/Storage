import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid/DataGrid/DataGrid";
import CustomNoRows from "../../shared/CustomNoData";

function Table({ rows, cols }: any) {
  
  return (
    <Box className="relative h-full">
      <DataGrid
        sx={{
          border: "1px solid #434343", "& .MuiDataGrid-withBorderColor": {
          borderColor:"#434343"
          },
        }}
        rows={rows}
        columns={cols}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ noRowsOverlay: CustomNoRows}}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
        disableColumnFilter 
      />
    </Box>
  );
}

export default Table;
