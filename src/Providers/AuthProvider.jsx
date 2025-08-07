import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null)

export const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();
    const crateUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSingIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);


    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    const updateUserProfile = (name, photo) => {

       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
       });
       
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currenUser => {
            setUser(currenUser);

            if(currenUser){

                //get token and store client
                const userinfo = {email: currenUser.email}
                axiosPublic.post('/jwt', userinfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }

                })

            }
            else{
              
                //Todo: remove token (if token stored in the clint side: local storage, caching, in memory)
                localStorage.removeItem('access-token')
            }
            // console.log('current user', currenUser);
            setLoading(false);
        });
        return () => {
            return unSubscribe();
        }

    },[axiosPublic])

    const authInfo = {
        user,
        loading,
        crateUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSingIn,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;