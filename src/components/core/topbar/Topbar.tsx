import { Box, Container, Typography } from "@mui/material";
import CurrentDate from "../../shared/Date/CurrentDate";

function Topbar() {
  return (
    <Box className="hidden lg:block h-[10%]">
      <Container id="topbar" maxWidth="xl">
        <Box className="flex justify-between items-center">
          {/* <Typography variant="h2" component="h1" color="#efa135">
            SCHEDULER
          </Typography> */}
          <CurrentDate />
          {/* <Box>Avatar</Box> */}
        </Box>
      </Container>
    </Box>
  );
}

export default Topbar;
