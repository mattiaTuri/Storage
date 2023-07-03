import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Calendar from "./Calendar";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function Scheduler() {
  return (
    <Box className="h-full flex flex-col justify-between">
      <Box>
        <Typography variant="h2" component="h1" color="#0066ff">
          SCHEDULER
        </Typography>
      </Box>
      <Card className="bg-white flex" sx={{ minWidth: 275 }}>
        <CardActions>
          <Button size="small">
            <AddIcon />
          </Button>
        </CardActions>
        <CardContent
          className="w-full flex justify-between"
          sx={{ paddingTop: "24px" }}
        >
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            [Title]
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            [Date]
          </Typography>
        </CardContent>
      </Card>
      <Calendar />
    </Box>
  );
}

export default Scheduler;
