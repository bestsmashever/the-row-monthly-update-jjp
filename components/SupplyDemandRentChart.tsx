'use client'

import { useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'

// Register all Chart.js components
Chart.register(...registerables)

export default function SupplyDemandRentChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext('2d')
    if (!ctx) return

         // Chart data
     const data = {
       labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029'],
       datasets: [
         {
           label: 'Annual Supply',
           data: [8988, 9182, 10384, 9049, 9009, 10442, 12087, 14128, 14489, 30528, 13316, 9951, 3526, 833, 9914],
           backgroundColor: 'rgba(26, 32, 44, 0.7)',
           borderColor: 'rgba(26, 32, 44, 0.8)',
           borderWidth: 1,
           yAxisID: 'y'
         },
         {
           label: 'Annual Demand',
           data: [7960, 7113, 7590, 10506, 9772, 6071, 20190, 4348, 8989, 28753, 14718, 15000, 15000, 15000, 15000],
           backgroundColor: 'rgba(0, 83, 149, 0.7)',
           borderColor: 'rgba(0, 83, 149, 0.8)',
           borderWidth: 1,
           yAxisID: 'y'
         },
         {
           label: 'Rent Growth %',
           data: [5.8, 5.4, 0.9, 2.8, 4.9, 0, 10.0, 12.5, -0.8, -4.6, -3.8, 2, 5, 10, 5],
           type: 'line' as const,
           borderColor: '#e53e3e',
           backgroundColor: '#e53e3e',
           borderWidth: 4,
           fill: false,
           pointRadius: 6,
           pointBackgroundColor: '#ffffff',
           pointBorderColor: '#e53e3e',
           pointBorderWidth: 3,
           yAxisID: 'y1',
           order: 0,
           tension: 0.4
         }
       ]
     }

    // Chart options
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
          labels: {
            usePointStyle: true,
            padding: 20,
            font: {
              size: 12,
              weight: 'bold' as const
            }
          }
        },
                 title: {
           display: false
         }
      },
             scales: {
        x: {
          title: {
            display: true,
            text: 'Year',
            font: {
              size: 14,
              weight: 'bold' as const
            },
            color: '#374151'
          },
          grid: {
            display: false
          },
          ticks: {
            font: {
              size: 12
            },
            color: '#6b7280'
          }
        },
        y: {
          type: 'linear' as const,
          display: true,
          position: 'left' as const,
          title: {
            display: true,
            text: 'Units (Supply & Demand)',
            font: {
              size: 14,
              weight: 'bold' as const
            },
            color: '#374151'
          },
          beginAtZero: false,
          min: -15000,
          max: 35000,
          grid: {
            display: false
          },
          ticks: {
            font: {
              size: 12
            },
            color: '#6b7280',
            callback: function(value: any) {
              if (value === 0) return '0';
              if (value === 10000) return '10,000';
              if (value === 20000) return '20,000';
              if (value === 30000) return '30,000';
              if (value === 35000) return '35,000';
              if (value === -10000) return '-10,000';
              if (value === -15000) return '-15,000';
              return value.toLocaleString();
            }
          }
        },
        y1: {
          type: 'linear' as const,
          display: true,
          position: 'right' as const,
          title: {
            display: true,
            text: 'Rent Growth %',
            font: {
              size: 14,
              weight: 'bold' as const
            },
            color: '#374151'
          },
          beginAtZero: false,
          min: -10,
          max: 20,
          grid: {
            display: false
          },
          ticks: {
            font: {
              size: 12
            },
            color: '#6b7280',
            callback: function(value: any) {
              if (value === 0) return '0%';
              if (value === 10) return '10%';
              if (value === 20) return '20%';
              if (value === -10) return '-10%';
              return value + '%';
            }
          }
        }
      },
       elements: {
         bar: {
           borderRadius: 4
         },
         line: {
           borderWidth: 4
         },
         point: {
           radius: 6
         }
       },
       layout: {
         padding: {
           top: 20,
           bottom: 20
         }
       }
    }

    // Create new chart
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data,
      options
    })

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return (
         <section className="mb-12">
              <div className="chart-container">
          <h4>Amidst record supply, Austin also sees record demand.</h4>
          <h4>Positive rent growth can be expected as new supply continues to taper.</h4>
         <div className="relative">
           <canvas ref={chartRef} width={800} height={400} />
           {/* Projection Box Overlay */}
           <div className="absolute inset-0 pointer-events-none">
             <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-blue-50/30 to-blue-100/40 border-l-2 border-dashed border-blue-300"></div>
             <div className="absolute right-4 top-4 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-semibold shadow-lg">
                               Presidium Projections
             </div>
           </div>
         </div>
       </div>
    </section>
  )
}
