import React from 'react'
import Forecast from './Forecast'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Forecast',
    component: Forecast
}

// NOTA: Ponemos una hora diferente para que no queden item duplicados
const forecastItemList = [
    { hour: 15, state: 'sunny', temperature: 20, weekDay: 'Lunes'},
    { hour: 16, state: 'cloud', temperature: 15, weekDay: 'Martes'},
    { hour: 17, state: 'fog', temperature: 14, weekDay: 'Miercoles'},
    { hour: 18, state: 'cloudy', temperature: 15, weekDay: 'Jueves'},
    { hour: 19, state: 'rain', temperature: 16, weekDay: 'Viernes'},
    { hour: 20, state: 'rain', temperature: 18, weekDay: 'Sabado'},
]

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList}></Forecast>) 