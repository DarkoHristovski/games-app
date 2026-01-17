import * as request from "./requester";

const baseUrl='http://localhost:3030/data/games';

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


export const getAll = async() => request.get(baseUrl);

export const getOne = (gameId) => request.get(`${baseUrl}/${gameId}`);

export const create = (gameData) => request.post(baseUrl,gameData);

export const edit = (gameId, gameData) => request.put(`${baseUrl}/${gameId}`,gameData);


