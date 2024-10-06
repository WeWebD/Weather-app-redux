import React from "react";
import ReactECharts from "echarts-for-react";

function PressureChart({ chartData }) {
  const option = {
    tooltip: {
      trigger: "item",
    },
    color: ["rgba(255, 255, 255, 0.7)", "rgba(220, 220, 220, 0.4)"],
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["90%", "110%"],
        center: ["50%", "65%"],
        // adjust the start angle
        startAngle: 180,
        responsive: true,
        maintainAspectRatio: true,
        label: {
          show: false,
        },
        data: [
          //needs to add to 3147 = 100%
          { value: chartData.data1, name: "Pressure" },
          { value: chartData.data2, name: "Clear" },
          {
            // make an record to fill the bottom 50%
            value: 1048 + 735 + 580 + 484 + 300,
            itemStyle: {
              // stop the chart from rendering this piece
              color: "none",
              decal: {
                symbol: "none",
              },
            },
            label: {
              show: false,
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="font-bold">
      <ReactECharts
        style={{ height: "100px", width: "100%", marginBottom: "-30px", marginTop: "15px"}}
        opts={{ renderer: "svg" }}
        option={option}
      />
    </div>
  );
}

export default PressureChart;
