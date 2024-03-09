import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";


export const AuthContext=createContext()

const AuthProvider=({children})=> {
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null)



    const createUser=(email,password)=>{
        setLoading(true)
         return createUserWithEmailAndPassword(auth,email,password)
   
        }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


        
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(user)=>{
             setUser(user)
             setLoading(false)
        })
        return ()=>{
           return unSubscribe()
        }
  },[])


  const logOut=()=>{
    setLoading(true)
     return signOut(auth)
  }


    const authInfo={
        loading,
        createUser,
        user,
        signIn,
        logOut


    }

    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node,
}

export default AuthProvider;