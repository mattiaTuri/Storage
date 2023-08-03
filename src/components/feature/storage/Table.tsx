import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import DeleteIcon from "@mui/icons-material/Delete";
import { database } from "../../../firebase";
import { child, get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid/DataGrid/DataGrid";
import { useDispatch, useSelector } from "react-redux";
import { booksListSelector } from "../../../store/booksList/selector";
import { BooksProps } from "../../../models/Books";
import { getBooksList } from "../../../store/booksList/booksListSlice";

function Table({ rows, setRows, table, columns }: any) {
  const dispatch = useDispatch();
  const booksList: BooksProps[] = useSelector(booksListSelector);

  useEffect(() => {
    dispatch(getBooksList(table));
  }, []);

  return (
    <DataGrid
      rows={booksList}
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
