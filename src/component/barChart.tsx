import React from 'react'
import {Bar} from 'react-chartjs-2'
import {Chart as Chartjs, BarElement, CategoryScale, LinearScale} from 'chart.js'

Chartjs.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const BarChart = ({ chart }: {chart: any}) => {

    const data =  {
        labels: chart.results?.map((c: any) => c.name),
        datasets: [
            {
                label: `${chart.results?.name}`,
                data: chart.results?.map((c: any) => c.height),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
                label: `${chart.results?.name}`,
                data: chart.results?.map((c: any) => c.mass),
                backgroundColor: [
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 99, 132, 0.2)'   
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)' 
                ],
                borderWidth: 1
            }
        ]
    }

    const options = {
        // maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: {
                fontSize:26
            }
        }
    }

    return (
        <div>
            <h1>Bar Chart</h1>
            <h2>Height and Mass</h2>
            <Bar
                data={data}
                height={100}
                options={options}
            />
        </div>
    );
};

export default BarChart