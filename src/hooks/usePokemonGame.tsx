import { useEffect, useState } from 'react';
import { usePokemonOptions } from './usePokemonOptions';

interface Game {
    loadNext: boolean;
    win: boolean;
    finishStage: boolean;
    gameOver: boolean;
    lives: number;
    stages: number[];
    level: number;
}

const initGame: Game = {
    loadNext: false,
    win: false,
    finishStage: false,
    gameOver: false,
    lives: 3,
    stages: [],
    level: 1
}

export const usePokemonGame = () => {

    const { loading, pokemonArr, pokemonSelected, getPokemonOptions } = usePokemonOptions();

    const [game, setGame] = useState<Game>(initGame);
    const { win, finishStage, loadNext, stages, lives, level } = game;

    useEffect(() => {
        
        return () => {
        setGame(initGame)
        
      }
    }, [])
    

    const next =  async () => {
        if(loadNext){ return }
        if( lives === 0 ){
            return
        }
        if( level === 10 ){
            return
        }
        setGame({
            ...game,
            loadNext:true
        })
        await getPokemonOptions();
        setGame({
            ...game,
            win: false,
            finishStage: false,
            level: level+1
        });
        
    }
    
    const optionSelected = ( id: number ) => {
        if(id === pokemonSelected.id){
            setGame({
                ...game,
                win: true,
                finishStage: true,
                stages:[ ...stages, 1 ]
            })

        }else{
            setGame({
                ...game,
                win: false,
                finishStage: true,
                stages:[ ...stages, 0 ],
                lives: lives -1
            })
        }
    }

    return{
        loading,
        pokemonArr,
        pokemonSelected,
        getPokemonOptions,
        game,
        next,
        optionSelected
    }

}