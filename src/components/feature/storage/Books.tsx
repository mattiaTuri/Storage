import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomButton from "../../shared/CustomButton";
import { Typography } from "@mui/material";
import CustomModal from "./CustomModal";
import { ReactEventHandler, useState } from "react";
import { BooksProps } from "../../../Models/Books";
import { closeModal } from "../../../store/modal/modalSlice";
import { useDispatch } from "react-redux";
import { database } from "../../../firebase";
import { push, ref, set } from "firebase/database";

const columns: GridColDef[] = [
  {
    field: "title",
    headerName: "Title",
    width: 300,
    editable: true,
    renderCell: (params) => {
      return (
        <Typography variant="caption" component="p" className="text-[#474862]">
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
        <Typography variant="caption" component="p" className="text-[#474862]">
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
        <Typography variant="caption" component="p" className="text-[#474862]">
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
        <Typography variant="caption" component="p" className="text-[#474862]">
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
        <Typography variant="caption" component="p" className="text-[#474862]">
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
          //onClick={handleDeleteClick(id)}
          color="inherit"
        />,
      ];
    },
  },
];

const rows = [
  // { id: 1, title: 'Il trono di spade', author: "George R.R. Martin", genre: 'Fantasy', editor: "Mondadori", pages: 35 },
  // { id: 2, title: 'Nevernight: mai dimenticare', author: "Joy Kristoff", genre: 'Fantasy', editor: "Mondadori", pages: 42 },
  // { id: 3, title: 'Il sussurro del destino', author: "Turina Mattia", genre: 'Fantasy', editor: "", pages: 132 },
  // { id: 4, title: 'Il club delle cinque del mattino', author: "", genre: 'Psicology', editor: "", pages: 16 },
  // { id: 5, title: 'Harry Potter: il calice di fuoco', author: "", genre: 'Fantasy', editor: "", pages: 50 },
  // { id: 6, title: 'Detriti', author: "", genre: 'Fantasy', editor: "Lumien", pages: 300 },
  // { id: 7, title: 'Detriti', author: "", genre: 'Fantasy', editor: "Lumien", pages: 300 },
  // { id: 8, title: 'Detriti', author: "", genre: 'Fantasy', editor: "Lumien", pages: 300 },
  // { id: 9, title: 'Detriti', author: "", genre: 'Fantasy', editor: "Lumien", pages: 300 },
  // { id: 10, title: 'Detriti', author: "", genre: 'Fantasy', editor: "Lumien", pages: 300 },
  // { id: 11, title: 'Detriti', author: "", genre: 'Fantasy', editor: "Lumien", pages: 300 },
  // { id: 12, title: 'Detriti', author: "", genre: 'Fantasy', editor: "Lumien", pages: 300 },
];

function Books() {
  const dispatch = useDispatch();
  const [bookValues, setBookValues] = useState<BooksProps>({
    title: "",
    author: "",
    editor: "",
    genre: "",
    pages: 0,
  });
  const [booksList, setBooksList] = useState<BooksProps[]>([]);

  const onValChanges = (event: any) => {
    setBookValues({ ...bookValues, [event.target.name]: event.target.value });
  };

  const addNewBook = (event: any) => {
    const dataObj = (data: any) => [...data, bookValues];
    setBooksList(dataObj);
    console.log(bookValues);
    dispatch(closeModal());
    writeBook(bookValues)
  };

  const writeBook = (data:any) => {
    const {title, author, editor, genre, pages } = data
    set(ref(database, 'books/' + title.replaceAll(" ", "_")), {
        title: title || null,
        author: author || null,
        editor: editor || null,
        genre: genre || null,
        pages: pages || null
    });
  
  };

  return (
    <Box sx={{ height: 630, width: "100%" }}>
      <Box className="flex justify-end my-4">
        <CustomButton title="Add new book" />
        {/* <AddBoxRoundedIcon
            fontSize="medium"
            className="text-[#efa135] group-hover:text-white duration-500 z-10"
          /> */}
      </Box>
      <CustomModal
        onValChanges={onValChanges}
        addNewBook={addNewBook}
      />
      <DataGrid
        rows={booksList.map((book, index) => ({id: index + 1, ...book}))}
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
    </Box>
  );
}

function CustomNoRowsOverlay() {
  return (
    <Box className="h-full flex items-center justify-center">
      <p>No data available</p>
    </Box>
  );
}

export default Books;
