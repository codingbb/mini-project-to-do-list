"use client"

// import React from "react";
// import { Doughnut } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Chart.js 플러그인 등록
// ChartJS.register(ArcElement, Tooltip, Legend);

// const RadialBarChart = () => {
//   // 데이터 설정
//   const data = {
//     labels: ["Red", "Blue"], // 각각의 원에 대한 라벨
//     datasets: [
//       {
//         label: "Red",
//         data: [9], // [가치, 나머지 공간]
//         backgroundColor: ["#ff6384"], // 채우기 색상
//         borderWidth: 0, // 테두리 두께 제거
//         circumference: 300, // 차트가 그려질 각도
//       },
//     ],
//   };

//   // 옵션 설정
//   const options = {
//     plugins: {
//       tooltip: {
//         callbacks: {
//           label: (context) => `${context.label}: ${context.raw}`,
//         },
//       },
//     },
//     responsive: true,
//     maintainAspectRatio: false,
//   };

//   const backgroundCircle = {
//     id : 'backgroundCircle',
//     beforeDatasetDraw(chart, args, pluginOptions) {
//       const { ctx } = chart;
//       ctx.save();

//        // 데이터 셋 메타정보 가져오기
//       console.log(chart.getDatasetMeta(0));
//       const xCoor = chart.getDatasetMeta(0).data[0].x;
//       const yCoor = chart.getDatasetMeta(0).data[0].y;
//       const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
//       const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;

//       // 원의 두께
//       const width = outerRadius - innerRadius;
//       const angle = Math.PI / 180;

//       // 배경 원 그리기
//       ctx.beginPath();
//       ctx.lineWidth = width; // 원의 두께 설정
//       ctx.strokeStyle = 'lightgrey'; // 원의 색상 설정
//       ctx.arc(xCoor, yCoor, outerRadius - width / 2, 0, angle * 360, false);
//       // ctx.arc(xCoor, yCoor, (outerRadius + innerRadius) / 2, 0, angle * 360, false); // 중간 값으로 중심 원형 그리기
//       ctx.stroke(); // 선 그리기
//       // ctx.restore(); // 캔버스 상태를 초기화

//     }
//   }

//   return (
//     <div style={{ width: "300px", height: "300px" }}>
//       <Doughnut data={data} options={options} plugins = {[backgroundCircle]} />
//     </div>
//   );
// };

// export default RadialBarChart;


// import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Title, Tooltip, Legend);

// const MyChart = () => {
//     const data = {
//         labels: ['Yes', 'No'],
//         datasets: [{
//                 label: 'Poll',
//                 data: [13, 6],
//                 backgroundColor: (context) => {
//                     console.log(context);
//                     const chart = context.chart;
//                     const { ctx, chartArea } = chart;
//                     console.log("chartArea = ", chartArea);
//                     // 애니메이션 촤라락 
//                     if (!chartArea) {
//                         return null;
//                     }

//                     if(context.dataIndex === 0) {
//                         return getGradient(chart);
//                     } else {
//                         return 'blue';
//                     }
//                 },
//                 borderColor: ['purple', 'blue'],
//             }]
//     }

//     // 그라데이션 색깔 줌 
//     function getGradient(chart) {
//         const {ctx, chartArea: {top, bottom, left, right}} = chart;
//         const gradientSegment = ctx.createLinearGradient(left, 0, right, 0);
//         gradientSegment.addColorStop(0, 'red');
//         gradientSegment.addColorStop(0.5, 'orange');
//         gradientSegment.addColorStop(1, 'green');
//         return gradientSegment;

//     }

//     const options = {
//     }

//     // const gaugeBackground = {
//     //     id: `gaugeBackground`,
//     //     beforeDatasetsDraw(chart, args, pluginOptions) {
//     //         const { ctx, chartArea: {top, bottom, left, right, width, height} } = chart;
//     //         ctx.save();
//     //         ctx.fillStyle = 'gray';
//     //         ctx.fillRect(left, top, width, height);
//     //     }
//     // }

//     const textCenter = {
//         id: `textCenter`,
//         beforeDatasetsDraw(chart, args, pluginOptions) {
//             const { ctx, data } = chart;

//             // text 쓸 중심값 구하기
//             const xCenter = chart.getDatasetMeta(0).data[0].x;
//             const yCenter = chart.getDatasetMeta(0).data[0].y;

//             ctx.save();
//             ctx.font = 'bolder 30px sans-serif';
//             ctx.fillStyle = 'red';
//             ctx.textAlign = 'center';
//             ctx.textBaseline = 'middle';
//             ctx.fillText(`Value : ${data.datasets[0].data[0]}`, xCenter, yCenter);

//         }
//     }

//     return (
//         <div className='w-1/3'>
//             <Doughnut data={data} options={options} plugins={[textCenter]} />
//         </div>
//     )
// }

// export default MyChart;

// import { Chart as ChartJS, RadialLinearScale, LineElement, PointElement, Filler, Title, Tooltip, Legend } from 'chart.js';
// import { Radar } from 'react-chartjs-2';

// ChartJS.register(RadialLinearScale, LineElement, PointElement, Filler, Title, Tooltip, Legend);


