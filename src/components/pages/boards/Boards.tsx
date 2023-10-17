import { Card, CardContent, Container, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import {DragDropContext, Draggable, DropResult, Droppable} from "react-beautiful-dnd"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CustomButton from "../../shared/CustomButton";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import CustomModal from "../../feature/storage/CustomModal";
import ItemsField from "../../feature/boards/ItemsField";
import { useSelector } from "react-redux";
import { modalsSelector } from "../../../store/modals/selector";
import { useDispatch } from "react-redux";
import { setAddItemsModalVisibility } from "../../../store/modals/modalsSlice";
import { boardsItemsSelector } from "../../../store/boardsItems/selector";
import { addItem, getItemsList } from "../../../controller/boardsApi";

function Boards(){

    const { t } = useTranslation();
    const boardsItems = useSelector(boardsItemsSelector)
    const modals = useSelector(modalsSelector)
    const dispatch = useDispatch()
    let booksBoardCol:any = null;

    const initialItemValues: any = {
        id: "",
        title: "",
        author: "",
        genre: "",
      };

    const [itemValues, setItemValues] = useState<any>(initialItemValues)
    const [columns, setColumns] = useState<any>(booksBoardCol)

    useEffect(() => {
        console.log("ok")
        booksBoardCol = {
            "col-1":{
                id:"col-1",
                colName:"New",
                books: boardsItems.items
            },
            "col-2":{
                id:"col-2",
                colName:"Active",
                books:[]
            },
            "col-3":{
                id:"col-3",
                colName:"Complete",
                books:[]
            }       
        }
        setColumns(booksBoardCol)
    }, [columns])

    const handleOnDragEnd = (result:DropResult) => {
        const {destination, source} = result

        if(!destination) return

        const column = columns[source.droppableId]
        const newBooks = [...column.books]
        const [removed] = newBooks.splice(source.index, 1)
        newBooks.splice(destination.index, 0, removed)

        setColumns({...columns, [source.droppableId]:{...column, books:newBooks}})
    }

    const addNewItem = () => {
        dispatch(addItem(itemValues));
        setItemValues(initialItemValues)
        dispatch(setAddItemsModalVisibility(false))
    }

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
                <Box className="h-full flex flex-col gap-4">
                    <CustomButton id="btnAddNewItem" functionClick={() => dispatch(setAddItemsModalVisibility(true))}>
                        <AddCircleOutlinedIcon color="secondary" className="group-hover:text-white ease-in-out z-10"/>
                    </CustomButton>
                    <CustomModal title={t("add_new_item")} btnId="btnAddItem" btnTitle={t("save")} btnFunction={addNewItem} open={modals.addItemsModal.visibility}>
                        <ItemsField itemValues={itemValues} setItemValues={setItemValues}/>
                    </CustomModal>
                    <Card className="grid grid-cols-3 gap-10 h-full p-4">                   
                        <DragDropContext onDragEnd={handleOnDragEnd}>
                            {columns != null && Object.entries(columns).map(([columnId, col,]:any) => {
                                return (
                                    <Box key={columnId} className="flex flex-col">
                                        <Box className="border-b">
                                            <Typography component="p">{col.colName}</Typography>
                                        </Box>
                                        <Droppable droppableId={columnId} key={columnId}>
                                            {provided => (
                                                <Box className="flex flex-col items-center" {...provided.droppableProps} ref={provided.innerRef} sx={{height:"100%", backgroundColor:"background.default", borderRadius:"4px"}}>
                                                    {col.books.length > 0 && col.books.map((book:any, index:number) => {
                                                        return (
                                                            <Draggable key={book.id} draggableId={book.id} index={index}>
                                                                {provided => (
                                                                    <Card className="my-2 flex w-[90%] border" sx={{borderColor:"primary.main"}} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>                                       
                                                                        <Box className="w-2 h-auto" sx={{backgroundColor:"primary.main"}}></Box>
                                                                        <CardContent className="w-full">
                                                                            <Box className="flex gap-2">
                                                                                <Typography component="span">Title:</Typography>
                                                                                <Typography component="p">{book.title}</Typography>
                                                                            </Box>
                                                                            <Box className="flex gap-2">
                                                                                <Typography component="span">Data inizio lettura:</Typography>
                                                                                <Typography component="p"></Typography>
                                                                            </Box>
                                                                        </CardContent>                                                                                                                                                                                     
                                                                    </Card>
                                                                )}
                                                            </Draggable>
                                                        )
                                                    })}
                                                    {provided.placeholder}
                                                </Box>
                                            )}
                                        </Droppable>
                                    </Box>
                                )
                            })}
                        </DragDropContext>                       
                    </Card>  
                </Box>                                
            </Box>   
    </Container>)
}

export default Boards