import * as request  from "./requester";

const baseUrl='http://localhost:3030';


export const login=(email, password)=>request.post(`${baseUrl}/users/login`,{email,password})

export const logout = (acessToken) => {

  try{
const response =  fetch(`${baseUrl}/users/logout`,{
  method: 'POST',
      headers:{
          'X-Authorization':acessToken
      }
  })

  //localStorage.clear();

return response;

  }catch(error){
console.log(error)
  }



}


   
  export const register = (email,password) => 
    request.post(`${baseUrl}/users/register`,{email, password});
   
