import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Pokemon from './Pokemon'

describe('<Pokemon/>', () => {
  it('renders Pokemon and pokemon picture', () => {
    const fakePoke = { name: 'pepe' }
    render(<Pokemon poke={fakePoke} />)
    const pokemonName = screen.getByText('pepe')
    expect(pokemonName).toHaveTextContent('pepe')
  })
})
