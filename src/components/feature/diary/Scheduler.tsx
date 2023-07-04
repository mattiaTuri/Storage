import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Calendar from "./Calendar";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

function Scheduler() {
  return (
    <Box className="h-full flex flex-col justify-between">
      <Box>
        <Typography variant="h2" component="h1" color="#0066ff">
          SCHEDULER
        </Typography>
      </Box>
      {/* <Card className="bg-white flex" sx={{ minWidth: 275, borderRadius:"0.5rem", height:"100px", width:"320px"}}>
        <CardActions>
          <IconButton size="small">
            <AddIcon className="text-[#0066ff]"/>
          </IconButton>
        </CardActions>
        <CardContent
          className="w-full flex justify-between items-center"
          sx={{ paddingTop: "24px"}}
        >
          <Typography variant="subtitle1" component="span" color="#0066ff">
            Add new task
          </Typography>
        </CardContent>
      </Card>
      <Calendar /> */}
    </Box>
  );
}

export default Scheduler;
