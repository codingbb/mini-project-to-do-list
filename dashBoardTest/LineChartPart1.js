"use client";

import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function LineChartPart1() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // console.log(chartRef.current);
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      // 2d 캔버스 컨텍스트를 가져온다.
      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: "line",
        data: {
          datasets: [
            {
              // label: "Info", // 배열이 아닌 문자열로 변경
              data: [
                { x: 15, y: 34 }, // x: 15, y: 34
                { x: 37, y: 64 }, // x: 37, y: 64
                { x: 43, y: 23 }, // x: 43, y: 23
                { x: 47, y: 45 }, // x: 47, y: 45
                { x: 57, y: 67 }, // x: 57, y: 67
                { x: 76, y: 24 }, // x: 76, y: 24
                { x: 113, y: 64 }, // x: 113, y: 64
              ],
              backgroundColor: ["rgb(255, 99, 132, 0.5)"],
              // borderColor: "transparent",     // 기본 선 색 안보이게 하기
              borderColor: "red",
              borderWidth: 4, // 선 굵기 조절
              // pointBorderColor: "blue", // 점 색상
              pointBorderWidth: 5, // 점 굵기
              pointRadius: 0, // 점 크기를 0으로 설정하여 숨김

              tension: 0, // 곡선의 강도 조절 (0.4 ~ )

              fill: true, // 선 아래로 색 채우기
              backgroundColor: (context) => {
                // console.log("context = ", context);
                const chart = context.chart;
                // console.log("chart = ", chart);
                const { ctx, chartArea } = chart;
                // console.log("ctx = ", ctx);
                // console.log("chartArea = ", chartArea);
                // const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                gradient.addColorStop(0, "purple");
                gradient.addColorStop(0.5, "white");
                gradient.addColorStop(1, "white");
                return gradient;
              },

              // segment: {
              //     borderColor: (ctx) => {
              //         const { p0, p1 } = ctx;
              //         // 원래 데이터 값 접근
              //         const rawP0 = p0.raw; // p0의 원래 데이터 값
              //         const rawP1 = p1.raw; // p1의 원래 데이터 값
              //         console.log("rawP0 = ", rawP0);
              //         console.log("rawP1 = ", rawP1);

              //         if (rawP0 && rawP1) {
              //             // y 값 기준으로 색상 설정
              //             if (rawP0.y > 50 || rawP1.y > 50) {
              //                 return "blue"; // y가 50 초과하면 파란색
              //             } else {
              //                 return "red"; // y가 50 이하이면 빨간색
              //             }
              //         }

              //         return "black"; // 기본 색상
              //     },
              // },
            },
          ],
        },
        options: {
          // responsive: true 는 차트의 크기를 조정할 수 있게 한다 == 반응형이다
          // responsive: true,
          plugins: {
            legend: {
              // label 없애기
              display: false,
            },
          },
          scales: {
            x: {
              type: "linear",
              ticks: {
                display: false,
              },
              grid: {
                display: false, // x축 눈금 숨기기
              },
            },
            y: {
              beginAtZero: true,
              max: 100,
              ticks: {
                display: false,
              },
              // grid: {
              //     display: false, // x축 눈금 숨기기
              // },
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
