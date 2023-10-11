import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ResourcesChart from "../../feature/dashboard/charts/ResourcesChart";
import { useSelector } from "react-redux";
import { booksSelector } from "../../../store/books/selector";
import { resourcesSelector } from "../../../store/resources/selector";
import BooksReadAnnual from "../../feature/dashboard/cards/tasks/BooksReadAnnual";
import SummaryCard from "../../feature/dashboard/cards/summary/SummaryCard";
import WelcomeCard from "../../feature/dashboard/cards/personal/WelcomeCard";
import Loader from "../../shared/Loader";
import { useTranslation } from "react-i18next";
import BookChart from "../../feature/dashboard/charts/BooksChart";

function Dashboard() {
  const { t } = useTranslation();
  const books = useSelector(booksSelector);
  const resources = useSelector(resourcesSelector);

  return (
    <Container maxWidth="xl" className="h-full ">
      <Box className="flex flex-col h-full p-10">
        <Box className="text-center lg:text-left pb-10">
          <Typography
            sx={{ fontSize: 25 }}
            variant="h2"
            component="h1"
            color="primary"
          >
            {t("dashboard").toUpperCase()}
          </Typography>
        </Box>
        <Box className="h-full">
          <div className="flex flex-col gap-10 h-full">
            <div className="flex flex-col gap-10 md:grid grid-cols-3 h-[40%]">
              <WelcomeCard />
              <SummaryCard />
              <BooksReadAnnual books={books} />
            </div>
            <div className="flex flex-col gap-10 md:grid grid-cols-2 h-[60%]">
              <BookChart books={books} />
              <ResourcesChart resources={resources} />
            </div>
          </div>
        </Box>
      </Box>
    </Container>
  );
}

export default Dashboard;
