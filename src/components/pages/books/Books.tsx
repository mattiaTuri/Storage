import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Books() {
  return (
    <Box className="h-full">
      <Container maxWidth="xl" className="border h-full">
        <Box>
          <Box>
            <Typography variant="h2" component="h1" color="#0066ff">
              BOOKS
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Books;
