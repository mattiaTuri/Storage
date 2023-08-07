import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import BooksChart from "../../feature/dashboard/BooksChart";
import Card from "@mui/material/Card";
import ResourcesChart from "../../feature/dashboard/ResourcesChart";
import { Avatar, CardContent, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { booksListSelector } from "../../../store/booksList/selector";
import { resourcesListSelector } from "../../../store/resourcesList/selector";
import Loader from "../../shared/Loader";

function Dashboard() {
  const bookList = useSelector(booksListSelector);
  const resourcesList = useSelector(resourcesListSelector);

  return (
    <Container maxWidth="xl" className="h-full ">
      <Box className="flex flex-col h-full p-10">
        <Box className="text-center lg:text-left pb-10 lg:pb-0">
          <Typography
            sx={{ fontSize: 40 }}
            variant="h2"
            component="h1"
            color="#efa135"
          >
            DASHBOARD
          </Typography>
        </Box>
        <Box className="h-full">
          <div className="flex flex-col justify-end gap-10 h-full">
            <div className="flex flex-col gap-10 md:grid grid-cols-3 h-[30%]">
              <Card className="bg-white dark:bg-[#262626] dark:border-[#434343] border">
                <CardContent className="flex justify-between items-center h-full ">
                  <Box>
                    <Typography
                      gutterBottom
                      className="text-[#474862] dark:text-white"
                      variant="h5"
                      component="h2"
                    >
                      Hello Mattia!
                    </Typography>
                    <Typography
                      className="text-[#474862] dark:text-white"
                      component="p"
                    >
                      It is good to see you again
                    </Typography>
                  </Box>

                  <Avatar
                    sx={{ backgroundColor: "#0066ff", height: 120, width: 120 }}
                  >
                    <Typography
                      component="span"
                      className="text-white"
                      sx={{ fontSize: 30 }}
                    >
                      TM
                    </Typography>
                  </Avatar>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-[#262626] dark:border-[#434343] border">
                <CardContent className="text-white flex flex-col gap-2">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className="text-[#474862] dark:text-white"
                  >
                    Summary
                  </Typography>
                  <div className="flex justify-between items-center px-3 bg-[#efa135] rounded-md h-10">
                    <Typography component="p">Books</Typography>
                    <Typography
                      className="bg-[#ffbf00] max-w-max px-4 text-center rounded-md"
                      component="span"
                    >
                      {bookList.loading ? (
                        bookList.books.length
                      ) : (
                        <Loader size={10} color="#efa135"/>
                      )}
                    </Typography>
                  </div>
                  <div className="flex justify-between items-center px-3 bg-[#0066ff] rounded-md h-10">
                    <Typography component="p">Resources</Typography>

                    <Typography
                      className="bg-[#17c0fd] max-w-max px-4 text-center rounded-md"
                      component="span"
                    >
                      {resourcesList.loading ? (
                        resourcesList.resources.length
                      ) : (
                        <Loader size={10} color="#0066ff"/>
                      )}
                    </Typography>
                  </div>
                  <div className="flex justify-between items-center px-3 bg-[#522aa7] rounded-md h-10">
                    <Typography component="p">Tasks</Typography>
                    <Typography
                      className="bg-[#6d39de] max-w-max px-4 text-center rounded-md"
                      component="span"
                    >
                      0
                    </Typography>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-[#262626] dark:border-[#434343] border">
                <CardContent>
                  <Typography
                    gutterBottom
                    className="text-[#474862] dark:text-white"
                    variant="h5"
                    component="h2"
                  >
                    Tasks
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col gap-10 lg:grid grid-cols-2 h-[60%]">
              <Card className="bg-white dark:bg-[#262626] dark:border-[#434343] border">
                <BooksChart />
              </Card>
              <Card className="bg-white dark:bg-[#262626] dark:border-[#434343] border">
                <ResourcesChart resourcesList={resourcesList}/>
              </Card>
            </div>
          </div>
        </Box>
      </Box>
    </Container>
  );
}

export default Dashboard;
