import ReactEChartsCore from "echarts-for-react/lib/core";
import { useSelector } from "react-redux";
import { booksListSelector } from "../../../store/booksList/selector";
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { TooltipComponent, TitleComponent } from "echarts/components";
import { useEffect, useState } from "react";
import { themeSelector } from "../../../store/theme/selector";
import { BooksProps } from "../../../models/Books";

function BookChart() {
  const bookList = useSelector(booksListSelector);
  const theme = useSelector(themeSelector);
  echarts.use([PieChart, CanvasRenderer, TitleComponent, TooltipComponent]);

  const [data, setData] = useState<any>(null);
  useEffect(() => {
    getChartValue();
  }, [data]);

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
    title: {
      text: "Books",
      subtext: "Divided by genre",
      left: "center",
      top: 20,
      textStyle: {
        color: theme === "light" ? "#474862" : "white",
        fontSize: 20,
        fontFamily: "Poppins-Bold",
      },
    },
    color: ["#ffbf00", "#522aa7", "#17c0fd", "#ff0087", "#00C49A"],
    tooltip: {
      textStyle: {
        fontFamily: "Poppins-Regular",
      },
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    label: {
      fontSize: 12,
      fontFamily: "Poppins-Bold",
      color: theme === "light" ? "#474862" : "white",
    },
    series: [
      {
        name: "Genre",
        type: "pie",
        radius: "50%",
        // emphasis: {
        //   itemStyle: {
        //     color: theme === "light" ? "#474862" : "white",
        //     //shadowBlur: 10,
        //     shadowOffsetX: 0,
        //     //shadowColor: "rgba(0, 0, 0, 0.5)",
        //   },
        // },
        data: data,
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
