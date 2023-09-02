import { Character,Place } from '../models';

export const getCharacteres = (): Promise<Character[]> => {
    const url = 'https://rickandmortyapi.com/api/character';

    return fetch( url )
        .then( (response) => response.json() )
        .then( (data) => data.results )
}