"use client";

import { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import axios from "axios";

export default function DoughnutChartPart2() {
    const chartRef = useRef(null);
    const [achievementRate, setAchievementRate] = useState(12);

    useEffect(() => {
        if(chartRef.current) {
            // console.log(chartRef.current);
            if(chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }

            const textCenter = {
                id: "textCenter",
                beforeDraw(chart) {
                    const { ctx, chartArea } = chart;
            
                    if (!chartArea) return;
                    const xCenter = (chartArea.left + chartArea.right) / 2;
                    const yCenter = (chartArea.top + chartArea.bottom) / 2;
            
                    ctx.save();
                    ctx.font = "bolder 20px Arial";
                    ctx.fillStyle = "black";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
            
                    const lineHeight = 30; // 줄 높이 설정
                    ctx.fillText("수익률", xCenter, yCenter - lineHeight / 2); // 첫 번째 줄
                    ctx.fillText(`${achievementRate}%`, xCenter, yCenter + lineHeight / 2); // 두 번째 줄
            
                    ctx.restore();
                },
            };

            // 2d 캔버스 컨텍스트를 가져온다.
            const context = chartRef.current.getContext("2d");

            const newChart = new Chart(context, {
                type: "doughnut",
                data: {
                    datasets: [
                        {
                            data: [10, 20, 30, 78],
                            // backgroundColor: ["red", "green", "blue", "yellow"],
                            backgroundColor: [
                                "rgb(255, 99, 132, 0.5)", 
                                "rgb(54, 162, 235, 0.5)", 
                                "rgb(255, 205, 86, 0.5)", 
                                "rgb(75, 192, 192, 0.5)",
                            ],
                            borderColor: ["black", "black", "black", "black"],
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    layout: {
                        padding: 10,
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                },
                plugins: [textCenter], // 커스텀 플러그인 추가
        });

        chartRef.current.chart = newChart;
        }
    }, [achievementRate]);

    return (
        <div style={{position: "relative", width: "100%", height: "100%"}}>
            <canvas ref={chartRef}></canvas>
        </div>
    )
}