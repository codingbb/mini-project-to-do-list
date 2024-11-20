function TotalTask() {
  return (
    <>
      <div className="bg-white rounded-md shadow-md p-4">
        <h2 className="font-bold mb-4">전체 업무</h2>
        <ul className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <li key={i} className="flex justify-between">
              <p>2024-10-2{i} 리액트 공부하기</p>
              <span className="text-gray-500">미달성</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TotalTask;
