import React from 'react'
import CityList from '.'
import 'typeface-roboto'

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

export const CityListExample = () => <CityList cities={cities}/>