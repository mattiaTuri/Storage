import Box from "@mui/material/Box";
import CustomButton from "../../../shared/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../../../store/modal/modalSlice";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import CustomModal from "../CustomModal";
import BooksField from "./BookFields";
import Table from "../Table";
import { addBook } from "../../../../controller/booksApi";
import { BooksProps } from "../../../../models/Book";
import { useState } from "react";
import { booksSelector } from "../../../../store/books/selector";
import { useTranslation } from "react-i18next";
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import ActionDeleteBook from "./ActionDeleteBook";
import { GridRowId } from "@mui/x-data-grid";
import BookCard from "./BookCard";
import Chip from "@mui/material/Chip";

function BookTab() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const books = useSelector(booksSelector);
  const initialBooksValues: BooksProps = {
    id: "",
    title: "",
    author: "",
    editor: "",
    genre: "",
    pages: 0,
    isRead: false,
  };
  const [bookValues, setBookValues] = useState<BooksProps>(initialBooksValues);
  const addNewBook = () => {
    dispatch(addBook(bookValues));
    dispatch(closeModal());
    setBookValues(initialBooksValues);
  };

  const onValChanges = (event: any) => {
    setBookValues({ ...bookValues, [event.target.name]: event.target.value });
  };

  const onValChecked = (event: any) => {
    setBookValues({ ...bookValues, [event.target.name]: event.target.checked });
  };

  const bookCols: GridColDef[] = [
    {
      field: "title",
      headerName: t("title"),
      width: 400,
      editable: true,
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
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <Typography variant="caption" component="p">
            {params.value}
          </Typography>
        );
      },
    },
    {
      field: "editor",
      headerName: t("editor"),
      type: "string",
      width: 200,
      editable: true,
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
      width: 200,
      editable: true,
      renderCell: (params) => {
        const genre = params.value;
        return <Chip label={t(`genres.${genre}`)} color="primary" />;
      },
    },
    {
      field: "pages",
      headerName: t("pages"),
      type: "number",
      width: 150,
      headerAlign: "center",
      align: "center",
      editable: true,
      renderCell: (params) => {
        return (
          <Typography variant="caption" component="p">
            {params.value}
          </Typography>
        );
      },
    },
    {
      field: "read",
      headerName: t("is_read"),
      type: "boolean",
      width: 100,
      headerAlign: "center",
      align: "center",
      editable: true,
      renderCell: (params) => {
        return <Checkbox checked={params.row.isRead} sx={{'&.Mui-checked': {
          color: "primary"
        }}}/>;
      },
    },
    {
      field: "actions",
      headerName: t("delete"),
      type: "actions",
      width: 100,
      getActions: ({ id }: { id: GridRowId }) => {
        return [<ActionDeleteBook id={id} />];
      },
    },
  ];

  return (
    <Box sx={{ width: "100%" }} className="flex flex-col h-full">
      <Box className="flex justify-end my-4">
        <CustomButton
          id="btnAddBook"
          title={t("add")}
          functionClick={() => dispatch(openModal())}
        >
          <AddCircleOutlinedIcon
            color="secondary"
            className="group-hover:text-white ease-in-out z-10"
          />
        </CustomButton>
      </Box>
      <CustomModal title={t("add_new_book")} addFunction={addNewBook}>
        <BooksField onValChanges={onValChanges} onValChecked={onValChecked} />
      </CustomModal>
      {window.innerWidth >= 1024 ? (
        <Table rows={books.booksList} cols={bookCols} />
      ) : (
        <BookCard rows={books.booksList} />
      )}
    </Box>
  );
}

export default BookTab;