// const MyChart = () => {
//     const data = {
//         labels: ['Mon', 'Tue', 'Wed'],
//         datasets: [{
//                 label: 'Weekdays',
//                 data: [33, 53, 85],
//                 backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                 borderColor: 'black',
//             }]
//     }

//     const options = {
//     }

    
//     return (
//         <div className='w-2/3'>
//             <Radar data={data} options={options} />
//         </div>
//     )
// }

// export default MyChart;

// import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';

// ChartJS.register(CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend);

// const MyChart = () => {
//     const data = {
//         labels: ['Red', 'Blue', 'Yellow'],
//         datasets: [
//             {
//                 label: 'Pie Chart Test',
//                 data: [3, 6, 9],
//                 backgroundColor: [
//                     'rgb(255, 99, 132)',
//                     'rgb(54, 162, 235)',
//                     'rgb(255, 205, 86)',
//                 ],
//                 borderColor: 'black',   
//                 hoverOffset: 4,
//             },
//         ],
//     };

//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'bottom',
//                 labels: {
//                     font: {
//                         size: 20,
//                     },
//                 },
//             },
//             title: {
//                 display: true,
//                 text: 'Chart Test',
//                 font: {
//                     size: 35,
//                 },
//             },
//         },
//     };

//     return (
//         <div className='w-1/3'>
//         <Pie data={data} options={options} />
//         </div>
//     )
// }

// export default MyChart;

// import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
// import { useRef } from 'react';
// import { getElementsAtEvent, Line } from 'react-chartjs-2';

// ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

// const MyChart = () => {
//     const data = {
//         labels: ['Mon', 'Tue', 'Wed'],
//         datasets: [
//             {
//                 label: 'Weekdays',
//                 // 데이터는 배열값으로 받아야함 
//                 data: [33, 53, 85],
//                 fill: false,
//                 borderColor: 'green',
//                 // backgroundColor는 밑에 ㅁ 네모 칸 색깔을 채우는 속성
//                 backgroundColor: 'green',
//                 // 곡선 정도를 설정하는 속성. 이 속성은 선의 부드러움을 조정하는 데 사용
//                 // 0에 가까울수록 직선에 가까워짐
//                 tension: 0.4,   
//                 link: ['https://www.daum.net', 'https://www.naver.com', 'https://www.google.com'],
//             },
//             {
//                 label: 'Years',
//                 // 데이터는 배열값으로 받아야함 
//                 data: [13, 95, 22],
//                 fill: false,
//                 borderColor: 'blue',
//                 backgroundColor: '',
//                 // 곡선 정도를 설정하는 속성. 이 속성은 선의 부드러움을 조정하는 데 사용
//                 // 0에 가까울수록 직선에 가까워짐
//                 tension: 0.4,   
//                 link: ['https://www.daum.net', 'https://www.naver.com', 'https://www.google.com'],
//             },
//         ],
//     };

//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'bottom',
//                 labels: {
//                     font: {
//                         size: 20,
//                     },
//                 },
//             },
//             title: {
//                 display: true,
//                 text: 'Chart Test',
//                 font: {
//                     size: 35,
//                 },
//             },
//         },
//     };

//     const chartRef = useRef();
//     const onClickTest = (e) => {
//         if(getElementsAtEvent(chartRef.current, e).length > 0) {
//             console.log(getElementsAtEvent(chartRef.current, e))

//             const clickDatasetIndex = getElementsAtEvent(chartRef.current, e)[0].datasetIndex;
//             console.log("clickDatasetIndex = ", clickDatasetIndex)

//             const dataPoint = getElementsAtEvent(chartRef.current, e)[0].index;
//             console.log("dataPoint = ", dataPoint)
//             console.log("Data = ", data.datasets[clickDatasetIndex].link[dataPoint])

//             const link = data.datasets[clickDatasetIndex].link[dataPoint]
//             window.open(link, '_blank')

//         }
//     }

//     return (
//     <>
//     <Line data={data} options={options} onClick={onClickTest} ref={chartRef} />
//     </>
//     );

// }

// export default MyChart;



// components/MyChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Chart.js의 기본 구성 요소 등록
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MyChart = () => {
  const data = {
    labels: ['Yes', ' No', 'Not Sure'],
    datasets: [
      {
        label: 'Poll',
        data: [6, 3, 9],
        backgroundColor: "purple",
        borderWidth: 0,
      },
    ],
  };

  
  const dashedBorders = {
    id: 'dashedBorders',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, chartArea: {top, bottom, left, right, width, height} } = chart;

      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = 'gray';
      ctx.lineWidth = 1;
      // 점선 시작위치 설정
      ctx.setLineDash([5, 6]);
      ctx.moveTo(left, top);
      ctx.lineTo(right, top);
      ctx.lineTo(right, bottom);
      ctx.lineTo(left, bottom);
      ctx.closePath();
      ctx.stroke();
    }
  }

  const options = {
  
  };


  return (
    <div className='w-2/3'>
        <Bar data={data} options={options} plugins={[dashedBorders]} />;
    </div>
  )
};

export default MyChart;


