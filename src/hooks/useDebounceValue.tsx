import { useState, useEffect } from 'react';

export const useDebounceValue = ( termino:string = '', time:number = 500 ): string => {

    const [debouncedValue, setDebouncedValue] = useState<string>(termino);

    useEffect(() => {

        const timeout = setTimeout(() => {
            setDebouncedValue( termino );

        }, time);

        return () => {
            clearTimeout( timeout )
        }
    }, [termino])
    


    return debouncedValue

}
