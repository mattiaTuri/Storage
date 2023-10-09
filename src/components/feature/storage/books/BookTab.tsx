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
import { setGenreError, setTitleError } from "../../../../store/errors/errorsSlice";
import Rating from "@mui/material/Rating";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

function BookTab() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const books = useSelector(booksSelector);
  const initialBooksValues: BooksProps = {
    id: "",
    title: "",
    author: "",
    // editor: "",
    genre: "",
    rating: null,
    // pages: 0,
    isRead: false,
  };
  const [bookValues, setBookValues] = useState<BooksProps>(initialBooksValues);
  const [rating, setRating] = useState<number | null>(0);
  const addNewBook = () => {
    const result = books.booksList.find((book) => book.title == bookValues.title)
    if(bookValues.title != "" && !result && bookValues.genre != ""){
      dispatch(addBook(bookValues));
      dispatch(closeModal());
      setBookValues(initialBooksValues);
    }else{
      bookValues.title == "" && dispatch(setTitleError({titleLabel:t("errors.empty_field"), titleErrorVisibility:true}))
      bookValues.genre == "" && dispatch(setGenreError({genreLabel:t("errors.empty_field"), genreErrorVisibility:true}))
    }
  };

  const onValChanges = (event: any) => {
    if(event.target.name == "title"){
      const result = books.booksList.find((book) => book.title == event.target.value)
      if(result){
        dispatch(setTitleError({titleLabel:t("errors.book_present"), titleErrorVisibility:true}))
      }else{     
        if(event.target.value == ""){
          dispatch(setTitleError({titleLabel:t("errors.empty_field"), titleErrorVisibility:true}))
        }else{
          dispatch(setTitleError({titleLabel:"", titleErrorVisibility:false}))
        }
      }
    }
    setBookValues({ ...bookValues, [event.target.name]: event.target.value });
  };

  const onValSelected = (event: any) => {
    dispatch(setGenreError({genreLabel:"", genreErrorVisibility:false}))
    setBookValues({ ...bookValues, [event.target.name]: event.target.value });
  }

  const onValChecked = (event: any) => {
    setBookValues({ ...bookValues, [event.target.name]: event.target.checked });
  };

  const onValRating = (event:any) => {
    setBookValues({ ...bookValues, [event.target.name]: event.target.value });
  }

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
    // {
    //   field: "editor",
    //   headerName: t("editor"),
    //   type: "string",
    //   width: 200,
    //   editable: true,
    //   renderCell: (params) => {
    //     return (
    //       <Typography variant="caption" component="p">
    //         {params.value}
    //       </Typography>
    //     );
    //   },
    // },
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
      field: "rating",
      headerName: t("rating"),
      type: "nuber",
      width: 200,
      editable: false,
      renderCell: (params) => {
        return <Rating value={params.value} precision={0.5} emptyIcon={<StarBorderIcon color="primary"/>} icon={<StarIcon color="primary"/>} color="primary" />;
      },
    },
    // {
    //   field: "pages",
    //   headerName: t("pages"),
    //   type: "number",
    //   width: 150,
    //   headerAlign: "center",
    //   align: "center",
    //   editable: true,
    //   renderCell: (params) => {
    //     return (
    //       <Typography variant="caption" component="p">
    //         {params.value}
    //       </Typography>
    //     );
    //   },
    // },
    {
      field: "read",
      headerName: t("is_read"),
      type: "boolean",
      width: 100,
      headerAlign: "center",
      align: "center",
      editable: true,
      renderCell: (params) => {
        return <Checkbox checked={params.row.isRead} sx={{color:"primary.main"}}/>;
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
        <BooksField onValChanges={onValChanges} onValSelected={onValSelected} onValChecked={onValChecked} onValRating={onValRating}/>
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
