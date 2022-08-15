

export const getImage = (url: string) => {
    const arr = url.split('/')
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${arr[arr.length-2]}.png`;
}

export const getId = (url: string) => {
    const arr = url.split('/')
    return arr[arr.length-2];
}

