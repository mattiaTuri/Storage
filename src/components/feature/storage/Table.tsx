import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid/DataGrid/DataGrid";

function Table({ rows, columns }: any) {
  return (
    <DataGrid
      rows={rows}
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
      <p className=" text-[#474862] dark:text-white">No data available</p>
    </Box>
  );
}

export default Table;
