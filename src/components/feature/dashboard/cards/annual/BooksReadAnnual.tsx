import { Box, Card, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CustomNoData from "../../../../shared/CustomNoData";
import { useTranslation } from "react-i18next";
import AnnualBooksChart from "../../charts/AnnualBooksChart";
import Loader from "../../../../shared/Loader";

function BooksReadAnnual({ books }: { books: any }) {
  const { t } = useTranslation();

  return (
    <Card className="border border-[#434343] relative">
      {books.loading ? 
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
      : 
      (<Loader size={40} color="#0066ff" />)
      }
    </Card>
  );
}

export default BooksReadAnnual;
