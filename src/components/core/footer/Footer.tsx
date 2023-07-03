import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function Footer() {
  return (
    <footer>
      <Container id="topbar" maxWidth="xl" className="h-full">
        <Box className="flex justify-center items-center h-full">
          <Typography component="span" className="text-[#474862]">
            © 2023 Website made by Turina Mattia
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}

export default Footer;
