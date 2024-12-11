"use client"

import BarChart from "@/chartTest/BarChart"
import DoughnutChart from "@/chartTest/DoughnutChart"
import LineChart from "@/chartTest/LineChart"
import PieChart from "@/chartTest/PieChart"
import PolarAreaChart from "@/chartTest/PolarAreaChart"
import RadarChart from "@/chartTest/RadarChart"
import ScatterChart from "@/chartTest/ScatterChart"

export default function Test2() {

    return (
        <>
            <div>
                <h3>Bar Chart</h3>
                <div><BarChart></BarChart></div>
            </div>

            <div>
                <h3>Pie Chart</h3>
                <div><PieChart></PieChart></div>
            </div>

            <div>
                <h3>Doughnut Chart</h3>
                <div><DoughnutChart></DoughnutChart></div>
            </div>

            <div>
                <h3>PolarArea Chart</h3>
                <div><PolarAreaChart></PolarAreaChart></div>
            </div>

            <div>
                <h3>Radar Chart</h3>
                <div><RadarChart></RadarChart></div>
            </div>

            <div>
                <h3>Line Chart</h3>
                <div><LineChart></LineChart></div>
            </div>

            <div>
                <h3>Scatter Chart</h3>
                <div><ScatterChart></ScatterChart></div>
            </div>

        </>
      )}