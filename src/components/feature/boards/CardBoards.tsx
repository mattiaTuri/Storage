import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { Draggable } from "react-beautiful-dnd"
import TextBox from "../../shared/TextBox"
import { useTranslation } from "react-i18next"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CustomButton from "../../shared/CustomButton"
import moment from 'moment'

function CardBoards({book, index}:any){
    const { id, title, author, genre } = book
    const {t} = useTranslation()
    return (
        <Draggable key={id} draggableId={id} index={index}>
            {provided => (
            <Card className="my-2 flex w-[90%] border flex" sx={{borderColor:"primary.main"}} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>                                       
                <Box className="w-2 h-auto" sx={{backgroundColor:"primary.main"}}></Box>
                <CardContent className="w-full">
                    <TextBox col={t("title")} row={title}/>
                    <TextBox col={t("author")} row={author}/>
                    <TextBox col={t("genre")} row={t(`genres.${genre}`)}/>
                    <TextBox col={t("creation_date")} row={moment().format("MMM D YYYY")}/>
                </CardContent>               
                <div className="p-2">
                    <CustomButton id="btnMenuList" functionClick={() => console.log("click")}>
                            <MoreHorizIcon color="secondary" className="group-hover:text-white ease-in-out z-10"/>
                    </CustomButton>
                </div>                                                                                                                                                                                   
        </Card>
        )}
    </Draggable>
    )
}

export default CardBoards