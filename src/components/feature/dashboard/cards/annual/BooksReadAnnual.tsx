import { Box, Card, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CustomNoData from "../../../../shared/CustomNoData";
import { useTranslation } from "react-i18next";
import AnnualBooksChart from "../../charts/AnnualBooksChart";

function BooksReadAnnual({ books }: { books: any }) {
  const { t } = useTranslation();

  return (
    <Card className="border border-[#434343] relative">
      <CardContent className="h-full">
        <Typography variant="h5" component="h2">
          {t("books_read_per_year")}
        </Typography>
        <Box className="relative h-full">
          {books.booksList.length > 0 ? (
            <AnnualBooksChart/>
          ) : (
            <CustomNoData />
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

export default BooksReadAnnual;
