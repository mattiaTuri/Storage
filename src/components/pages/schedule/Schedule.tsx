import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Schedule() {
  return (
    <Container maxWidth="xl" className="h-full">
      <Box className="h-full flex flex-col">
        <Box>
          <Typography variant="h2" component="h1" color="#efa135">
            SCHEDULER
          </Typography>
        </Box>
        {/* <Box className="h-full flex">
          <Diary />
          <DailyTasks />
        </Box> */}
      </Box>
    </Container>
  );
}

export default Schedule;
