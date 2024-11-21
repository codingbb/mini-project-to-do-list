"use client"

import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const MyChart = () => {
    const data = {
        labels: ['Yes', 'No'],
        datasets: [{
                label: 'Poll',
                data: [13, 6],
                backgroundColor: ['purple', 'blue'],
                borderColor: ['purple', 'blue'],
                circumference: 180,
                rotation: 270,
            }]
    }

    const options = {
    }

    // const gaugeBackground = {
    //     id: `gaugeBackground`,
    //     beforeDatasetsDraw(chart, args, pluginOptions) {
    //         const { ctx, chartArea: {top, bottom, left, right, width, height} } = chart;
    //         ctx.save();
    //         ctx.fillStyle = 'gray';
    //         ctx.fillRect(left, top, width, height);
    //     }
    // }

    const gaugeText = {
        id: `gaugeText`,
        beforeDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, data, chartArea: {top, bottom, left, right, width, height} } = chart;

            // text 쓸 중심값 구하기
            const xCenter = chart.getDatasetMeta(0).data[0].x;
            const yCenter = chart.getDatasetMeta(0).data[0].y;

            ctx.save();
            ctx.fillStyle = 'gray';
            ctx.font = 'bold 30px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            ctx.fillText(`Value is: ${data.datasets[0].data[0]}`, xCenter, yCenter - 10);

        }
    }

    return (
        <div className='w-1/3'>
            <Doughnut data={data} options={options} plugins={[gaugeText]} />
        </div>
    )
}

export default MyChart;

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



// // components/MyChart.js
// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// // Chart.js의 기본 구성 요소 등록
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const MyChart = () => {
//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: '첫번째 데이터셋',
//         data: [65, 59, 33, 81, 56, 25, 40],
//         backgroundColor: 'rgba(75, 75, 192, 0.2)',
//         borderColor: 'rgba(75, 75, 192, 1)',
//         borderWidth: 1,
//       },
//       {
//         label: '두번째 데이터셋',
//         data: [65, 50, 80, 8, 56, 55, 14],
//         backgroundColor: 'rgba(85, 192, 192, 0.2)',
//         borderColor: 'rgba(85, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     // true로 설정하면 차트가 부모 요소의 크기에 따라 자동으로 크기를 조정
//     responsive: true,
//     plugins: {
//         // legend 는 범례. 'top', 'bottom', 'left', 'right'
//       legend: {
//         position: 'bottom',
//         labels: {
//             font: {
//               size: 20, // 범례의 글꼴 크기 (픽셀 단위)
//             },
//           },
//       },
//       title: {
//         display: true,
//         text: '차트 테스트',
//         font: {
//             size: 35, // 제목의 글꼴 크기 (픽셀 단위)
//           },
//       },
//     },
//   };

//   return <Bar data={data} options={options} />;
// };

// export default MyChart;




