import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo' // SUT: Subject under testing

test('CityInfo render', async () => {
    // Arrange
    const city = 'Gijón';
    const country = 'Madrid';
    // Act
    const { findAllByRole } = render(<CityInfo city={city} country={country}/>)
    
    // Assert
    // findAllByRole --> find all heading components (h1, h2, ...) returning an array
    const cityAndCountryComponent = await findAllByRole('heading')

    expect(cityAndCountryComponent[0]).toHaveTextContent(city)
    expect(cityAndCountryComponent[1]).toHaveTextContent(country)
})
