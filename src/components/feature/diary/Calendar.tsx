import Box from "@mui/material/Box";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

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
