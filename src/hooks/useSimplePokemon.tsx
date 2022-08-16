import { useState, useRef, useEffect } from 'react';

import { SimplePokemon }    from '../interfaces/pokemonInterfaces';
import { Evolutions }       from '../interfaces/evolutionsInterface';
import { getId, getImage }  from '../helpers/getIdPokemon';
import { getImageColors }   from '../helpers/getImageColors';

interface Pokemones {
    pokemon1: SimplePokemon;
    pokemon2: SimplePokemon;
    pokemon3: SimplePokemon;
}
interface Colors {
    color1: string;
    color2: string;
    color3: string;
}

export const useSimplePokemon =  ( evolutions :Evolutions ) => {

    const [isLoading, setIsLoading] = useState(true)
    const pokemones = useRef<Pokemones>({
        pokemon1 : {} as SimplePokemon,
        pokemon2 : {} as SimplePokemon,
        pokemon3 : {} as SimplePokemon
    })
    const colors = useRef<Colors>({
        color1: '',
        color2: '',
        color3: ''
    })

    const getParams = async () => {
        pokemones.current = {
            ...pokemones.current,
            pokemon1 :{
                id: getId(evolutions.chain.species.url),
                name: evolutions.chain.species.name,
                picture: getImage(evolutions.chain.species.url)
            }
        }
        const [color1] = await getImageColors(getImage(evolutions.chain.species.url))
        colors.current = {
            ...colors.current,
            color1: color1 || '#ffffff70'
        }

        if(evolutions.chain.evolves_to[0]){
            pokemones.current = {
                ...pokemones.current,
                pokemon2: {
                    id: getId(evolutions.chain.evolves_to[0]?.species.url),
                    name: evolutions.chain.evolves_to[0]?.species.name,
                    picture: getImage(evolutions.chain.evolves_to[0]?.species.url)
                }
            }
            const [color2] = await getImageColors(getImage(evolutions.chain.evolves_to[0]?.species.url))
            colors.current = {
                ...colors.current,
                color2: color2 || '#ffffff70'
            }
        }

        if(evolutions.chain.evolves_to[0]?.evolves_to[0]){
            pokemones.current = {
                ...pokemones.current,
                pokemon3: {
                    id: getId(evolutions.chain.evolves_to[0]?.evolves_to[0]?.species.url),
                    name: evolutions.chain.evolves_to[0]?.evolves_to[0]?.species.name,
                    picture: getImage(evolutions.chain.evolves_to[0]?.evolves_to[0]?.species.url)
                }
            }
            const [color3] = await getImageColors(getImage(evolutions.chain.evolves_to[0]?.evolves_to[0]?.species.url))
            colors.current = {
                ...colors.current,
                color3: color3 || '#ffffff70'
            }                
        }
        setIsLoading(false)
    }

    useEffect( () => {
        getParams()
    }, [])

    return{
        pokemones,
        colors,
        isLoading
    }


}

