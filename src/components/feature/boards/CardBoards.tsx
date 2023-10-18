import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { Draggable } from "react-beautiful-dnd"
import TextBox from "../../shared/TextBox"

function CardBoards({book, index}:any){
    const { id, title, author } = book
    return (
        <Draggable key={id} draggableId={id} index={index}>
            {provided => (
            <Card className="my-2 flex w-[90%] border" sx={{borderColor:"primary.main"}} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>                                       
            <Box className="w-2 h-auto" sx={{backgroundColor:"primary.main"}}></Box>
            <CardContent className="w-full">
                <TextBox col="Title" row={title}/>
                <TextBox col="Author" row={author}/>
            </CardContent>                                                                                                                                                                                     
        </Card>
        )}
    </Draggable>
    )
}

export default CardBoards