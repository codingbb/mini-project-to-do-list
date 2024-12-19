"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";
// Chart.js에 플러그인 등록
Chart.register(zoomPlugin);

export default function PlugInZoomChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // 차트 초기화 (기존 차트 제거)
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      // 차트 데이터 생성
      const data = {
        labels: Array.from({ length: 100 }, (_, i) => `2023-12-${i + 1}`), // 100일치 데이터
        datasets: [
          {
            label: "Stock Price",
            data: Array.from({ length: 100 }, () =>
              Math.floor(Math.random() * (300 - 100) + 100)
            ),
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
          },
        ],
      };

      // 차트 옵션 설정
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: "Stock Price Chart",
          },
          zoom: {
            pan: {
              enabled: true, // 드래그로 스크롤 활성화
              mode: "x", // x축으로만 스크롤
            },
            zoom: {
              wheel: {
                enabled: true, // 휠로 줌 활성화
              },
              pinch: {
                enabled: true, // 터치로 줌 활성화
              },
              mode: "x", // x축으로만 줌
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Date",
            },
          },
          y: {
            title: {
              display: true,
              text: "Price ($)",
            },
            beginAtZero: false, // 데이터 범위에 맞게 y축 설정
          },
        },
      };

      // 캔버스에 차트 생성
      const context = chartRef.current.getContext("2d");
      const newChart = new Chart(context, {
        type: "line",
        data,
        options,
      });

      chartRef.current.chart = newChart;
    }
  }, []);

  return (
    <div className="relative w-full h-96 bg-gray-100 p-5">
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
