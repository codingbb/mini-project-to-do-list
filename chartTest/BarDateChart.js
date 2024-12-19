"use client";

import { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import axios from "axios";
// @ts-ignore
import "chartjs-adapter-date-fns";

export default function BarDateChart() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState([]);
  const [timeFrameData, setTimeFrameData] = useState("day");
  const [maxValue, setMaxValue] = useState(20);

  useEffect(() => {
    if (chartRef.current) {
      // console.log(chartRef.current);
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      // 2d 캔버스 컨텍스트를 가져온다.
      const context = chartRef.current.getContext("2d");

      const day = [
        { x: new Date("2023-01-01"), y: 18 },
        { x: new Date("2023-01-02"), y: 12 },
        { x: new Date("2023-01-03"), y: 6 },
        { x: new Date("2023-01-04"), y: 9 },
        { x: new Date("2023-01-05"), y: 3 },
        { x: new Date("2023-01-06"), y: 12 },
        { x: new Date("2023-01-07"), y: 3 },
      ];

      const week = [
        { x: new Date("2023-10-31"), y: 50 },
        { x: new Date("2023-11-07"), y: 70 },
        { x: new Date("2023-11-14"), y: 100 },
        { x: new Date("2023-11-21"), y: 60 },
        { x: new Date("2023-11-28"), y: 30 },
      ];

      const month = [
        { x: new Date("2023-08-01"), y: 500 },
        { x: new Date("2023-09-01"), y: 700 },
        { x: new Date("2023-10-01"), y: 500 },
        { x: new Date("2023-11-01"), y: 300 },
        { x: new Date("2023-12-01"), y: 700 },
      ];

      let data;
      if (timeFrameData === "day") {
        data = day;
      } else if (timeFrameData === "week") {
        data = week;
      } else if (timeFrameData === "month") {
        data = month;
      }

      const newChart = new Chart(context, {
        type: "bar",
        data: {
          // labels 는 x축
          //   labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              // barPercentage: 2, // 바의 너비를 설정
              // barThickness: 50, // 바의 두께를 설정
              label: "Weekly Sales",
              data: data,
              // backgroundColor: ["red", "green", "blue", "yellow"],
              backgroundColor: [
                "rgb(255, 99, 132, 0.5)",
                "rgb(54, 162, 235, 0.5)",
                "rgb(255, 205, 86, 0.5)",
                "rgb(75, 192, 192, 0.5)",
              ],
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 10,
              barThickness: 100,
            },
          ],
        },
        options: {
          layout: {
            padding: 40,
          },
          plugins: {
            title: {
              display: true,
              text: "Date Chart",
              font: {
                size: 30,
              },
            },
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              type: "time",
              //   time unit도 day, week, month 이렇게 설정 해줘야함
              time: {
                unit: timeFrameData,
              },
              //   ticks: {
              //     source: "data", // 데이터 기반으로 간격 설정
              //   },
            },
            y: {
              beginAtZero: true,
              //   max 값도 조정 해줘야함!
              max: maxValue,
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, [timeFrameData, maxValue]);

  function timeFrame(data, maxValue) {
    // alert(data);
    setTimeFrameData(data);
    setMaxValue(maxValue);
  }

  return (
    <>
      {/* <div style={{ position: "relative", width: "70%", height: "80vh" }}> */}
      <div className="relative w-2/3 h-auto bg-slate-200">
        <canvas ref={chartRef}></canvas>
        <div className="flex flex-row justify-center space-x-5 items-center">
          <button
            onClick={() => timeFrame("day", 20)}
            className="p-3 bg-red-300 hover:bg-red-400"
          >
            Day
          </button>
          <button
            onClick={() => timeFrame("week", 100)}
            className="p-3 bg-blue-300 hover:bg-blue-400"
          >
            Week
          </button>
          <button
            onClick={() => timeFrame("month", 800)}
            className="p-3 bg-green-300 hover:bg-green-400"
          >
            Month
          </button>
        </div>
      </div>
    </>
  );
}
