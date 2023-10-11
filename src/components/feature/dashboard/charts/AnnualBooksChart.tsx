import ReactECharts from "echarts-for-react/lib/core";
import { BarChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";

function AnnualBooksChart() {
  echarts.use([GridComponent, BarChart, CanvasRenderer]);

  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };

  return <ReactECharts echarts={echarts} option={option} />;
}

export default AnnualBooksChart;
