import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import StatisticsNumberBox from "./StatisticsNumberBox";
import { useSelector } from "react-redux";
import { booksSelector } from "../../../../../store/books/selector";
import { resourcesSelector } from "../../../../../store/resources/selector";
import { useTranslation } from "react-i18next";

function SummaryCard() {
  const books = useSelector(booksSelector);
  const resources = useSelector(resourcesSelector);
  const { t } = useTranslation();

  return (
    <Card className="border border-[#434343]">
      <CardContent className="flex flex-col justify-center h-full gap-2">
        <Typography gutterBottom variant="h5" component="h2">
          {t("summary")}
        </Typography>
        <StatisticsNumberBox
          title={t("books")}
          tab="books"
          link="storage"
          data={books.booksList.length}
          loading={books.loading}
          primaryColor="#efa135"
          secondaryColor="#ffbf00"
        />
        <StatisticsNumberBox
          title={t("resources")}
          tab="resources"
          link="storage"
          data={resources.resourcesList.length}
          loading={resources.loading}
          primaryColor="#0066ff"
          secondaryColor="#17c0fd"
        />
        <StatisticsNumberBox
          title="Tasks"
          tab=""
          link=""
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
