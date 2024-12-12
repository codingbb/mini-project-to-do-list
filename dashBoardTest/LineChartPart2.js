"use client";

import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function LineChartPart2() {
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
                type: "line",
                data: {
                    datasets: [
                        {
                            // label: "Info", // 배열이 아닌 문자열로 변경
                            data: [
                                { x: 15, y: 56 }, 
                                { x: 17, y: 46 }, 
                                { x: 39, y: 32 }, 
                                { x: 56, y: 87 }, 
                                { x: 67, y: 89 }, 
                                { x: 82, y: 42 }, 
                                { x: 115, y: 14 } 
                            ],
                            backgroundColor: [
                                "rgb(255, 99, 132, 0.5)", 
                            ],
                            borderColor: "red",
                            borderWidth: 1,
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
                            max:100,
                            ticks: {
                                display: false, 
                            },
                            // grid: {
                            //     display: false, // x축 눈금 숨기기
                            // },
                        },
                    },
                }
        });

        chartRef.current.chart = newChart;
        }
    }, []);

    return (
        <div style={{position: "relative", width: "100%", height: "100%"}}>
            <canvas ref={chartRef}></canvas>
        </div>
    )
}