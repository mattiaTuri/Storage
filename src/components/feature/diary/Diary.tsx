import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Calendar from "./Calendar";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import { IconButton } from "@mui/material";
import Task from "./Task";

function Scheduler() {
  return (
    <Box className="h-full flex flex-col justify-evenly gap-4 w-[50%]">
      <Box>
        <Typography component="span" color="#efa135" className="">
          Next event
        </Typography>
        <Task
          checkIcon={false}
          title="Calcetto"
          date="15 Mar - 10:00"
          tag={"Relax"}
          description=""
          task={[]}
        />
      </Box>
      <Card
        className="bg-white flex"
        sx={{
          minWidth: 275,
          borderRadius: "0.5rem",
          width: 400,
        }}
      >
        <CardActions>
          <IconButton>
            <AddBoxRoundedIcon fontSize="large" />
          </IconButton>
        </CardActions>
        <CardContent
          className="w-full flex justify-between items-center"
          sx={{ paddingTop: "24px" }}
        >
          <Typography variant="subtitle1" component="span" color="#efa135">
            Add new task
          </Typography>
        </CardContent>
      </Card>
      <Calendar />
    </Box>
  );
}

export default Scheduler;
