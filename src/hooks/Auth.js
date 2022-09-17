import { createContext, useContext, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { BaseUrl } from "../api/apiURL";
const AuthContext = createContext({});

 function AuthProvider ({children}){
    const [UserData, setUserData] = useState(null);
    const navigate = useNavigate();
    let userToken = sessionStorage.getItem("bearer");
    const validUser = ()=>{
        if(userToken)
        {
            return true;
        }
        return false;
    }

    const GetUser=async()=>{
        const token = sessionStorage.getItem('bearer');
        if(token){
            try {
                
         let data = await   fetch(`${BaseUrl}/student/profile`, {
            headers: {
                Accept: 'application/json',
                Authentication: 'Bearer Token',
                'x-access-token': `Bearer ${token}`
              }
          }).catch((err)=>{
            console.log(err,"error occured")
          })

     data = await data.json();
     console.log(data.data)
     setUserData(data.data);
            } catch (error) {
            navigate('/')
            }
        }else{
            alert("Error occurred");
            navigate('/')
        }
       
    }

    const LogOut = ()=>{
        sessionStorage.removeItem("bearer");
        navigate('/');
    }
   
    return <AuthContext.Provider value={{validUser,LogOut,GetUser,UserData}} >
        {children}
    </AuthContext.Provider>
}

 function useAuth() {
    return useContext(AuthContext);
  }

  export {useAuth,AuthProvider}