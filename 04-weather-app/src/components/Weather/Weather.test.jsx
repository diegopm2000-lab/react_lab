import React from 'react'
import { render } from '@testing-library/react'
import Weather from './Weather' // SUT: Subject under testing

test('Weather render sunny', async () => {

    const { findByRole } = render(<Weather temperature={10} state='sunny'/>)

    const temp = await findByRole('heading')
    
    expect(temp).toHaveTextContent('10')
})