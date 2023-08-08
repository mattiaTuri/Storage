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

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
      <Container maxWidth="xl" className="h-screen lg:h-full">
        <Box className="p-10 h-full flex flex-col">
          <Box className="text-center lg:text-left pb-10">
            <Typography
              sx={{ fontSize: 40 }}
              variant="h2"
              component="h1"
              color="#efa135"
            >
              STORAGE
            </Typography>
          </Box>
          <TabContext value={value}>
            <Box
              sx={{ borderBottom: 1, borderColor: "divider" }}
              className="border-[#252627] dark:border-white"
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Books" value="1" />
                <Tab label="Resources" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ padding: "initial" }} className="h-full">
              <Books />
            </TabPanel>
            <TabPanel value="2" sx={{ padding: "initial" }} className="h-full">
              <Resources />
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
  );
}

export default Storage;
