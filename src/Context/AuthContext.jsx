import { createContext, useState, useContext } from 'react';
import { useNavigate, Link, useLocation } from "react-router-dom";
import axios from 'axios'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation()
    const frm = location?.state?.from?.pathname;

    const [isLogin, setIsLogin] = useState(false);

    const handleLoginData = async (email, password) => {
        const getLoginValues = { email, password };
        try {
            const res = await axios.post("/api/auth/login", getLoginValues);
            if (res.status === 200 || res.status === 201) {
                setIsLogin(true);
                localStorage.setItem("token", res.data.encodedToken);
                frm ? navigate(frm) : navigate("/product");
                localStorage.setItem("user", res.data.foundUser.firstName);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleSignupData = async (firstname, lastname, email, password) => {
        const getValues = { firstname, lastname, email, password };
        try {
            const response = await axios.post(`/api/auth/signup`, getValues);
            if (response.status === 200 || response.status === 201) {
                localStorage.setItem("token", response.data.encodedToken);
                navigate("/login")
            }
        } catch (error) {
            if (error.response.status === 422) {
                <div class="alert-items alert-success ">
                    <i class="fas fa-exclamation-triangle alert-icon"></i>Already registered, Please <Link to="/login">Login</Link>
                </div>
            }
        }
    };



    return <AuthContext.Provider value={{
        isLogin,
        setIsLogin, handleLoginData, handleSignupData
    }}>{children}</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };