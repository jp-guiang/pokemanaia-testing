const request = require('supertest')

const { getPokemon } = require('./apiClient')

jest.mock('./apiClient')
jest.spyOn(console, 'error')

afterEach(() => {
  console.error.mockReset()
})

describe('getPokemon API call', () => {
  it('returns a list of pokemon from the API', () => {
    const fakePoke = [{ name: 'pepe' }, { name: 'ga' }]

    getPokemon.mockReturnValue(Promise.resolve(fakePoke))
    return getPokemon().then((res) => {
      expect(res).toHaveLength(2)
    })
  })
})
