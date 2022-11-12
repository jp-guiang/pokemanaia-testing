import React from 'react'
import Team from './Team'
import { render, screen } from '@testing-library/react'

import { useSelector } from 'react-redux'

jest.mock('react-redux')

describe('<Team/>', () => {
  const fakeTeam = [
    {
      name: 'bulby',
      sprites: {
        front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`,
      },
    },
  ]
  it('lists the pokemon team', () => {
    useSelector.mockReturnValue(fakeTeam)
    render(<Team />)
    const fakeMember = screen.getByRole('img', { alt: 'bulby' })
    expect(fakeMember.alt).toBe('bulby')
  })
})
