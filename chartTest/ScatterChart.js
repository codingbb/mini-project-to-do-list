"use client";

import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function ScatterChart() {
    const chartRef = useRef(null);

    useEffect(() => {
        if(chartRef.current) {
            // console.log(chartRef.current);
            if(chartRef.current.chart) {
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
                                data: [34, 64, 23, 45, 67, 24, 64],
                                // backgroundColor: ["red", "green", "blue", "yellow"],
                                backgroundColor: [
                                    "rgb(255, 99, 132, 0.5)", 
                                ],
                                borderColor: ["red"],
                                borderWidth: 1,
                            },
                        ],
                    },
                options: {
                    // responsive: true 는 차트의 크기를 조정할 수 있게 한다 == 반응형이다
                    // responsive: true,
                    plugins: {
                        legend: {
                            labels: {
                                color: 'red', // 레이블의 색상을 빨간색으로 설정
                                font: {
                                    size: 26, // 레이블의 글자 크기를 16px로 설정
                                },
                            },
                        },
                    },
                    scales: {
                        x: {
                            type: "linear",
                        },
                        y: {
                            beginAtZero: true,
                            max:100,
                        },
                    }
                }
        });

        chartRef.current.chart = newChart;
        }
    }, []);

    return (
        <div style={{position: "relative", width: "90vw", height: "80vh"}}>
            <canvas ref={chartRef}></canvas>
        </div>
    )
}