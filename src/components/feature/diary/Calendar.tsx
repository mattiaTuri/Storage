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
    <Box>
      <Card className="bg-white flex" sx={{ minWidth: 275 }}>
        <CardContent
          className="w-full flex justify-between"
          sx={{ paddingTop: "24px" }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Calendar;
