import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import BooksChart from "../../feature/dashboard/charts/BooksChart";
import Card from "@mui/material/Card";
import ResourcesChart from "../../feature/dashboard/charts/ResourcesChart";
import { Avatar, CardContent } from "@mui/material";
import { useSelector } from "react-redux";
import { booksListSelector } from "../../../store/booksList/selector";
import { resourcesListSelector } from "../../../store/resourcesList/selector";
import TasksCard from "../../feature/dashboard/cards/tasks/TasksCard";
import SummaryCard from "../../feature/dashboard/cards/summary/SummaryCard";

function Dashboard() {
  const bookList = useSelector(booksListSelector);
  const resourcesList = useSelector(resourcesListSelector);

  return (
    <Container maxWidth="xl" className="h-full ">
      <Box className="flex flex-col h-full p-10">
        <Box className="text-center lg:text-left pb-10">
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
          <div className="flex flex-col gap-10 h-full">
            <div className="flex flex-col gap-10 md:grid grid-cols-3 h-[40%]">
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
              <SummaryCard/>
              <TasksCard/>
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
