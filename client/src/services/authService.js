import * as request  from "./requester";

const baseUrl='http://localhost:3030';


export const login=(email, password)=>request.post(`${baseUrl}/users/login`,{email,password})

export const logout = (acessToken) =>
  fetch(`${baseUrl}/users/logout`,{
    method: 'POST',
        headers:{
            'X-Authorization':acessToken
        }
    })
   
  export const register = (email,password) => 
    request.post(`${baseUrl}/users/register`,{email, password});
   
