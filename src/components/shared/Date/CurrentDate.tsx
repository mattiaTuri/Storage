import Box from "@mui/material/Box"
import { GetCurrentDate } from "./currentDateFunction"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function CurrentDate(){

    const {day, month} = GetCurrentDate()
   
    return (
        <Box className="flex items-center gap-2">
            <Link to="">
                <CalendarMonthIcon className="text-[#474862] dark:text-white"/>
            </Link>
            <Typography variant="subtitle1" component="span" color="#bbc3ce">Today</Typography>    
            <Typography variant="subtitle1" component="span" className="text-[#474862] dark:text-white">{month}</Typography>        
            <Typography variant="subtitle1" component="span" className="text-[#474862] dark:text-white">{day}</Typography>  
        </Box>
    )
}

export default CurrentDate