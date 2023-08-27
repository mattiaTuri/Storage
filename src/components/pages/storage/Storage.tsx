import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import BookTab from "../../feature/storage/books/BookTab";
import ResourceTab from "../../feature/storage/resources/ResourceTab";
import { useDispatch, useSelector } from "react-redux";
import { storageTabSelector } from "../../../store/storageTab/selector";
import { changeTab } from "../../../store/storageTab/storageTabSlice";
import { useTranslation } from "react-i18next";

function Storage() {
  const tabValue = useSelector(storageTabSelector);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const TabChange = (event: React.SyntheticEvent, newValue: string) => {
    dispatch(changeTab(newValue));
  };

  return (
    <Container maxWidth="xl" className="h-screen lg:h-full">
      <Box className="p-10 h-full flex flex-col">
        <Box className="text-center lg:text-left pb-10">
          <Typography
            color="primary"
            sx={{ fontSize: 25 }}
            variant="h2"
            component="h1"
          >
            {t("storage").toUpperCase()}
          </Typography>
        </Box>
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={TabChange} value="">
              <Tab
                label={
                  <Typography color="text.primary" component="span">
                    {t("books")}
                  </Typography>
                }
                value="books"
              />
              <Tab
                label={
                  <Typography color="text.primary" component="span">
                    {t("resources")}
                  </Typography>
                }
                value="resources"
              />
            </TabList>
          </Box>
          <TabPanel
            id="books"
            value="books"
            sx={{ padding: "initial" }}
            className="h-full"
          >
            <BookTab />
          </TabPanel>
          <TabPanel
            id="resources"
            value="resources"
            sx={{ padding: "initial" }}
            className="h-full"
          >
            <ResourceTab />
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
}

export default Storage;
