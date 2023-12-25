import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Draggable } from "react-beautiful-dnd";
import TextBox from "../../shared/TextBox";
import { useTranslation } from "react-i18next";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CustomButton from "../../shared/CustomButton";
import { Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  editItemPos,
  getItemsList,
  removeItem,
} from "../../../controller/boardsApi";
import { useSelector } from "react-redux";
import { boardsItemsSelector } from "../../../store/boardsItems/selector";
import CustomModal from "../storage/CustomModal";
import CardFields from "./CardFields";
import BooksField from "../storage/books/BookFields";
import {
  setGenreError,
  setReadingYearError,
  setTitleError,
} from "../../../store/errors/errorsSlice";
import { booksSelector } from "../../../store/books/selector";
import { addBook } from "../../../controller/booksApi";

function CardBoards({ book, index }: any) {
  const { id, title, author, genre, column } = book;
  const { t } = useTranslation();
  const boardsItems = useSelector(boardsItemsSelector);
  const [openCardMenu, setOpenCardMenu] = useState(null);
  const [bookValues, setBookValues] = useState(book);
  const books = useSelector(booksSelector);
  const open = Boolean(openCardMenu);
  const dispatch = useDispatch();

  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [openSaveModal, setOpenSaveModal] = useState<boolean>(false);
  const openItemMenu = (event: any) => {
    setOpenCardMenu(event.currentTarget);
  };

  const deleteItem = () => {
    dispatch(removeItem({ id, boardsItems }));
    setOpenCardMenu(null);
  };

  const saveEditedBook = () => {
    const book = [bookValues];
    dispatch(editItemPos(book));
    dispatch(getItemsList());
    setOpenCardMenu(null);
    setOpenEditModal(false);
  };

  const saveBookOnTable = () => {
    const result = books.booksList.find(
      (book) => book.title === bookValues.title
    );
    if (
      bookValues.title !== "" &&
      !result &&
      bookValues.genre !== "" &&
      bookValues.reading_year.length === 4
    ) {
      dispatch(addBook(bookValues));
      dispatch(removeItem({ id, boardsItems }));
      dispatch(getItemsList());
      setOpenCardMenu(null);
      setOpenSaveModal(false);
    } else {
      bookValues.title === "" &&
        dispatch(
          setTitleError({
            titleLabel: t("errors.empty_field"),
            titleErrorVisibility: true,
          })
        );
      bookValues.genre === "" &&
        dispatch(
          setGenreError({
            genreLabel: t("errors.empty_field"),
            genreErrorVisibility: true,
          })
        );
      bookValues.reading_year.length !== 4 &&
        dispatch(
          setReadingYearError({
            readingYearLabel: t("errors.digit_year"),
            readingYearErrorVisibility: true,
          })
        );
    }
  };

  const onValChanges = (event: any) => {
    if (event.target.name === "title") {
      const result = books.booksList.find(
        (book) => book.title === event.target.value
      );
      if (result) {
        dispatch(
          setTitleError({
            titleLabel: t("errors.book_present"),
            titleErrorVisibility: true,
          })
        );
      } else {
        if (event.target.value === "") {
          dispatch(
            setTitleError({
              titleLabel: t("errors.empty_field"),
              titleErrorVisibility: true,
            })
          );
        } else {
          dispatch(
            setTitleError({ titleLabel: "", titleErrorVisibility: false })
          );
        }
      }
    }
    setBookValues({ ...bookValues, [event.target.name]: event.target.value });
  };

  const onValSelected = (event: any) => {
    dispatch(setGenreError({ genreLabel: "", genreErrorVisibility: false }));
    setBookValues({ ...bookValues, [event.target.name]: event.target.value });
  };

  const onValChangesYear = (event: any) => {
    const year = event.target.value;
    const regex = /[a-z]/;
    if (!regex.test(year))
      setBookValues({ ...bookValues, [event.target.name]: year });

    if (year.length === 4)
      dispatch(
        setReadingYearError({
          readingYearLabel: t(""),
          readingYearErrorVisibility: false,
        })
      );
  };

  const onValRating = (event: any) => {
    setBookValues({
      ...bookValues,
      [event.target.name]: Number(event.target.value),
    });
  };

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <Card
          className="my-2 flex w-[90%] border flex flex-col relative"
          sx={{ borderColor: "primary.main" }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Box
            className="w-2 h-full absolute"
            sx={{ backgroundColor: "primary.main" }}
          ></Box>
          <Box className="pt-2 px-4 flex flex-col gap-2 lg:flex-row lg:justify-between lg:items-center">
            <Box>
              <CustomButton
                id="btnMenuList"
                functionClick={(e) => openItemMenu(e)}
              >
                <MoreHorizIcon
                  color="secondary"
                  className="group-hover:text-white ease-in-out z-10"
                />
              </CustomButton>
              <Menu
                id="basic-menu"
                anchorEl={openCardMenu}
                open={open}
                onClose={() => setOpenCardMenu(null)}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={() => setOpenEditModal(true)}>
                  {t("edit")}
                </MenuItem>
                <MenuItem onClick={deleteItem}>{t("cancel")}</MenuItem>
                <MenuItem
                  onClick={() => setOpenSaveModal(true)}
                  disabled={column === "complete" ? false : true}
                >
                  {t("save")}
                </MenuItem>
              </Menu>
            </Box>
            <CustomModal
              title={t("edit_book")}
              btnId="btnEditBook"
              btnTitle={t("save")}
              btnFunction={saveEditedBook}
              open={openEditModal}
              initialValues={book}
              setValues={setBookValues}
              closeFunction={() => setOpenEditModal(false)}
            >
              <CardFields
                itemValues={bookValues}
                setItemValues={setBookValues}
              />
            </CustomModal>
            <CustomModal
              title={t("rate_book")}
              btnId="btnRateBook"
              btnTitle={t("save")}
              btnFunction={saveBookOnTable}
              open={openSaveModal}
              initialValues={book}
              setValues={setBookValues}
              closeFunction={() => setOpenSaveModal(false)}
            >
              <BooksField
                bookValues={bookValues}
                onValChanges={onValChanges}
                onValSelected={onValSelected}
                onValChangesYear={onValChangesYear}
                onValRating={onValRating}
              />
            </CustomModal>
            <Typography className="lg:order-first" component="span">
              {title}
            </Typography>
          </Box>
          <CardContent className="w-full">
            <TextBox col={t("author")} row={author} />
            <TextBox col={t("genre")} row={t(`genres.${genre}`)} />
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
}

export default CardBoards;
