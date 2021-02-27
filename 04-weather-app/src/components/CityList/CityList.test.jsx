import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList' // SUT: Subject under testing

const cities = [
    { city: 'Quintueles - Villaviciosa', country: 'Spain'},
    { city: 'Madrid', country: 'Spain'},
    { city: 'Buenos Aires', country: 'Argentina'},
    { city: 'Bogotá', country: 'Colombia'},
]

test('CityList renders', async () => {
    
    const { findAllByRole } = render(<CityList cities={cities}/>)

    const items = await findAllByRole('listitem')

    expect(items).toHaveLength(4)
})

test('CityList click on item', async () => {
    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClick={fnClickOnItem}/>)

    const items = await findAllByRole('listitem')

    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveCalledTimes(1)
})