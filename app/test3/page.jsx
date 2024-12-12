"use client"

import { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import axios from "axios";
import DoughnutChartPart1 from "@/dashBoardTest/DoughnutChartPart1";
import DoughnutChartPart2 from "@/dashBoardTest/DoughnutChartPart2";
import BarLineChart from "@/dashBoardTest/BarLineChart";
import LineChartPart1 from "@/dashBoardTest/LineChartPart1";
import LineChartPart2 from "@/dashBoardTest/LineChartPart2";
import BarChart from "@/dashBoardTest/BarChart";
import ScatterChart from "@/dashBoardTest/ScatterAreaChart";

export default function DashBoard() {

    return (
        <>
        <div className="m-7 p-5 bg-indigo-200 rounded-lg">
            <h1 className="font-bold text-2xl mb-5 text-center">판매 성과 요약 대시보드</h1>
                <div className="bg-slate-500 p-4">
                    <h1 className="font-bold text-2xl mb-5">Index Summary</h1>

                    <div className="flex flex-row space-x-4">
                        <div className="bg-red-200 p-2 w-1/6">
                            <p>매출 현황</p>
                            <DoughnutChartPart1 />
                        </div>
                        <div className="bg-purple-200 p-2 w-1/6">
                            <p>수익 현황</p>
                            <DoughnutChartPart2 />
                        </div>
                        <div className="bg-blue-200 p-2 w-4/6">
                            <p>월별 매출 및 수익률</p>
                            <BarLineChart />
                        </div>
                    </div>
                </div>

                <div className="mt-3 bg-lime-800 p-4">
                    <h1 className="font-bold text-2xl mb-5">판매 수익 현황</h1>

                    <div className="flex flex-row space-x-5">
                        <div className="bg-orange-400 p-2 flex flex-col w-1/4">
                            <div className="bg-blue-100 p-2">
                                <p>기간별 매출 증감</p>
                                <LineChartPart1 />
                            </div>
                            <div className="bg-cyan-100 p-2">
                                <p>기간별 수익 증감</p>
                                <LineChartPart2 />
                            </div>
                        </div>
                        <div className="bg-gray-300 p-2 w-2/4">
                            <p>판매자별 수익</p>
                            <BarChart />
                        </div>
                        <div className="bg-rose-100 p-2 w-2/4">
                            <p>카테고리별 수익</p>
                            <ScatterChart />
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}