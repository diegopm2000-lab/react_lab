import React from 'react'
import ForecastChart from './ForecastChart'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'ForecastChart',
    component: ForecastChart
}

const data = [
    { dayHour: 'Jue 18', min: 14, max: 22 },
    { dayHour: 'Jue 22', min: 15, max: 23 },
    { dayHour: 'Vie 18', min: 17, max: 21 },
    { dayHour: 'Vie 22', min: 18, max: 24 },
    { dayHour: 'Sab 18', min: 16, max: 20 },
    { dayHour: 'Sab 22', min: 12, max: 18 },
]

export const ForecastChartExample = () => (
    <ForecastChart data={data}/>
)