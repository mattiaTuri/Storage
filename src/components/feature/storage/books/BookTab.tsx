import Box from "@mui/material/Box"
import CustomButton from "../../../shared/CustomButton"
import { useDispatch, useSelector } from "react-redux"
import { closeModal, openModal } from "../../../../store/modal/modalSlice"
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import CustomModal from "../CustomModal";
import BooksField from "./BookFields";
import Table from "../Table";
import { addBook } from "../../../../controller/booksApi";
import { BooksProps } from "../../../../models/Book";
import { useState } from "react";
import { bookCols } from "./BookCols";
import { booksSelector } from "../../../../store/books/selector";

function BookTab(){
    const dispatch = useDispatch()
    const books = useSelector(booksSelector)
    const initialBooksValues: BooksProps = { id: "",
    title: "",
    author: "",
    editor: "",
    genre: "",
    pages: 0,
    isRead:false}
    const [bookValues, setBookValues] = useState<BooksProps>(initialBooksValues)

    const addNewBook = () => {
        dispatch(addBook(bookValues));
        dispatch(closeModal());
        setBookValues(initialBooksValues)
      };

    return (
        <Box sx={{ width: "100%" }} className="flex flex-col h-full">
            <Box className="flex justify-end my-4">
                <CustomButton
                id="btnAddBook"
                title="Add"
                functionClick={() => dispatch(openModal())}
                >
                <AddCircleOutlinedIcon
                    color="secondary"
                    className="group-hover:text-white ease-in-out z-10"
                />
                </CustomButton>
            </Box>
            <CustomModal title="Add new book" addFunction={addNewBook}>
                <BooksField bookValues={bookValues} setBookValues={setBookValues}/>
            </CustomModal>
        <Table rows={books.booksList} col={bookCols} />
    </Box>
    )
}

export default BookTab