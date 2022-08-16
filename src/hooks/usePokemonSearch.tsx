import { useEffect, useState } from "react";
import { pokemonApi } from '../api/pokemonApi';
import { PokemonResponse, SimplePokemon, Result } from '../interfaces/pokemonInterfaces';

export const usePokemonSearch = () => {

    const [simplePokemon, setSimplePokemon] = useState<SimplePokemon[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadPokemons = async () => {
        const resp = await pokemonApi.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=898&offset=0');
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
        setSimplePokemon(newSimplePokemon)
    }

    useEffect(() => {
     loadPokemons()   
    }, [])
    
    return{
        simplePokemon,
        isLoading
    }

}
