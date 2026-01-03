import {request} from "./requester";

const baseUrl='http://localhost:3030';

/*
expoert const getAll = () =>{
    return fetch(`${baseUrl}/data/games?`)
    .then(result=>resultjson());
}
export const getAll = async() =>{
    const getData = await fetch(`${baseUrl}/data/games?`);
    const result = await getData.json();
    return result;
}
*/


export const getAll = async() => request(`${baseUrl}/data/games`);

