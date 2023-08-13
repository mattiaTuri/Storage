import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid/DataGrid/DataGrid";

function Table({ rows, col }: any) {
  return (
    <Box className="relative h-full dark:bg-[#262626]">
      <DataGrid
        rows={rows}
        columns={col}
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
    </Box>
  );
}

function CustomNoRowsOverlay() {
  return (
    <Box className="h-full flex items-center justify-center">
      <p className=" text-[#474862] dark:text-white">No data available</p>
    </Box>
  );
}

export default Table;
