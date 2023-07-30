import Box from "@mui/material/Box";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowId,
} from "@mui/x-data-grid";
import CustomButton from "../../shared/CustomButton";
import { Typography } from "@mui/material";
import CustomModal from "./CustomModal";
import { useEffect, useState } from "react";
import { BooksProps } from "../../../models/Books";
import { closeModal } from "../../../store/modal/modalSlice";
import { useDispatch } from "react-redux";
import { database } from "../../../firebase";
import { child, get, getDatabase, ref, remove, set } from "firebase/database";
import Table from "./Table";
import { bookCol } from "./BookCol";
import DeleteIcon from "@mui/icons-material/Delete";

function Books() {
  const dispatch = useDispatch();
  const [booksList, setBooksList] = useState<BooksProps[]>([]);
  const [bookValues, setBookValues] = useState<BooksProps>({
    id: "",
    title: "",
    author: "",
    editor: "",
    genre: "",
    pages: 0,
  });

  const onValChanges = (event: any) => {
    setBookValues({ ...bookValues, [event.target.name]: event.target.value });
  };

  const addNewBook = (event: any) => {
    bookValues.id = bookValues.title.replaceAll(" ", "_");
    const dataObj = (data: any) => [...data, bookValues];
    setBooksList(dataObj);
    dispatch(closeModal());
    writeBook(bookValues);
  };

  const deleteRow = (id: GridRowId) => {
    setBooksList(booksList.filter((row) => row.id != id));

    remove(ref(database, "books/" + id));
  };

  const writeBook = (data: any) => {
    const { id, title, author, editor, genre, pages } = data;
    set(ref(database, "books/" + id), {
      id: id,
      title: title || null,
      author: author || null,
      editor: editor || null,
      genre: genre || null,
      pages: pages || null,
    });
  };

  const getId = () => {
    return booksList.length + 1;
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
            className="text-[#474862]"
          >
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
          <Typography
            variant="caption"
            component="p"
            className="text-[#474862]"
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
            className="text-[#474862]"
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
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <Typography
            variant="caption"
            component="p"
            className="text-[#474862]"
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
            className="text-[#474862]"
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
          />,
        ];
      },
    },
  ];

  return (
    <Box sx={{ height: 630, width: "100%" }}>
      <Box className="flex justify-end my-4">
        <CustomButton title="Add new book" />
      </Box>
      <CustomModal onValChanges={onValChanges} addNewBook={addNewBook} />
      <Table
        list={booksList}
        setList={setBooksList}
        table="books"
        columns={bookCol}
      />
    </Box>
  );
}

export default Books;
