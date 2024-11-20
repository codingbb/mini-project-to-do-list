function Achievement() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white rounded-md shadow-md text-center">
          <p className="font-semibold">전체 달성률</p>
          <p className="text-2xl font-bold text-green-500">71%</p>
          <p>총 7건</p>
          <p>달성 5건</p>
          <p>미달성 2건</p>
        </div>
        <div className="p-4 bg-white rounded-md shadow-md text-center">
          <p className="font-semibold">팀 달성률</p>
          <p className="text-2xl font-bold text-green-500">75%</p>
          <p>총 4건</p>
          <p>달성 3건</p>
          <p>미달성 1건</p>
        </div>
        <div className="p-4 bg-white rounded-md shadow-md text-center">
          <p className="font-semibold">오늘 달성률</p>
          <p className="text-2xl font-bold text-green-500">75%</p>
          <p>총 4건</p>
          <p>달성 3건</p>
          <p>미달성 1건</p>
        </div>
      </div>
    </>
  );
}

export default Achievement;
