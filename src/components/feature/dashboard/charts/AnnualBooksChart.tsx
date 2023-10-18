import ReactECharts from "echarts-for-react/lib/core";
import { BarChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";

function AnnualBooksChart() {
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

  return <ReactECharts echarts={echarts} option={option} />;
}

export default AnnualBooksChart;
