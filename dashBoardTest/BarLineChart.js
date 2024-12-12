"use client";

import { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import axios from "axios";

export default function BarLineChart() {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState([]);

    // axios 사용한 방법
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios("https://dummyjson.com/users");
            if(response.status !== 200) {
                console.error("Bad response from server");
                return;
            }
            const data = response.data;
            // const firstSix = data.users.slice(0, 6);
            // console.log(data.users);
            setChartData(data.users);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if(chartRef.current) {
            // console.log(chartRef.current);
            if(chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }

            // 2d 캔버스 컨텍스트를 가져온다.
            const context = chartRef.current.getContext("2d");

            // api로 받아온 데이터를 map 돌려서 매핑 
            const label = chartData.map((items) => items.firstName);
            const data = chartData.map((items) => items.weight);
            // console.log("label = ", label);
            // console.log("data = ", data);

            const newChart = new Chart(context, {
                type: "bar",
                data: {
                    // labels 는 x축 (이건 숨기더라도 있어야 데이터값이 차트에 표시됨) 
                    labels: label,
                    datasets: [
                        {
                            data: data,
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
                    responsive: true,
                    // maintainAspectRatio: false, // 반응형 조정 시 유지 비율 해제
                    layout: {
                        padding: 40,
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    scales: {
                        x: {
                            type: "category",
                            // x축 숨기려면 이렇게 함 
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
        <div style={{position: "relative", width: "100%", height: "90%"}}>
            <canvas ref={chartRef}></canvas>
        </div>
    )
}

