"use client";

import BarChart from "@/chartTest/BarChart";
import BarDateChart from "@/chartTest/BarDateChart";
import DoughnutChart from "@/chartTest/DoughnutChart";
import LineChart from "@/chartTest/LineChart";
import PieChart from "@/chartTest/PieChart";
import PlugInZoomChart from "@/chartTest/PlugInZoomChart";
import PolarAreaChart from "@/chartTest/PolarAreaChart";
import RadarChart from "@/chartTest/RadarChart";
import ScatterChart from "@/chartTest/ScatterChart";
import StockChart from "@/chartTest/StockChart";

export default function Test2() {
  return (
    <>
      <div>
        <h3>PlucInZoom Chart</h3>
        <div>
          <PlugInZoomChart></PlugInZoomChart>
        </div>
      </div>

      <div>
        <h3>Stock Chart</h3>
        <div>
          <StockChart></StockChart>
        </div>
      </div>

      <div className="flex flex-col">
        <h3>Date Chart</h3>
        <div className="mb-20 justify-center">
          <BarDateChart></BarDateChart>
        </div>
      </div>

      {/* <div>
        <h3>Bar Chart</h3>
        <div>
          <BarChart></BarChart>
        </div>
      </div>

      <div>
        <h3>Pie Chart</h3>
        <div>
          <PieChart></PieChart>
        </div>
      </div>

      <div>
        <h3>Doughnut Chart</h3>
        <div>
          <DoughnutChart></DoughnutChart>
        </div>
      </div>

      <div>
        <h3>PolarArea Chart</h3>
        <div>
          <PolarAreaChart></PolarAreaChart>
        </div>
      </div>

      <div>
        <h3>Radar Chart</h3>
        <div>
          <RadarChart></RadarChart>
        </div>
      </div>

      <div>
        <h3>Line Chart</h3>
        <div>
          <LineChart></LineChart>
        </div>
      </div>

      <div>
        <h3>Scatter Chart</h3>
        <div>
          <ScatterChart></ScatterChart>
        </div>
      </div> */}
    </>
  );
}
