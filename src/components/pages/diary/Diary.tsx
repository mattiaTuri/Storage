import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import DailyTasks from "../../feature/diary/DailyTasks";
import Scheduler from "../../feature/diary/Scheduler";

function Diary() {
  return (
    <Box className="h-full">
      <Container maxWidth="xl" className="border h-full">
        <Box className="h-full flex">
          <Scheduler />
          <DailyTasks />
        </Box>
      </Container>
    </Box>
  );
}

export default Diary;
