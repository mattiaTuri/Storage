import Box from "@mui/material/Box";
import { GetCurrentDate } from "../../shared/Date/currentDateFunction";

function DailyTask() {
  const { day, dayOfTheWeek, month } = GetCurrentDate();

  return <Box className="h-full">{dayOfTheWeek}</Box>;
}

export default DailyTask;
