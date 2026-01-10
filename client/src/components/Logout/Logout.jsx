import { Navigate, useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import * as authService from '../../services/authService'
import { useContext, useEffect } from "react";


const Logout = () =>{
  
const navigate = useNavigate();

const {user, userLogout}=useContext(AuthContext);
console.log(userLogout)
    useEffect(()=>{
        authService.logout(user.accessToken)
        .then(()=>{
            userLogout();
            navigate('/');
        })
        .catch(()=>{
            navigate('/');
        })
    },[])
    return(
        <div></div>
    )
}


export default Logout;