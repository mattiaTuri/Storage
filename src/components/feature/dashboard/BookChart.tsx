import ReactEChartsCore from "echarts-for-react/lib/core";
import { useSelector } from "react-redux";
import { booksListSelector } from "../../../store/booksList/selector";
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
  TitleComponent,
  DatasetComponent,
} from "echarts/components";
import { useEffect, useState } from "react";
import { BooksProps } from "../../../models/Books";

function BookChart() {
  const bookList = useSelector(booksListSelector);
  echarts.use([PieChart, CanvasRenderer, TooltipComponent]);

  const [data, setData] = useState<any>(null);
  useEffect(() => {
    getChartValue();
  }, []);

  const getChartValue = () => {
    const genresList = bookList.map((elem: BooksProps) => elem.genre);
    const genresListWithoutDuplicate: string[] = [];
    genresList.forEach((elem: string) => {
      if (!genresListWithoutDuplicate.includes(elem)) {
        genresListWithoutDuplicate.push(elem);
      }
    });
    countBookGenres(genresList, genresListWithoutDuplicate);
  };

  const countBookGenres = (
    genresList: string[],
    genresListWithoutDuplicate: string[]
  ) => {
    let a: any[] = [];
    genresListWithoutDuplicate.forEach((genre) => {
      let occurences = 0;
      genresList.forEach((elem: string) => {
        if (genre == elem) occurences++;
      });
      a.push({ name: genre, value: occurences });
    });
    setData(a);
    console.log(a);
  };

  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Genre",
        type: "pie",
        radius: "50%",
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        data: data,
        // { value: 1048, name: "Search Engine" },
        // { value: 735, name: "Direct" },
        // { value: 580, name: "Email" },
        // { value: 484, name: "Union Ads" },
        // { value: 300, name: "Video Ads" },
      },
    ],
  };

  return (
    <>
      <ReactEChartsCore echarts={echarts} option={option} />{" "}
    </>
  );
}

export default BookChart;
