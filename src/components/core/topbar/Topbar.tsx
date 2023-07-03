import { Box, Container, Typography } from "@mui/material";
import CurrentDate from "../../shared/Date/CurrentDate";

function Topbar() {
  return (
    <Box className="hidden lg:block h-20">
      <Container id="topbar" maxWidth="xl">
        <Box className="flex justify-center items-center">
          <CurrentDate />
        </Box>
      </Container>
    </Box>
  );
}

export default Topbar;
