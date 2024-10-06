import React from "react";
import ReactECharts from "echarts-for-react";

const WindComposs = ({direction = 90}) => {
  const option = {
    series: [
      {
        type: "gauge",
        center: ["50%", "50%"], // Center the chart in the container
        radius: "100%", // Adjust the size of the gauge
        min: 0,
        max: 360,
        startAngle: 90, // Angle at which the gauge starts
        endAngle: -270, // Angle at which the gauge ends
        clockwise: true,
        axisLine: {
          lineStyle: {
            width: 0, // Thickness of the gauge outline
          },
        },
        axisTick: {
          length: 2,
          lineStyle: {
            color: "#eee",
            width: 1,
          },
        },
        splitNumber: 4,
        splitLine: {
          length: 5, // Length of the split lines
          lineStyle: {
            color: "#eee", // Color of the split lines
            width: 2,
          },
        },


        pointer: {
          icon: "path://M12.8,0.7l12,40.1H0.7L12.8,0.7z",
          width: 6, // Width of the pointer
          length: "20%",
          offsetCenter: [0, -20],
          itemStyle: {
            color: "auto",
          },
        },

        axisLabel: {
          show: false, // Hide axis labels
        },
        title: {
          offsetCenter: [0, "-10%"],
          fontSize: 10,
        },
        detail: {
          show: true, // Hide detail text
          fontSize: 14,
          fontWeight: 200,
          offsetCenter: [0, 0],
          formatter: function (value) {
            return value + "°";
          },
          color: '#eee',
        },
        data: [{ value: direction }], // Initial value for the gauge
      },
    ],
  };

  return (
    <div className="font-bold">
      <ReactECharts
        style={{ height: "90px", width: "100%", marginTop: "5px" }}
        opts={{ renderer: "svg" }}
        option={option}
      />
    </div>
  );
};

export default WindComposs;
