import { useState, useEffect } from 'react';

import { PokemonFull }    from '../interfaces/pokemonInterfaces';
import { pokemonApi }     from '../api/pokemonApi';
import { PokemonSpecies } from '../interfaces/SpeciesInterface';
import { Evolutions }     from '../interfaces/evolutionsInterface';

export const usePokemonComplete = ( id: string ) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingEvo, setIsLoadingEvo] = useState(true);

    const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull);
    const [species, setSpecies] = useState<PokemonSpecies>({} as PokemonSpecies);
    const [evolutions, setEvolutions] = useState<Evolutions>({} as Evolutions)

    const loadPokemon = async () => {
        const resp = await Promise.all([
            pokemonApi.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`),
            pokemonApi.get<PokemonSpecies>(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        ]) 
        setPokemon( resp[0].data );
        setSpecies( resp[1].data );
        setIsLoading(false);
        const resp2 = await pokemonApi.get<Evolutions>(resp[1].data.evolution_chain.url);
        setEvolutions(resp2.data);
        setIsLoadingEvo(false);
    }

    useEffect(()=> {
        loadPokemon();

    }, [id])

    return{ isLoading, pokemon, species, evolutions, isLoadingEvo }

}