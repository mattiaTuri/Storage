import ReactEChartsCore from "echarts-for-react/lib/core";
import { useDispatch, useSelector } from "react-redux";
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { TooltipComponent, TitleComponent } from "echarts/components";
import { useEffect, useState } from "react";
import { themeSelector } from "../../../store/theme/selector";
import { resourcesListSelector } from "../../../store/resourcesList/selector";
import { ResourcesProps } from "../../../models/Resources";
import { getResourcesList } from "../../../store/resourcesList/resourcesListSlice";

function ResourcesChart() {
  let resourcesList = useSelector(resourcesListSelector);

  const theme = useSelector(themeSelector);
  echarts.use([PieChart, CanvasRenderer, TitleComponent, TooltipComponent]);

  const [data, setData] = useState<any>(null);
  useEffect(() => {
    getChartValue();
  }, []);

  const getChartValue = () => {
    const tagList = resourcesList.map((elem: ResourcesProps) => elem.tag);
    const tagListWithoutDuplicate: string[] = [];
    tagList.forEach((elem: string) => {
      if (!tagListWithoutDuplicate.includes(elem)) {
        tagListWithoutDuplicate.push(elem);
      }
    });
    countBookGenres(tagList, tagListWithoutDuplicate);
  };

  const countBookGenres = (
    tagList: string[],
    tagListWithoutDuplicate: string[]
  ) => {
    let a: any[] = [];
    tagListWithoutDuplicate.forEach((tag) => {
      let occurences = 0;
      tagList.forEach((elem: string) => {
        if (tag == elem) occurences++;
      });
      a.push({ name: tag, value: occurences });
    });
    setData(a);
  };

  const option = {
    title: {
      text: "Resources",
      subtext: "Divided by tag",
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
        name: "Tag",
        type: "pie",
        radius: "50%",
        data: data,
      },
    ],
  };

  return (
    <>
      <ReactEChartsCore echarts={echarts} option={option} />
    </>
  );
}

export default ResourcesChart;
