import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";



export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)


const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
}

const signin = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const logout = () => {
    setLoading(true)
    return signOut(auth);
}

useEffect(()=>{
    const unSubcribe = onAuthStateChanged(auth,currentUser => {
        console.log('user in the on auth state change',currentUser);
        setUser(currentUser);
        setLoading(false)
    })
    return () => {
        unSubcribe();
    }
},[])

    const AuthInfo = {
        user,
        createUser,
        signin,
        logout,
        loading
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;