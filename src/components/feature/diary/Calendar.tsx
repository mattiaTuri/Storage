import Box from "@mui/material/Box";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function Calendar() {
  return (
    <Box sx={{borderRadius:"0.5rem", height:"400px", width:"320px"}}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar/>
      </LocalizationProvider>
    </Box>

  );
}

export default Calendar;
