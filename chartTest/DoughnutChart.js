"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function DoughnutChart() {
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
                type: "doughnut",
                data: {
                    // labels 는 x축 
                    labels: ["John", "Jane", "Doe", "Emily"],
                    // x축에 표시할 데이터
                    datasets: [
                        {
                            label: ["Info"], 
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
                   
                },
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