import { useEffect, useRef, useState } from "react";
import { pokemonApi } from '../api/pokemonApi';

import { PokemonResponse, SimplePokemon, Result } from '../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');
    const [simplePokemon, setSimplePokemon] = useState<SimplePokemon[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadPokemons = async () => {
        const resp = await pokemonApi.get<PokemonResponse>( nextPageUrl.current );
        nextPageUrl.current = resp.data.next;
        mapPokemonList(resp.data.results)
        setIsLoading(false)
    }

    const mapPokemonList = ( pokemonList: Result[] ) => {
        const newSimplePokemon: SimplePokemon[] = pokemonList.map(({ name, url }) => {
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length -2]
            const picture  = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`
            return{ name, id, url, picture }
        })
        setSimplePokemon([ ...simplePokemon, ...newSimplePokemon ])
    }

    useEffect(() => {
     loadPokemons()   
    }, [])
    
    return{
        simplePokemon,
        isLoading,
        loadPokemons
    }

}
