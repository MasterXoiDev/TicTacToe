import PropTypes from "prop-types";
import { func } from "prop-types";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

function AuthProvider(props){
    const [user,setUser] = useState({
        userId : 1,
        fullname : "Xoi minh nhat",
        email: "minhnhat8221@gmail.com",
        avatar: "https://i0.wp.com/picjumbo.com/wp-content/uploads/woman-with-sun-glasses-in-flower-field-summer-free-photo.jpg?w=600&quality=80"
    })
    const value = {user,setUser}
    return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>
}

function useAuth(){
    const context = useContext(AuthContext)
    // console.log(context);
    
    if(typeof context === "undefined"){
        throw new Error("please close your tag in provider")
    }
    return context;
}

export {AuthProvider,useAuth}