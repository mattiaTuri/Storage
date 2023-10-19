import Box from "@mui/material/Box";
import CustomButton from "../../../shared/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import CustomModal from "../CustomModal";
import BooksField from "./BookFields";
import { addBook, filterBooks, getBooksList } from "../../../../controller/booksApi";
import { BooksProps } from "../../../../models/Book";
import { useState } from "react";
import { booksSelector } from "../../../../store/books/selector";
import { useTranslation } from "react-i18next";
import BookCard from "./BookCard";
import { setGenreError, setReadingYearError, setTitleError } from "../../../../store/errors/errorsSlice";
import TableFilter from "../TableFilter";
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import { setAddBooksModalVisibility, setFiltersBooksModalVisibility } from "../../../../store/modals/modalsSlice";
import { modalsSelector } from "../../../../store/modals/selector";
import BooksTable from "./BooksTable";

function BookTab() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const books = useSelector(booksSelector);
  const modals = useSelector(modalsSelector)
  const [multipleGenre, setMultipleGenre] = useState<string[]>([]);
  const initialBooksValues: BooksProps = {
    id: "",
    title: "",
    author: "",
    genre: "",
    rating: 0,
    reading_year:"",
  };
  const [bookValues, setBookValues] = useState<BooksProps>(initialBooksValues);

  const addNewBook = () => {
    const result = books.booksList.find((book) => book.title === bookValues.title)
    if(bookValues.title !== "" && !result && bookValues.genre !== "" && bookValues.reading_year.length === 4){
      dispatch(addBook(bookValues));
      dispatch(setAddBooksModalVisibility(false))
      setBookValues(initialBooksValues);
    }else{
      bookValues.title === "" && dispatch(setTitleError({titleLabel:t("errors.empty_field"), titleErrorVisibility:true}))
      bookValues.genre === "" && dispatch(setGenreError({genreLabel:t("errors.empty_field"), genreErrorVisibility:true}))
      bookValues.reading_year.length !== 4 && dispatch(setReadingYearError({readingYearLabel:t("errors.digit_year"), readingYearErrorVisibility:true}))
    }
  };

  const onValChanges = (event: any) => {
    if(event.target.name === "title"){
      const result = books.booksList.find((book) => book.title === event.target.value)
      if(result){
        dispatch(setTitleError({titleLabel:t("errors.book_present"), titleErrorVisibility:true}))
      }else{     
        if(event.target.value === ""){
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

  const onValChangesYear = (event: any) => {
    const year = event.target.value
    const regex = /[a-z]/
    if(!regex.test(year)) setBookValues({ ...bookValues, [event.target.name]: year });

    if(year.length === 4) dispatch(setReadingYearError({readingYearLabel:t(""), readingYearErrorVisibility:false}))
  };

  const onValRating = (event:any) => {
    setBookValues({ ...bookValues, [event.target.name]: Number(event.target.value) });
  }

  const ApplyFilter = () => {
    const genres:any = document.querySelector("#genre-filter + input")
    dispatch(filterBooks({genres, books}))
    dispatch(setFiltersBooksModalVisibility(false))
  }

  const ClearFilter = () => {
    setMultipleGenre([])
    dispatch(getBooksList())
  }

  return (
    <Box sx={{ width: "100%" }} className="flex flex-col h-full">
      <Box className="flex items-center justify-between my-4">
        <Box className="flex gap-4">
          <CustomButton id="filter" functionClick={() => dispatch(setFiltersBooksModalVisibility(true))}>
            <FilterListIcon color="secondary" className="z-10 ease-in-out group-hover:text-white"/>
          </CustomButton>
          <CustomButton id="clearFilter" functionClick={() => ClearFilter()}>
            <FilterListOffIcon color="secondary" className="z-10 ease-in-out group-hover:text-white"/>
          </CustomButton>
        </Box>
        <CustomButton
          id="btnAddBook"
          title={t("add")}
          functionClick={() => dispatch(setAddBooksModalVisibility(true))}
        >
          <AddCircleOutlinedIcon
            color="secondary"
            className="group-hover:text-white ease-in-out z-10"
          />
        </CustomButton>
      </Box>
      <CustomModal title={t("filters")} btnId="btnApplyFilter" btnTitle={t("apply_filters")} btnFunction={ApplyFilter} open={modals.filtersBooksModal.visibility} initialValues={[]} setValues={setMultipleGenre}>
        <TableFilter genreName={multipleGenre} setGenreName={setMultipleGenre}/>
      </CustomModal>
      <CustomModal title={t("add_new_book")} btnId="btnAddBook" btnTitle={t("save")} btnFunction={addNewBook} open={modals.addBooksModal.visibility} initialValues={initialBooksValues} setValues={setBookValues}>
        <BooksField bookValues={bookValues} onValChanges={onValChanges} onValSelected={onValSelected} onValChangesYear={onValChangesYear} onValRating={onValRating}/>
      </CustomModal>
      {window.innerWidth >= 768 ? (
        <BooksTable rows={books.booksList} />
      ) : (
        <BookCard rows={books.booksList} />
      )}
    </Box>
  );
}

export default BookTab;