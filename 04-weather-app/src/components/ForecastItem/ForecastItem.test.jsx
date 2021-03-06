import React from 'react'
import { render } from '@testing-library/react'
import ForecastItem from './ForecastItem' // SUT: Subject under testing

test ('ForecastItem render', async () => {
    const { findByRole } = render(<ForecastItem weekDay='Lunes' hour={10} state='sunny' temperature={10} />)

    // TODO
})