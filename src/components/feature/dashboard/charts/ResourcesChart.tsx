import ReactEChartsCore from "echarts-for-react/lib/core";
import { useSelector } from "react-redux";
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { TooltipComponent, TitleComponent } from "echarts/components";
import { useEffect, useState } from "react";
import { ResourcesProps } from "../../../../models/Resource";
import Typography from "@mui/material/Typography";
import CustomNoData from "../../../shared/CustomNoData";
import { getChartValue } from "./chartsFunctions";
import { userSelector } from "../../../../store/user/selector";
import { useTranslation } from "react-i18next";

function ResourcesChart({
  resourcesList,
}: {
  resourcesList: ResourcesProps[];
}) {
  const user = useSelector(userSelector);
  echarts.use([PieChart, CanvasRenderer, TitleComponent, TooltipComponent]);
  const { t } = useTranslation();
  const [chartData, setChartData] = useState<any>(null);
  useEffect(() => {
    const tagList = resourcesList.map((elem: ResourcesProps) => elem.tag);
    setChartData(getChartValue(tagList));
  }, [resourcesList]);

  const option = {
    title: {
      // text: "Resources statistics",
      // subtext: "Divided by tag",
      left: "center",
      top: 20,
      textStyle: {
        color: user.currentUser.theme === "light" ? "#474862" : "white",
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
      color: user.currentUser.theme === "light" ? "#474862" : "white",
    },
    series: [
      {
        name: "Tag",
        type: "pie",
        radius: "50%",
        data: chartData,
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Typography component="span" gutterBottom>
        {t("resources")}
        </Typography>
        <Typography component="p">{t("divided_by_tag")}</Typography>
      </div>
      <div className="relative">
        {resourcesList.length > 0 ? (
          <ReactEChartsCore echarts={echarts} option={option} />
        ) : (
          <CustomNoData />
        )}
      </div>
    </>
  );
}

export default ResourcesChart;
