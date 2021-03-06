import React from 'react'
import CityList from '.'
import { action } from '@storybook/addon-actions'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'CityList',
    component: CityList
}

const cities = [
    { city: 'Quintueles - Villaviciosa', country: 'Spain'},
    { city: 'Madrid', country: 'Spain'},
    { city: 'Buenos Aires', country: 'Argentina'},
    { city: 'Bogotá', country: 'Colombia'},
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action('Click en city')} />