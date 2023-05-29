import { Box, Container, Typography } from "@mui/material";
import SliderTheme from "../../shared/SliderTheme";
import CurrentDate from "../../shared/Date/CurrentDate";

function Topbar() {

  return (
    <Container id="topbar" maxWidth="xl">
      <Box className="flex justify-between items-center">
        <Box></Box>
        <CurrentDate/>
        <SliderTheme />
      </Box>
      
    </Container>
  );
}

export default Topbar;
