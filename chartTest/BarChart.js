"use client";

import { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import axios from "axios";

export default function BarChart() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState([]);

  // axios 사용한 방법
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("https://dummyjson.com/users");
      if (response.status !== 200) {
        console.error("Bad response from server");
      }
      const data = response.data;
      const firstSix = data.users.slice(0, 6);
      console.log(data.users);
      setChartData(firstSix);
    };
    fetchData();
  }, []);

  // fetch를 사용한 방법
  // useEffect(() => {
  //     const fetchData = async () => {
  //         const response = await fetch("https://dummyjson.com/users");
  //         if(!response.ok) {
  //             console.error("Bad response from server");
  //         }
  //         const data = await response.json();
  //         const firstTen = data.users.slice(0, 10);
  //         console.log(data.users);
  //         setChartData(firstTen);
  //     };
  //     fetchData();
  // }, []);

  useEffect(() => {
    if (chartRef.current) {
      // console.log(chartRef.current);
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      // 2d 캔버스 컨텍스트를 가져온다.
      const context = chartRef.current.getContext("2d");

      // api로 받아온 데이터를 map 돌려서 매핑
      const label = chartData.map((items) => items.firstName);
      const data = chartData.map((items) => items.weight);
      console.log("label = ", label);
      console.log("data = ", data);

      const newChart = new Chart(context, {
        type: "bar",
        data: {
          // labels 는 x축
          labels: label,
          datasets: [
            {
              // barPercentage: 2, // 바의 너비를 설정
              // barThickness: 50, // 바의 두께를 설정
              label: ["Info"],
              data: data,
              // backgroundColor: ["red", "green", "blue", "yellow"],
              backgroundColor: [
                "rgb(255, 99, 132, 0.5)",
                "rgb(54, 162, 235, 0.5)",
                "rgb(255, 205, 86, 0.5)",
                "rgb(75, 192, 192, 0.5)",
              ],
              borderColor: ["black", "black", "black", "black"],
              borderWidth: 1,
              borderRadius: 10,
            },
          ],
        },
        options: {
          // responsive: true 는 차트의 크기를 조정할 수 있게 한다 == 반응형이다
          // responsive: true,
          layout: {
            padding: 40,
          },
          parsing: {
            xAxisKey: "name",
            yAxisKey: "age",
          },
          plugins: {
            title: {
              display: true,
              text: "Weight Name Info",
              font: {
                size: 30,
              },
            },
            legend: {
              labels: {
                color: "red", // 레이블의 색상을 빨간색으로 설정
                font: {
                  size: 26, // 레이블의 글자 크기를 16px로 설정
                },
              },
            },
          },
          scales: {
            x: {
              type: "category",
            },
            y: {
              beginAtZero: true,
              max: 100,
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, [chartData]);

  return (
    <div style={{ position: "relative", width: "90vw", height: "80vh" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
