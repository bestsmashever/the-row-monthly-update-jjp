'use client'

import { useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default function SupplyDemandChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext('2d')
    if (!ctx) return

    const data = {
      labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', 'YTD 2025'],
      datasets: [
        {
          label: 'Supply',
          data: [8988, 9182, 10384, 9049, 9009, 10442, 12087, 14128, 14489, 30528, 13316],
          backgroundColor: '#1a202c',
          borderColor: '#1a202c',
          borderWidth: 1
        },
        {
          label: 'Demand',
          data: [7960, 7113, 7590, 10506, 9772, 6071, 20190, 4348, 8989, 28753, 14718],
          backgroundColor: '#005395',
          borderColor: '#005395',
          borderWidth: 1
        },
        {
          label: '10-Year Average Demand',
          data: [11500, 11500, 11500, 11500, 11500, 11500, 11500, 11500, 11500, 11500, 11500],
          type: 'line' as const,
          borderColor: '#005395',
          borderWidth: 3,
          borderDash: [8, 4],
          fill: false,
          pointRadius: 0
        }
      ]
    }

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
          labels: {
            padding: 20
          }
        },
        title: {
          display: true,
          text: 'YTD 2025: +1,402 Units Net Absorption',
          font: {
            size: 16,
            weight: 'bold' as const
          },
          color: '#005395'
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          beginAtZero: true,
          max: 35000,
          grid: {
            display: false
          },
          ticks: {
            callback: function(value: any) {
              return value.toLocaleString()
            }
          }
        }
      }
    }

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data,
      options
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return (
    <section className="mb-12">
      <div className="chart-container">
        <h4>Austin's Robust Demand Continues</h4>
        <canvas ref={chartRef} width={800} height={400} />
      </div>
    </section>
  )
}
