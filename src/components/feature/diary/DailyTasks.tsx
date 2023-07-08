import Box from "@mui/material/Box";
import { GetCurrentDate } from "../../shared/Date/currentDateFunction";
import { IconButton, Typography } from "@mui/material";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import Task from "./Task";

function DailyTasks() {
  const { day, dayOfTheWeek, month } = GetCurrentDate();

  const task1: string[] = [];
  const task2: string[] = [];
  const task3: string[] = ["Squat x3", "Flessioni x3", "Panca piana x5"];
  const task4: string[] = [];

  return (
    <Box className="h-full flex flex-col items-center w-[50%]">
      <Box className="flex gap-5">
        <Box className="flex flex-col">
          <Typography variant="h6" component="span" className="text-[#474862]">
            {month} 2023
          </Typography>
          <Typography variant="h4" component="span" className="text-[#0066ff]">
            {dayOfTheWeek} {day}
          </Typography>
        </Box>
        <Box className="flex items-end">
          <IconButton className="h-max">
            <ArrowCircleLeftRoundedIcon />
          </IconButton>
          <IconButton className="h-max">
            <ArrowCircleRightRoundedIcon />
          </IconButton>
        </Box>
      </Box>
      <Box>
        <Task
          checkIcon={true}
          title="Sveglia"
          date="7:00"
          tag={""}
          description=""
          task={task1}
        />
        <Task
          checkIcon={true}
          title="Colazione"
          date="7:15"
          tag={"Cibo"}
          description=""
          task={task2}
        />
        <Task
          checkIcon={true}
          title="Attività fisica"
          date="8:00"
          tag={"Corsa"}
          description=""
          task={task3}
        />
        <Task
          checkIcon={true}
          title="Lettura"
          date="10:00"
          tag={"Relax"}
          description=""
          task={task4}
        />
        {/* <Task
          title="Attività fisica"
          date="8:00"
          tag={"calcio"}
          description="Partita di calcio allo stadio comunale"
          task={task4}
        /> */}
      </Box>
    </Box>
  );
}

export default DailyTasks;
