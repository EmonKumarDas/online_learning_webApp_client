import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { createContext, useEffect } from "react";
import app from "../firebase/Firebase";
export const userContext = createContext();


const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    let [user,setUser] = useState("")

    // Google sign in
    const GoogleSignIn =()=>signInWithPopup(auth, provider);

    // LogOut
    const LogOut =()=>signOut(auth);

    const authInfo={GoogleSignIn,user,LogOut};

    // get current user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        }) 
        return unsubscribe;
    },[])
    
    return (
        <userContext.Provider value={authInfo}>
        {children}
        </userContext.Provider>
    )
};

export default AuthProvider;