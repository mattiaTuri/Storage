import ReactECharts from "echarts-for-react/lib/core";
import { BarChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { useSelector } from "react-redux";
import { booksSelector } from "../../../../store/books/selector";
import { getLastFiverYears, getReadingBooksValues } from "./chartsFunctions";
import { useState } from "react";

function AnnualBooksChart() {
  echarts.use([GridComponent, BarChart, CanvasRenderer]);

  const books = useSelector(booksSelector)
  const [years] = useState<string[]>(getLastFiverYears())

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
      data: years,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: getReadingBooksValues(books.booksList, years),
        type: "bar",
      },
    ],
  };

  return <ReactECharts echarts={echarts} option={option} />;
}

export default AnnualBooksChart;
