import ReactEChartsCore from "echarts-for-react/lib/core";
import { useSelector } from "react-redux";
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { TooltipComponent, TitleComponent } from "echarts/components";
import { useEffect, useState } from "react";
import { themeSelector } from "../../../../store/theme/selector";
import { BooksProps } from "../../../../models/Book";
import { Typography } from "@mui/material";
import CustomNoData from "../../../shared/CustomNoData";

function BookChart({ booksList }: { booksList: BooksProps[] }) {
  const theme = useSelector(themeSelector);
  echarts.use([PieChart, CanvasRenderer, TitleComponent, TooltipComponent]);

  const [data, setData] = useState<any>(null);
  useEffect(() => {
    getChartValue();
  }, [booksList]);

  const getChartValue = () => {
    const genresList = booksList.map((elem: BooksProps) => elem.genre);
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
  };

  const option = {
    title: {
      // text: "Books statistics",
      // subtext: "Divided by genre",
      left: "center",
      top: 20,
      textStyle: {
        color: theme === "light" ? "#474862" : "white",
        fontSize: 20,
        fontFamily: "Poppins-Bold",
      },
    },
    color: ["#efa135", "#522aa7", "#0066ff", "#ff0087", "#00C49A", "#17c0fd"],
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
        data: data,
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Typography component="span" gutterBottom>
          Books
        </Typography>
        <Typography component="p">Divided by genre</Typography>
      </div>
      <div className="relative">
        {booksList.length > 0 ? (
          <ReactEChartsCore echarts={echarts} option={option} />
        ) : (
          <CustomNoData />
        )}
      </div>
    </>
  );
}

export default BookChart;
