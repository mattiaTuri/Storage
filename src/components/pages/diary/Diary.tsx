import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import DailyTask from "../../feature/diary/DailyTask";
import Scheduler from "../../feature/diary/Scheduler";

function Diary() {
  return (
    <Box className="h-full">
      <Container maxWidth="xl" className="border h-full">
        <Box className="h-full grid grid-cols-3">
          <Scheduler />
          <DailyTask />
          <Box>Prova</Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Diary;
