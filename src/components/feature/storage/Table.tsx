import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid/DataGrid/DataGrid";
import CustomNoRows from "../../shared/CustomNoData";

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
        slots={{ noRowsOverlay: CustomNoRows }}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default Table;
