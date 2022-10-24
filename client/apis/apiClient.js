import request from 'superagent'

export function getPokemon() {
  const limit = 151
  return request
    .get(`https://pokeapi.co/api/v2/pokemon?&limit=${limit}`)
    .then((res) => {
      return res.body
    })
}
