"use client";

import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function ScatterChart() {
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
        type: "scatter",
        data: {
          // labels 는 x축!!
          labels: [15, 37, 43, 47, 57, 76, 113],
          datasets: [
            {
              label: ["Info"],
              // 여기 이 데이터가 y축!!
              data: [
                { x: -20000, y: 100000 },
                { x: 0, y: 200000 },
                { x: 20000, y: 150000 },
                { x: 40000, y: 300000 },
                { x: 60000, y: 500000 },
                { x: 80000, y: 400000 },
                { x: -15000, y: 250000 },
                { x: -10000, y: 100000 },
                { x: 10000, y: 350000 },
                { x: 30000, y: 450000 },
                { x: 50000, y: 200000 },
                { x: 70000, y: 300000 },
                { x: -5000, y: 300000 },
                { x: 70200, y: 310000 },
                { x: -5500, y: 300300 },
                { x: 25000, y: 50000 },
                { x: 65000, y: 100000 },
              ],

              backgroundColor: [
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
                "rgba(75, 192, 192, 0.5)",
                "rgba(153, 102, 255, 0.5)",
                "rgba(255, 159, 64, 0.5)",
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
                "rgba(75, 192, 192, 0.5)",
                "rgba(153, 102, 255, 0.5)",
                "rgba(255, 159, 64, 0.5)",
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
              ],
              borderColor: ["black"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          // responsive: true 는 차트의 크기를 조정할 수 있게 한다 == 반응형이다
          // responsive: true,
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
              type: "linear",
              // beginAtZero: true,
              min: -20000,
              max: 80000,
              ticks: {
                stepSize: 20000, // x축 간격
              },
            },
            y: {
              beginAtZero: true,
              min: 0,
              max: 500000,
              ticks: {
                stepSize: 100000, // y축 간격
              },
              //   grid: {},
            },
          },
        },
        // chartArea 값 추출하려면 plugins 사용
        plugins: [
          {
            id: "cross plugin",
            beforeDraw: (chart) => {
              const { ctx, chartArea, scales } = chart;
              //   console.log("chart = ", chart);
              console.log("ctx = ", ctx);
              //   console.log("chartArea = ", chartArea);
              //   console.log("scales = ", scales.x.getPixelForValue);

              const xCenterPixel = scales.x.getPixelForValue(
                (scales.x.max + scales.x.min) / 2
              );
              const yCenterPixel = scales.y.getPixelForValue(
                (scales.y.max + scales.y.min) / 2
              );

              ctx.save();
              ctx.strokeStyle = "gray";
              ctx.lineWidth = 3;

              // 점선 스타일 설정
              ctx.setLineDash([5, 5]); // 점선 패턴 (5px 선, 5px 간격)

              ctx.beginPath();
              ctx.moveTo(xCenterPixel, chartArea.top); // 상단에서 시작
              ctx.lineTo(xCenterPixel, chartArea.bottom); // 하단까지
              ctx.stroke();

              ctx.beginPath();
              ctx.moveTo(chartArea.left, yCenterPixel); // 왼쪽에서 시작
              ctx.lineTo(chartArea.right, yCenterPixel); // 오른쪽까지
              ctx.stroke();

              ctx.restore();
            },
          },
        ],
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
