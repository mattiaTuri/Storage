import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Books from "../../feature/storage/Books";
import Resources from "../../feature/storage/Resources";

function Storage() {
  const [value, setValue] = useState("1");

  const handleChange = (event:React.SyntheticEvent, newValue:string) => {
    setValue(newValue);
  };

  return (
    <Box className="h-full">
      <Container maxWidth="xl" className="border h-full">
        <Box>
          <Box>
            <Typography variant="h2" component="h1" color="#efa135">
              STORAGE
            </Typography>
          </Box>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Books" value="1" />
                <Tab label="Resources" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{padding:"initial"}}><Books/></TabPanel>
            <TabPanel value="2" sx={{padding:"initial"}}><Resources/></TabPanel>
          </TabContext>
        </Box>
      </Container>
    </Box>
  );
}

export default Storage;
