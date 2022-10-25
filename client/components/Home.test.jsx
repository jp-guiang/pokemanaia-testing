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
  it('prompts user to choose pokemon', async () => {
    const fakePoke = { results: [{ name: 'pepe' }, { name: 'ga' }] }
    getPokemon.mockResolvedValue(Promise.resolve(fakePoke))
    render(<Home />)

    await waitFor(() => {
      const userPrompt = screen.getByRole('heading', { level: 1 })
      expect(userPrompt).toBeInTheDocument()
      expect(userPrompt).toHaveTextContent('Choose your Pokémon!')
    })
  })

  it('pokemon from pokeapi', async () => {
    const fakePoke = { results: [{ name: 'pepe' }, { name: 'ga' }] }
    getPokemon.mockResolvedValue(Promise.resolve(fakePoke))
    render(<Home />)

    await waitFor(() => {
      const pokeName = screen.getByText('pepe')
      expect(pokeName).toHaveTextContent('pepe')
    })
  })

  it('should show error message when api call fails', async () => {
    getPokemon.mockRejectedValue({})
    render(<Home />)
    await waitFor(() => {
      const errMess = screen.getByText('Could not load Pokemon from PokeApi')
      expect(errMess).toHaveTextContent('Could not load Pokemon from PokeApi')
    })
  })
})
