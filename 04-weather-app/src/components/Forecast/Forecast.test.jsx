import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

// NOTA: Ponemos una hora diferente para que no queden item duplicados
const forecastItemList = [
    { hour: 15, state: 'sunny', temperature: 20, weekDay: 'Lunes'},
    { hour: 16, state: 'cloud', temperature: 15, weekDay: 'Martes'},
    { hour: 17, state: 'fog', temperature: 14, weekDay: 'Miercoles'},
    { hour: 18, state: 'cloudy', temperature: 15, weekDay: 'Jueves'},
    { hour: 19, state: 'rain', temperature: 16, weekDay: 'Viernes'},
    { hour: 20, state: 'rain', temperature: 18, weekDay: 'Sabado'},
]

test ('Forecast render', async () => {
    // Utilizamos la marca data-testid que hemos puesto en el Forecast
    const { findAllByTestId } = render((<Forecast forecastItemList={forecastItemList}></Forecast>))

    const forecastItems = await findAllByTestId('forecast-item-container')

    expect(forecastItems).toHaveLength(forecastItemList.length)
})