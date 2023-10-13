import { Card, CardContent, Container, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import {DragDropContext, Draggable, DropResult, Droppable} from "react-beautiful-dnd"
import { useState } from "react";

function Boards(){

    const booksBoard:any = {
            "col-1":{
                id:"col-1",
                colName:"New",
                books:[
                    {
                        id:"1", 
                        title:"Il sussurro del destino"
                    }, 
                    {
                        id:"2", 
                        title:"Il trono di spade"
                    }, 
                    {
                        id:"3", 
                        title:"Harry Potter"
                    }, 
                    {
                        id:"4", 
                        title:"Il signore degli anelli"
                    }, 
                    {
                        id:"5", 
                        title:"Nevernight"
                    }, 
                ]
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

    const [columns, setColumns] = useState(booksBoard)

    const handleOnDragEnd = (result:DropResult) => {
        const {destination, source} = result
        console.log(result)

        if(!destination) return

        const column = columns[source.droppableId]
        const newBooks = [...column.books]
        const [removed] = newBooks.splice(source.index, 1)
        newBooks.splice(destination.index, 0, removed)

        setColumns({...columns, [source.droppableId]:{...column, books:newBooks}})
    }

    return (
        <Container maxWidth="xl" className="h-full ">
            <Box className="h-full p-10">
                <Card className="grid grid-cols-3 gap-10 h-full p-4">
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        {Object.entries(columns).map(([columnId, col,]:any) => {
                            return (
                                <Box key={columnId} className="flex flex-col">
                                    <Box className="border-b mb-8">
                                        <Typography component="p">{col.colName}</Typography>
                                    </Box>
                                    <Droppable droppableId={columnId} key={columnId}>
                                        {provided => (
                                            <Box {...provided.droppableProps} ref={provided.innerRef} sx={{height:"100%", backgroundColor:"background.default"}}>
                                                {col.books.map((book:any, index:number) => {
                                                    return (
                                                        <Draggable key={book.id} draggableId={book.id} index={index}>
                                                            {provided => (
                                                                <Card className="mb-8" sx={{display:"flex"}} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                    <Box className="w-6 h-full" sx={{backgroundColor:"primary.main"}}></Box>
                                                                    <CardContent >
                                                                        <Box className="flex gap-2">
                                                                            <Typography component="span">Title:</Typography>
                                                                            <Typography component="p">{book.title}</Typography>
                                                                        </Box>
                                                                        <Box>
                                                                            Data inizio lettura
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
    </Container>)
}

export default Boards