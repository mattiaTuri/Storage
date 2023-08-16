import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import StorageTab from "../../feature/storage/StorageTab";
import { useDispatch, useSelector } from "react-redux";
import { bookCols } from "../../feature/storage/books/BookCols";
import { closeModal } from "../../../store/modal/modalSlice";
import { booksSelector } from "../../../store/books/selector";
import { resourcesSelector } from "../../../store/resources/selector";
import { resourceCol } from "../../feature/storage/resources/ResourcesCols";
import { BooksProps } from "../../../models/Book";
import { addBook } from "../../../controller/booksApi";
import { ResourcesProps } from "../../../models/Resource";
import { addResource } from "../../../controller/resourcesApi";
import { Link, useLocation } from "react-router-dom";

function Storage() {
  const books = useSelector(booksSelector);
  const resources = useSelector(resourcesSelector);
  const [bookValues, setBookValues] = useState<BooksProps>({
    id: "",
    title: "",
    author: "",
    editor: "",
    genre: "",
    pages: 0,
  });
  const [resourceValues, setResourceValues] = useState<ResourcesProps>({
    id: "",
    title: "",
    link: "",
    short_description: "",
    tag: "",
  });

  const [tabValue, setTabValue] = useState<string>("books");
  const dispatch = useDispatch();
  let { pathname } = useLocation();

  useEffect(() => {
    pathname = pathname.replace("/storage/", "");
    setTabValue(pathname);
  }, []);

  const TabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  const onBookValChanges = (event: any) => {
    setBookValues({ ...bookValues, [event.target.name]: event.target.value });
  };

  const onResourceValChanges = (event: any) => {
    setResourceValues({
      ...resourceValues,
      [event.target.name]: event.target.value,
    });
  };

  const addNewBook = () => {
    dispatch(addBook(bookValues));
    dispatch(closeModal());
  };

  const addNewResource = () => {
    dispatch(addResource(resourceValues));
    dispatch(closeModal());
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
            <StorageTab
              values={bookValues}
              onValChanges={onBookValChanges}
              addFunctionRow={addNewBook}
              idModalBtn="btnAddBook"
              tableCols={bookCols}
              tableRows={books.booksList}
            />
          </TabPanel>
          <TabPanel
            id="resources"
            value="resources"
            sx={{ padding: "initial" }}
            className="h-full"
          >
            <StorageTab
              values={resourceValues}
              onValChanges={onResourceValChanges}
              addFunctionRow={addNewResource}
              idModalBtn="btnAddResource"
              tableCols={resourceCol}
              tableRows={resources.resourcesList}
            />
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
}

export default Storage;
