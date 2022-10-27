import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { createContext, useEffect } from "react";
import { toast } from "react-toastify";
import app from "../firebase/Firebase";
export const userContext = createContext();


const AuthProvider = ({children}) => {
    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();
    const auth = getAuth(app);
    let [user,setUser] = useState("")

    // Google sign in
    const GoogleSignIn =()=>signInWithPopup(auth, GoogleProvider);

    // GitHub SignIn
    const GithubSignIn =()=>signInWithPopup(auth, GithubProvider);

    // SignIn with Email and password
    const EmailPaswordSignIn =(email,password)=>createUserWithEmailAndPassword(auth, email, password);

    // LogIn with email and password
    const EmailPaswordLogIn = (email,password)=>signInWithEmailAndPassword(auth, email, password);

    // LogOut
    const LogOut =()=>signOut(auth);

    const authInfo={GoogleSignIn,user,LogOut,GithubSignIn,EmailPaswordSignIn,EmailPaswordLogIn};

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