"use client";

import { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import axios from "axios";

export default function BarChart() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState([]);

  // axios 사용한 방법
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await axios("https://dummyjson.com/users");
  //       if (response.status !== 200) {
  //         console.error("Bad response from server");
  //       }
  //       const data = response.data;
  //       //   console.log(data);
  //       //   const firstSix = data.users.slice(0, 6);
  //       console.log("data.users = ", data.users);
  //       setChartData(data.users);
  //     };
  //     fetchData();
  //   }, []);

  useEffect(() => {
    if (chartRef.current) {
      // console.log(chartRef.current);
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      // 2d 캔버스 컨텍스트를 가져온다.
      const context = chartRef.current.getContext("2d");

      //   임시데이터
      const label = [
        "2023년 1월",
        "2023년 2월",
        "2023년 3월",
        "2023년 4월",
        "2023년 5월",
        "2023년 6월",
        "2023년 7월",
        "2023년 8월",
        "2023년 9월",
        "2023년 10월",
        "2023년 11월",
        "2023년 12월",
      ];

      const data1 = [20, 25, 18, 22, 27, 30, 15, 19, 23, 28, 35, 30]; // 하단 구간
      const data2 = [15, 20, 12, 18, 20, 25, 10, 15, 17, 22, 25, 20]; // 중간 구간
      const data3 = [10, 15, 8, 10, 13, 15, 5, 10, 10, 12, 20, 15]; // 상단 구간

      const newChart = new Chart(context, {
        type: "bar",
        data: {
          // labels 는 x축
          labels: label,
          datasets: [
            {
              label: ["row"],
              data: data1,
              backgroundColor: "rgba(75, 192, 192, 0.7)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
            {
              label: ["mid"],
              data: data2,
              backgroundColor: "rgba(255, 205, 86, 0.7)",
              borderColor: "rgba(255, 205, 86, 1)",
              borderWidth: 1,
            },
            {
              label: ["high"],
              data: data3,
              backgroundColor: "rgba(255, 99, 132, 0.7)", // 빨간색
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          // responsive: true 는 차트의 크기를 조정할 수 있게 한다 == 반응형이다
          responsive: true,
          layout: {
            padding: 40,
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: true,
            },
          },
          scales: {
            x: {
              type: "category",
              stacked: true,
              //   ticks: {
              //     maxRotation: 0,  // 최대 회전 각도
              //     minRotation: 0,  // 최소 회전 각도
              //   },
              grid: {
                display: false, // x축 눈금 숨기기
              },
            },
            y: {
              stacked: true,
              beginAtZero: true,
              max: 100,
              ticks: {
                display: false,
              },
              grid: {
                display: false, // x축 눈금 숨기기
              },
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, [chartData]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
