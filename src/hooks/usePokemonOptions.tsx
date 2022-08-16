import { pokemonApi2 } from '../api/pokemonApi2';
import { useEffect, useState } from 'react';

export interface PokemonArr {
    name: string;
    id: number;
}

export const usePokemonOptions = () => {

    const [pokemonArr, setPokemonArr] = useState<PokemonArr[]>([]);
    const [loading, setLoading] = useState(true);
    const [pokemonSelected, setPokemonSelected] = useState<PokemonArr>({}as PokemonArr)


    // Función que regresa un arreglo de valores del 1 al 650
    const getPokemons = () => {

        const pokemonArr = Array.from ( Array(650) )
        return pokemonArr.map( ( _ , index ) => index +1 )

    }
    const getPokemonOptions = async () => {

        const mixPokemons = getPokemons().sort( () => Math.random() - 0.5 )

        const pokemones = await getPokemonNames( mixPokemons.splice(0,4) )

        setPokemonArr(pokemones);
        setLoading(false);
        const rndInt = Math.floor( Math.random() * 4)
        setPokemonSelected(pokemones[rndInt])

    }

    const getPokemonNames = async( [ a,b,c,d ]: number[] = [] )=> {

        // const pokemonUno = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ a }`)
        const [ p1,p2,p3,p4 ] = await Promise.all([
            pokemonApi2.get(`/${ a }`),
            pokemonApi2.get(`/${ b }`),
            pokemonApi2.get(`/${ c }`),
            pokemonApi2.get(`/${ d }`),
            ])
            

            return [
                {name: p1.data.name, id: a },
                {name: p2.data.name, id: b },
                {name: p3.data.name, id: c },
                {name: p4.data.name, id: d }
            ]

        }
        useEffect( () => {
            getPokemonOptions();
        }, [])
    return{
        pokemonArr,
        pokemonSelected,
        loading,
        getPokemonOptions
    }


}
