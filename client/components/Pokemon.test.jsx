import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import Pokemon from './Pokemon'

describe('<Pokemon/>', () => {
  const fakePoke = {
    name: 'pepe',
    stats: [
      { base_stat: 50, effort: 1, stat: { name: 'hp' } },
      { base_stat: 50, effort: 1, stat: { name: 'attack' } },
    ],
    sprites: {
      front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`,
    },
  }
  it('renders Pokemon and pokemon picture', () => {
    render(<Pokemon poke={fakePoke} />)
    const pokemonName = screen.getByText('pepe')
    expect(pokemonName).toHaveTextContent('pepe')
  })

  it('renders pokemon stats on hover', () => {
    render(<Pokemon poke={fakePoke} />)
    fireEvent.mouseOver(document.getElementById('test'))
    const pokemonHp = screen.getByText('Hp:')
    const pokemonAttack = screen.getByText('Attack:')
    expect(pokemonHp).toHaveTextContent('Hp:')
    expect(pokemonAttack).toHaveTextContent('Attack:')
  })

  it('does not render pokemon stats on hover', () => {
    render(<Pokemon poke={fakePoke} />)
    fireEvent.mouseOut(document.getElementById('test'))
    const pokemonHp = screen.queryByText('Hp:')
    expect(pokemonHp).toBeNull()
    const pokemonAttack = screen.queryByText('Attack:')
    expect(pokemonAttack).toBeNull()
  })
})
