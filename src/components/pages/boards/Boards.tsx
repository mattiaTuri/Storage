import { Card, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CustomButton from "../../shared/CustomButton";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import CustomModal from "../../feature/storage/CustomModal";
import ItemsField from "../../feature/boards/CardFields";
import { useSelector } from "react-redux";
import { modalsSelector } from "../../../store/modals/selector";
import { useDispatch } from "react-redux";
import { setAddItemsModalVisibility } from "../../../store/modals/modalsSlice";
import { boardsItemsSelector } from "../../../store/boardsItems/selector";
import {
  addItem,
  editItemPos,
  getItemsList,
} from "../../../controller/boardsApi";
import CardBoards from "../../feature/boards/CardBoards";

function Boards() {
  const { t } = useTranslation();
  const boardsItems = useSelector(boardsItemsSelector);
  const modals = useSelector(modalsSelector);
  const dispatch = useDispatch();
  let booksBoardCol: any = null;

  const initialItemValues: any = {
    id: "",
    title: "",
    author: "",
    genre: "",
    column: "new",
    row: 0,
    reading_year: "",
    rating: 0,
  };

  const [itemValues, setItemValues] = useState<any>(initialItemValues);
  const [columns, setColumns] = useState<any>();

  useEffect(() => {
    booksBoardCol = {
      new: {
        id: "new",
        colName: t("new"),
        books: boardsItems.items.filter((elem: any) => elem.column === "new"),
      },
      active: {
        id: "active",
        colName: t("active"),
        books: boardsItems.items.filter(
          (elem: any) => elem.column === "active"
        ),
      },
      complete: {
        id: "complete",
        colName: t("complete"),
        books: boardsItems.items.filter(
          (elem: any) => elem.column === "complete"
        ),
      },
    };
    setColumns(booksBoardCol);
  }, [boardsItems.items]);

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) return;

    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];

    //If i moved the element in the same column
    if (start === end) {
      const column = columns[source.droppableId];
      const newBooks = JSON.parse(JSON.stringify(column.books));
      const [removed] = newBooks.splice(source.index, 1);
      newBooks.splice(destination.index, 0, removed);

      for (let i = 0; i < newBooks.length; i++) {
        newBooks[i].row = i;
      }

      setColumns({
        ...columns,
        [source.droppableId]: { ...column, books: newBooks },
      });
      dispatch(editItemPos(newBooks));
      dispatch(getItemsList());
    } else {
      const sourceList = start.books.filter(
        (elem: any, index: number) => index !== source.index
      );

      const destinationList = end.books;
      destinationList.splice(destination.index, 0, start.books[source.index]);

      const newSourceList = JSON.parse(JSON.stringify(sourceList));
      const newDestinationList = JSON.parse(JSON.stringify(destinationList));

      const column1 = {
        id: start.id,
        colName: start.colName,
        books: newSourceList,
      };

      const column2 = {
        id: end.id,
        colName: end.colName,
        books: newDestinationList,
      };

      for (let i = 0; i < column1.books.length; i++) {
        column1.books[i].row = i;
        column1.books[i].column = start.id;
      }

      for (let i = 0; i < column2.books.length; i++) {
        column2.books[i].row = i;
        column2.books[i].column = end.id;
      }

      setColumns({
        ...columns,
        [source.droppableId]: column1,
        [destination.droppableId]: column2,
      });

      const newList = newSourceList.concat(newDestinationList);

      dispatch(editItemPos(newList));
      dispatch(getItemsList());
    }
  };

  const addNewItem = () => {
    const numberOfEl = columns["new"].books.length;
    dispatch(addItem({ itemValues, numberOfEl }));
    setItemValues(initialItemValues);
    dispatch(setAddItemsModalVisibility(false));
  };

  return (
    <Container maxWidth="xl" className="h-full ">
      <Box className="flex flex-col h-full p-10">
        <Box className="text-center lg:text-left pb-10">
          <Typography
            sx={{ fontSize: 25 }}
            variant="h2"
            component="h1"
            color="primary"
          >
            {t("boards").toUpperCase()}
          </Typography>
        </Box>
        <Box className="h-full flex flex-col gap-4 overflow-hidden">
          <Box>
            <CustomButton
              id="btnAddNewItem"
              title={t("add")}
              functionClick={() => dispatch(setAddItemsModalVisibility(true))}
            >
              <AddCircleOutlinedIcon
                color="secondary"
                className="group-hover:text-white ease-in-out z-10"
              />
            </CustomButton>
          </Box>
          <CustomModal
            title={t("add_new_item")}
            btnId="btnAddItem"
            btnTitle={t("save")}
            btnFunction={addNewItem}
            open={modals.addItemsModal.visibility}
            initialValues={initialItemValues}
            setValues={setItemValues}
            closeFunction={() => dispatch(setAddItemsModalVisibility(false))}
          >
            <ItemsField itemValues={itemValues} setItemValues={setItemValues} />
          </CustomModal>
          <Card className="grid grid-cols-3 gap-10 h-full p-4">
            <DragDropContext onDragEnd={handleOnDragEnd}>
              {columns != null &&
                Object.entries(columns).map(([columnId, col]: any) => {
                  return (
                    <Box
                      key={columnId}
                      className="flex flex-col overflow-y-scroll"
                    >
                      <Box className="border-b">
                        <Typography component="p">{col.colName}</Typography>
                      </Box>
                      <Droppable droppableId={columnId} key={columnId}>
                        {(provided) => (
                          <Box
                            className="flex flex-col items-center"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            sx={{
                              height: "100%",
                              backgroundColor: "background.default",
                              borderRadius: "4px",
                            }}
                          >
                            {col.books.length > 0 &&
                              col.books.map((book: any, index: number) => {
                                return (
                                  <CardBoards
                                    key={index}
                                    book={book}
                                    index={index}
                                  />
                                );
                              })}
                            {provided.placeholder}
                          </Box>
                        )}
                      </Droppable>
                    </Box>
                  );
                })}
            </DragDropContext>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}

export default Boards;
