import React from 'react'
import ForecastItem from './ForecastItem'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'ForecastItem',
    component: ForecastItem
}

export const LunesSoleado = () => (<ForecastItem hour={10} state='sunny' temperature={23} weekDay='Lunes' />)