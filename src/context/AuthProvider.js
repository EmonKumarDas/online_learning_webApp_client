import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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
    let [loading,setLoading] = useState(true);

    // Google sign in
    const GoogleSignIn =()=>signInWithPopup(auth, GoogleProvider);

    // GitHub SignIn
    const GithubSignIn =()=>signInWithPopup(auth, GithubProvider);

    // SignIn with Email and password
    const EmailPaswordSignIn =(email,password)=>createUserWithEmailAndPassword(auth, email, password);

    // LogIn with email and password
    const EmailPaswordLogIn = (email,password)=>signInWithEmailAndPassword(auth, email, password);

    // update user profile
    const updateUserProfile =(profile)=>updateProfile(auth.currentUser,profile);

    // LogOut
    const LogOut =()=>signOut(auth);

    const authInfo={GoogleSignIn,user,loading,LogOut,GithubSignIn,EmailPaswordSignIn,EmailPaswordLogIn,updateUserProfile};

    // get current user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
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