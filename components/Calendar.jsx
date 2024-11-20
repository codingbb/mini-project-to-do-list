function Calendar() {
  return (
    <>
      <div className="bg-white rounded-md shadow-md p-4 text-center">
        <h2 className="font-bold mb-4">2024년 10월</h2>
        <div className="grid grid-cols-7 gap-2 text-gray-700">
          {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
            <div key={day} className="font-semibold">
              {day}
            </div>
          ))}
          {[...Array(31)].map((_, i) => (
            <div
              key={i}
              className={`py-1 text-center ${
                i + 1 === 29 ? "bg-green-500 text-white rounded-full" : ""
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Calendar;
