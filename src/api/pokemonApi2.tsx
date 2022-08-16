import axios from "axios";

export const pokemonApi2 = axios.create( {

    baseURL: 'https://pokeapi.co/api/v2/pokemon'

}) 