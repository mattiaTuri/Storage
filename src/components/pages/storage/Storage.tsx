import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BookTab from "../../feature/storage/books/BookTab";
import ResourceTab from "../../feature/storage/resources/ResourceTab";

function Storage() {
  const [tabValue, setTabValue] = useState<string>("books");
  let { pathname } = useLocation();

  useEffect(() => {
    pathname = pathname.replace("/storage/", "");
    setTabValue(pathname);
  }, []);

  const TabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="xl" className="h-screen lg:h-full">
      <Box className="p-10 h-full flex flex-col">
        <Box className="text-center lg:text-left pb-10">
          <Typography
            color="primary"
            sx={{ fontSize: 40 }}
            variant="h2"
            component="h1"
          >
            STORAGE
          </Typography>
        </Box>
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={TabChange} value="">
              <Tab
                component={Link}
                label={
                  <Typography color="text.primary" component="span">
                    Books
                  </Typography>
                }
                value="books"
                to="books"
              />
              <Tab
                component={Link}
                label={
                  <Typography color="text.primary" component="span">
                    Resources
                  </Typography>
                }
                value="resources"
                to="resources"
              />
            </TabList>
          </Box>
          <TabPanel
            id="books"
            value="books"
            sx={{ padding: "initial" }}
            className="h-full"
          >
            <BookTab/>
          </TabPanel>
          <TabPanel
            id="resources"
            value="resources"
            sx={{ padding: "initial" }}
            className="h-full"
          >
            <ResourceTab/>
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
}

export default Storage;
