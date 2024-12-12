"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function BarChart() {
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
                type: "bar",
                data: {
                    // labels 는 x축 
                    // labels: ["John", "Jane", "Doe", "Emily"],
                    // x축에 표시할 데이터
                    datasets: [
                        {
                            // barPercentage: 2, // 바의 너비를 설정
                            barThickness: 50, // 바의 두께를 설정
                            label: ["Info"], 
                            data: [
                                { name: "John", age: 50 }, 
                                { name: "Jane", age: 20 }, 
                                { name: "Doe", age: 30 }, 
                                { name: "Emily", age: 78 }
                            ],
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
                        xAxisKey: 'name',
                        yAxisKey: 'age',
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: "Bar Chart",
                            font: {
                                size: 30,
                            },
                        },
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
                            type: "category",
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