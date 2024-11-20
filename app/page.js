import Achievement from "@/components/Achievement";
import Calendar from "@/components/Calendar";
import TodayTask from "@/components/TodayTest";
import TotalTask from "@/components/TotalTask";
import Image from "next/image";

export default function Home() {
  return (
    <>

      <div className="flex flex-col items-center min-h-screen bg-gray-100">
        {/* 상단 날짜 및 날씨 정보 섹션 */}
        <div className="w-full max-w-5xl mx-auto p-4">
          <div className="flex justify-end mb-3">
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-800">
              To-Do List 추가
            </button>
          </div>

          {/* 달성률 섹션 */}
          <Achievement />

          {/* 전체 업무, 달력, 오늘의 업무 섹션 */}
          <div className="grid grid-cols-3 gap-4">
            {/* 전체 업무 목록 */}
            <TotalTask />

            {/* 달력 */}
            <Calendar />

            {/* 오늘의 업무 */}
            <TodayTask />
          </div>
        </div>

      </div>
    </>
  );
}
