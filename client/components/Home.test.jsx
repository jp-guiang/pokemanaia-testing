import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'

import Home from './Home'

import { getPokeInfo, getPokemon } from '../apis/apiClient'

jest.mock('../apis/apiClient')

beforeEach(() => {
  jest.clearAllMocks()
})

describe('<Home/>', () => {
  const fakePokeList = { results: [{ name: 'pepe' }] }
  const fakePokedex = {
    name: 'bulby',
    sprites: {
      front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`,
    },
  }
  getPokemon.mockResolvedValue(Promise.resolve(fakePokeList))
  getPokeInfo.mockResolvedValue(Promise.resolve(fakePokedex))

  it('prompts user to choose pokemon', async () => {
    act(() => {
      render(<Home />)
    })

    await waitFor(() => {
      const userPrompt = screen.getByRole('heading', { level: 1 })
      expect(userPrompt).toBeInTheDocument()
      expect(userPrompt).toHaveTextContent('Choose your Pokémon!')
    })
  })

  it('get pokemon from pokeapi', async () => {
    act(() => {
      render(<Home />)
    })

    await waitFor(() => {
      const pokeName = screen.getByText('bulby')
      expect(pokeName).toHaveTextContent('bulby')
    })
  })

  it('load pokemon picture from pokeapi', async () => {
    act(() => {
      render(<Home />)
    })

    await waitFor(() => {
      const pokePic = screen.getByRole('img', { alt: /bulby/i })
      expect(pokePic.alt).toBe('bulby')
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
