import Box from "@mui/material/Box";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";

function Calendar() {
  return (
    <Box
      sx={{ width: 400, height: 380, borderRadius: "0.5rem" }}
      className="bg-white"
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          className=" h-full"
          showDaysOutsideCurrentMonth
          slots={{
            leftArrowIcon: ArrowCircleLeftRoundedIcon,
            rightArrowIcon: ArrowCircleRightRoundedIcon,
          }}
        />
      </LocalizationProvider>
    </Box>
  );
}

export default Calendar;
