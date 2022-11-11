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
    const pokemonHp = screen.getByText('HP:')
    const pokemonAttack = screen.getByText('ATACK:')
    expect(pokemonHp).toHaveTextContent('HP:')
    expect(pokemonAttack).toHaveTextContent('ATTACK:')
  })

  it('does not render pokemon stats on hover', () => {
    render(<Pokemon poke={fakePoke} />)
    fireEvent.mouseOut(document.getElementById('test'))
    const pokemonHp = screen.queryByText('HP:')
    expect(pokemonHp).toBeNull()
    const pokemonAttack = screen.queryByText('ATTACK:')
    expect(pokemonAttack).toBeNull()
  })
})
