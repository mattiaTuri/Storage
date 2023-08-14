import { Card, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";

function TasksCard() {
  return (
    <Card className="border border-[#434343]">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Tasks
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TasksCard;
