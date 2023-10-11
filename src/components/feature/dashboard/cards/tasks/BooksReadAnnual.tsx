import { Box, Card, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CustomNoData from "../../../../shared/CustomNoData";
import { useTranslation } from "react-i18next";
import { BarChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import ReactECharts from "echarts-for-react/lib/core";

function BooksReadAnnual({ books }: { books: any }) {
  const { t } = useTranslation();

  echarts.use([GridComponent, BarChart, CanvasRenderer]);

  const option = {
    color: "#0066ff",
    tooltip: {
      textStyle: {
        fontFamily: "Poppins-Regular",
      },
      trigger: "item",
    },
    xAxis: {
      type: "category",
      data: ["2019", "2020", "2021", "2022", "2023"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [2, 5, 7, 3, 3],
        type: "bar",
      },
    ],
  };

  return (
    <Card className="border border-[#434343] relative">
      <CardContent>
        <Typography variant="h5" component="h2">
          {t("books_read_per_year")}
        </Typography>
        <Box className="relative">
          {books.booksList.length > 0 ? (
            <ReactECharts
              className="bar-chart"
              echarts={echarts}
              option={option}
            />
          ) : (
            <CustomNoData />
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

export default BooksReadAnnual;
