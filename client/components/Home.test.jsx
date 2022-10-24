import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import Home from './Home'

import { getPokemon } from '../apis/apiClient'

jest.mock('../apis/apiClient')

beforeEach(() => {
  jest.clearAllMocks()
})

describe('<Home/>', () => {
  it('renders all of the required UI and information', async () => {
    const fakePoke = { results: [{ name: 'pepe' }, { name: 'ga' }] }
    getPokemon.mockResolvedValue(Promise.resolve(fakePoke))
    render(<Home />)

    await waitFor(() => {
      const pokeName = screen.getByText('pepe')
      expect(pokeName).toHaveTextContent('pepe')
    })
  })
})
