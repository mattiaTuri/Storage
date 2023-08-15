import { Box, Card, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CustomNoData from "../../../../shared/CustomNoData";

function TasksCard() {
  return (
    <Card className="border border-[#434343]">
      <CardContent className="h-full">
        <Typography gutterBottom variant="h5" component="h2">
          Tasks
        </Typography>
        <Box className="h-full flex items-center justify-center">
          <CustomNoData />
        </Box>
      </CardContent>
    </Card>
  );
}

export default TasksCard;
