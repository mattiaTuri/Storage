import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import BooksChart from "../../feature/dashboard/charts/BooksChart";
import Card from "@mui/material/Card";
import ResourcesChart from "../../feature/dashboard/charts/ResourcesChart";
import { useSelector } from "react-redux";
import { booksSelector } from "../../../store/books/selector";
import { resourcesSelector } from "../../../store/resources/selector";
import TasksCard from "../../feature/dashboard/cards/tasks/TasksCard";
import SummaryCard from "../../feature/dashboard/cards/summary/SummaryCard";
import WelcomeCard from "../../feature/dashboard/cards/personal/WelcomeCard";
import Loader from "../../shared/Loader";

function Dashboard() {
  const books = useSelector(booksSelector);
  const resources = useSelector(resourcesSelector);

  return (
    <Container maxWidth="xl" className="h-full ">
      <Box className="flex flex-col h-full p-10">
        <Box className="text-center lg:text-left pb-10">
          <Typography
            sx={{ fontSize: 40 }}
            variant="h2"
            component="h1"
            color="primary"
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
              <Card className="border border-[#434343] grid grid-rows-[100px_auto] relative h-[300px] lg:h-full">
                {books.loading ? (
                  <BooksChart booksList={books.booksList} />
                ) : (
                  <Box className="absolute w-full h-full flex justify-center items-center">
                    <Loader size={40} color="#0066ff" />
                  </Box>
                )}
              </Card>
              <Card className="border border-[#434343] grid grid-rows-[100px_auto] relative h-[300px] lg:h-full">
                {resources.loading ? (
                  <ResourcesChart resourcesList={resources.resourcesList} />
                ) : (
                  <div className="absolute w-full h-full flex justify-center items-center">
                    <Loader size={40} color="#0066ff" />
                  </div>
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
