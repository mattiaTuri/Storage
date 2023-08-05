import Box from "@mui/material/Box";
import { GridActionsCellItem, GridColDef, GridRowId } from "@mui/x-data-grid";
import CustomButton from "../../shared/CustomButton";
import { Typography } from "@mui/material";
import CustomModal from "./CustomModal";
import { useEffect } from "react";
import { BooksProps } from "../../../models/Books";
import { closeModal, openModal } from "../../../store/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import Table from "./Table";
import DeleteIcon from "@mui/icons-material/Delete";
import { bookRowsSelector } from "../../../store/bookRow/selector";
import { updateBookValues } from "../../../store/bookRow/bookRowsSlice";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { booksListSelector } from "../../../store/booksList/selector";
import { addBook, removeBook } from "../../../store/booksList/booksListSlice";

function Books() {
  const dispatch = useDispatch();
  let bookValues: BooksProps = useSelector(bookRowsSelector);
  let booksList: BooksProps[] = useSelector(booksListSelector);

  const onValChanges = (event: any) => {
    dispatch(
      updateBookValues({
        ...bookValues,
        [event.target.name]: event.target.value,
      })
    );
  };

  const addNewBook = () => {
    dispatch(addBook(bookValues));
    dispatch(closeModal());
  };

  const deleteRow = (id: GridRowId) => {
    dispatch(removeBook({ id, booksList }));
  };

  const bookCol: GridColDef[] = [
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
            className="text-[#474862] dark:text-white"
          >
            {params.value}
          </Typography>
        );
      },
    },
    {
      field: "author",
      headerName: "Author",
      width: 300,
      editable: true,
      renderCell: (params) => {
        return (
          <Typography
            variant="caption"
            component="p"
            className="text-[#474862] dark:text-white"
          >
            {params.value}
          </Typography>
        );
      },
    },
    {
      field: "editor",
      headerName: "Editor",
      type: "string",
      width: 300,
      editable: true,
      renderCell: (params) => {
        return (
          <Typography
            variant="caption"
            component="p"
            className="text-[#474862] dark:text-white"
          >
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
          <Typography
            variant="caption"
            component="p"
            className="text-[#474862] dark:text-white"
          >
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
          <Typography
            variant="caption"
            component="p"
            className="text-[#474862] dark:text-white"
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
      width: 150,
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => deleteRow(id)}
            color="inherit"
            className="dark:text-white"
          />,
        ];
      },
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Box className="flex justify-end my-4">
        <CustomButton title="Add" functionClick={() => dispatch(openModal())}>
          <AddCircleOutlinedIcon className="text-[#474862] dark:text-white group-hover:text-white ease-in-out z-10" />
        </CustomButton>
      </Box>
      <CustomModal
        input={bookValues}
        onValChanges={onValChanges}
        addFunction={addNewBook}
      />
      <Table
        rows={booksList}
        // setRows={setBooksList}
        table="books"
        columns={bookCol}
      />
    </Box>
  );
}

export default Books;
