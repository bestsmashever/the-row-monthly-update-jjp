'use client'

import { useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default function RentOccupancyTable() {
  const rentChartRef = useRef<HTMLCanvasElement>(null)
  const occupancyChartRef = useRef<HTMLCanvasElement>(null)
  const rentChartInstance = useRef<Chart | null>(null)
  const occupancyChartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    // Rent Chart - Bar Chart
    if (rentChartRef.current) {
      if (rentChartInstance.current) {
        rentChartInstance.current.destroy()
      }

      const ctx = rentChartRef.current.getContext('2d')
      if (!ctx) return

      const rentData = {
        labels: ['Q1 2025', 'Q2 2025', 'Q3 2025'],
        datasets: [
          {
            label: 'Class A',
            data: [2028, 2034, 2085],
            backgroundColor: '#005395',
            borderColor: '#005395',
            borderWidth: 1
          },
          {
            label: 'Class B',
            data: [1398, 1393, 1360],
            backgroundColor: '#1a202c',
            borderColor: '#1a202c',
            borderWidth: 1
          },
          {
            label: 'Class C',
            data: [1249, 1205, 1187],
            backgroundColor: '#4a5568',
            borderColor: '#4a5568',
            borderWidth: 1
          },
          {
            label: 'Austin Total',
            data: [1461, 1453, 1441],
            backgroundColor: '#e53e3e',
            borderColor: '#e53e3e',
            borderWidth: 2
          }
        ]
      }

      const rentOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top' as const,
            labels: {
              padding: 15,
              usePointStyle: true
            }
          },
          title: {
            display: true,
            text: 'Effective Rent Trends by Property Class',
            font: {
              size: 16,
              weight: 'bold' as const
            },
            color: '#005395',
            padding: {
              bottom: 20
            }
          },
          tooltip: {
            callbacks: {
              label: function(context: any) {
                return `${context.dataset.label}: $${context.parsed.y.toLocaleString()}`
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            beginAtZero: false,
            min: 1000,
            grid: {
              display: false
            },
            ticks: {
              callback: function(value: any) {
                return '$' + value.toLocaleString()
              }
            }
          }
        }
      }

      rentChartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: rentData,
        options: rentOptions
      })
    }

    // Occupancy Chart - Line Chart
    if (occupancyChartRef.current) {
      if (occupancyChartInstance.current) {
        occupancyChartInstance.current.destroy()
      }

      const ctx = occupancyChartRef.current.getContext('2d')
      if (!ctx) return

      const occupancyData = {
        labels: ['Q1 2025', 'Q2 2025', 'Q3 2025'],
        datasets: [
          {
            label: 'Class A',
            data: [93.10, 93.80, 95.00],
            borderColor: '#005395',
            backgroundColor: 'transparent',
            borderWidth: 3,
            pointRadius: 6,
            pointBackgroundColor: '#005395',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            tension: 0.3
          },
          {
            label: 'Class B',
            data: [92.40, 93.20, 93.50],
            borderColor: '#1a202c',
            backgroundColor: 'transparent',
            borderWidth: 3,
            pointRadius: 6,
            pointBackgroundColor: '#1a202c',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            tension: 0.3
          },
          {
            label: 'Class C',
            data: [93.00, 93.90, 92.70],
            borderColor: '#4a5568',
            backgroundColor: 'transparent',
            borderWidth: 3,
            pointRadius: 6,
            pointBackgroundColor: '#4a5568',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            tension: 0.3
          },
          {
            label: 'Austin Total',
            data: [94.00, 95.10, 93.50],
            borderColor: '#e53e3e',
            backgroundColor: 'transparent',
            borderWidth: 4,
            borderDash: [8, 4],
            pointRadius: 7,
            pointBackgroundColor: '#e53e3e',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            tension: 0.3
          }
        ]
      }

      const occupancyOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top' as const,
            labels: {
              padding: 15,
              usePointStyle: true
            }
          },
          title: {
            display: true,
            text: 'Occupancy Trends by Property Class',
            font: {
              size: 16,
              weight: 'bold' as const
            },
            color: '#005395',
            padding: {
              bottom: 20
            }
          },
          tooltip: {
            callbacks: {
              label: function(context: any) {
                return `${context.dataset.label}: ${context.parsed.y.toFixed(2)}%`
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            beginAtZero: false,
            min: 90,
            max: 96,
            grid: {
              display: false
            },
            ticks: {
              callback: function(value: any) {
                return value + '%'
              }
            }
          }
        }
      }

      occupancyChartInstance.current = new Chart(ctx, {
        type: 'line',
        data: occupancyData,
        options: occupancyOptions
      })
    }

    return () => {
      if (rentChartInstance.current) {
        rentChartInstance.current.destroy()
      }
      if (occupancyChartInstance.current) {
        occupancyChartInstance.current.destroy()
      }
    }
  }, [])

  return (
    <section className="mb-12">
      <h3 className="section-title">Effective Rent & Occupancy Trends by Property Class</h3>
      
      {/* Rent Chart - Bar Chart */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
        <div className="relative" style={{ height: '400px' }}>
          <canvas ref={rentChartRef} />
        </div>
      </div>

      {/* Occupancy Chart - Line Chart */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
        <div className="relative" style={{ height: '400px' }}>
          <canvas ref={occupancyChartRef} />
        </div>
      </div>

      {/* Key Observations Section */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
        <h4 className="text-lg font-bold text-primary-700 mb-4">
          Key Observations
        </h4>
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="text-green-600 font-bold mr-2">•</span>
            <span className="text-gray-700">Class A remains a standout performer, posting two consecutive quarters of rent and occupancy gains.</span>
          </div>
          <div className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <span className="text-gray-700">Class B & C show signs of bottoming, with trends stabilizing and positioning these segments for gradual improvement.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
