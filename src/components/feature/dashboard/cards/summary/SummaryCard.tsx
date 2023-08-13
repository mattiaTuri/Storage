import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import StatisticsNumberBox from "./StatisticsNumberBox";
import { useSelector } from "react-redux";
import { booksSelector } from "../../../../../store/books/selector";
import { resourcesSelector } from "../../../../../store/resources/selector";

function SummaryCard() {
  const books = useSelector(booksSelector);
  const resources = useSelector(resourcesSelector);

  return (
    <Card className="bg-white dark:bg-[#262626] dark:border-[#434343] border">
      <CardContent className="text-white flex flex-col justify-center h-full gap-2">
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className="text-[#474862] dark:text-white"
        >
          Summary
        </Typography>
        <StatisticsNumberBox
          title="Books"
          data={books.booksList.length}
          loading={books.loading}
          primaryColor="#efa135"
          secondaryColor="#ffbf00"
        />
        <StatisticsNumberBox
          title="Resources"
          data={resources.resourcesList.length}
          loading={resources.loading}
          primaryColor="#0066ff"
          secondaryColor="#17c0fd"
        />
        <StatisticsNumberBox
          title="Tasks"
          data={0}
          loading={books.loading}
          primaryColor="#522aa7"
          secondaryColor="#6d39de"
        />
      </CardContent>
    </Card>
  );
}

export default SummaryCard;
