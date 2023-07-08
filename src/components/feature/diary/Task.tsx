import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { IconButton, Chip } from "@mui/material";
import { useState } from "react";

interface TaskProps {
  checkIcon: boolean;
  title: string;
  date: string;
  tag: string;
  description: string;
  task: string[];
}

function Task({ checkIcon, title, date, tag, description, task }: TaskProps) {
  const [isTaskCompleted, setCompleteTask] = useState<boolean>(false);

  const completeTask = () => {
    const tt = document.getElementById(title)!;

    if (isTaskCompleted) {
      setCompleteTask(false);
      tt.style.background = "transparent";
      tt.style.width = "0%";
    } else {
      setCompleteTask(true);
      tt.style.width = "100%";
      tt.style.background = "#efa135";
    }
  };

  return (
    <Box className={`flex ${checkIcon && "p-4"}`}>
      {checkIcon && (
        <IconButton className="h-max" onClick={() => completeTask()}>
          {isTaskCompleted ? <CheckCircleIcon /> : <CircleOutlinedIcon />}
        </IconButton>
      )}
      <Card
        className="flex relative"
        sx={{
          heigth: "max-content",
          width: 400,
          borderRadius: "0.5rem",
          backgroundColor: "white",
        }}
      >
        <Box
          id={title}
          className="absolute h-full w-10 bg-red-50 duration-300"
        ></Box>
        <CardActions sx={{ alignItems: "flex-start", paddingTop: "12px" }}>
          <SportsSoccerIcon fontSize="large" className="text-[#efa135]" />
        </CardActions>
        <CardContent
          className="w-full flex flex-col justify-between gap-4"
          sx={{ paddingBottom: "16px !important" }}
        >
          <Box className="flex justify-between items-center">
            <Typography variant="subtitle1" component="span" color="#efa135">
              {title}
            </Typography>
            <Typography variant="subtitle2" component="p" color="#efa135">
              {date}
            </Typography>
          </Box>
          {tag && (
            <Box>
              <Chip
                label={tag}
                sx={{ backgroundColor: "#efa135", color: "white" }}
              />
            </Box>
          )}
          {description && (
            <Box>
              <Typography variant="subtitle2" component="p">
                {description}
              </Typography>
            </Box>
          )}
          {task.length > 0 && (
            <Box>
              <ul className="list-inside">
                {task.map((elem: string, index: number) => {
                  return (
                    <li key={index}>
                      <Typography variant="subtitle2" component="p">
                        {elem}
                      </Typography>
                    </li>
                  );
                })}
              </ul>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default Task;
