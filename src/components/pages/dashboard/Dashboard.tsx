import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import BooksChart from "../../feature/dashboard/charts/BooksChart";
import Card from "@mui/material/Card";
import ResourcesChart from "../../feature/dashboard/charts/ResourcesChart";
import { useSelector } from "react-redux";
import { booksListSelector } from "../../../store/booksList/selector";
import { resourcesListSelector } from "../../../store/resourcesList/selector";
import TasksCard from "../../feature/dashboard/cards/tasks/TasksCard";
import SummaryCard from "../../feature/dashboard/cards/summary/SummaryCard";
import WelcomeCard from "../../feature/dashboard/cards/personal/WelcomeCard";
import Loader from "../../shared/Loader";

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
              <WelcomeCard />
              <SummaryCard />
              <TasksCard />
            </div>
            <div className="flex flex-col gap-10 md:grid grid-cols-2 h-[60%]">
              <Card className="bg-white dark:bg-[#262626] dark:border-[#434343] border grid grid-rows-[100px_auto] relative h-[300px] lg:h-full">
                {bookList.loading ? (
                  <BooksChart />
                ) : (
                  <Box className="absolute w-full h-full flex justify-center items-center">
                    <Loader size={40} color="#0066ff" />
                  </Box>
                )}
              </Card>
              <Card className="bg-white dark:bg-[#262626] dark:border-[#434343] border grid grid-rows-[100px_auto] relative h-[300px] lg:h-full">
                {resourcesList.loading ? (
                  <ResourcesChart resourcesList={resourcesList} />
                ) : (
                  <Box className="absolute w-full h-full flex justify-center items-center">
                    <Loader size={40} color="#0066ff" />
                  </Box>
                )}
              </Card>
            </div>
          </div>
        </Box>
      </Box>
    </Container>
  );
}

export default Dashboard;
