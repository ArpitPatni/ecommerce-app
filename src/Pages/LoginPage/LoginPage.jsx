import React from 'react'
import { Link } from "react-router-dom";
import { Navbar } from '../../Components'
import { useFilter } from '../../Context/FilterContext';
import { useState } from 'react'
import { useAuth } from '../../Context/AuthContext';
import "./LoginPage.css"
function LoginPage() {

    const { handleLoginData } = useAuth();

    const { FilterDispatch } = useFilter();
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

    const [isError, setIsError] = useState("");


    const loginHandler = (e) => {
        const { email, password } = login;
        e.preventDefault();
        if (email !== "" && password !== "") {
            handleLoginData(email, password);
        } else {
            setIsError("Please fill all the field");
        }
        setIsError("");
    };

    const test = {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
    };
    const { email, password } = login;

    const handleChange = (name) => (event) => {
        setLogin({ ...login, error: false, [name]: event.target.value });
    };

    return (
        <div>
            <Navbar />
            <div class="center">
                <div class="login-container">
                    <div class="login-heading">Login</div>
                    <form action="#" onSubmit={loginHandler}>
                        <div class="data">
                            <label class="input-login label-class" for="">
                                Email Address
                            </label>
                            <input type="email"
                                value={email} onChange={handleChange("email")} required />
                        </div>
                        <div class="data">
                            <label class="input-login label-class" for="">
                                Password
                            </label>
                            <input onChange={handleChange("password")}
                                type="password"
                                value={password}
                                placeholder="***********"
                                required />
                        </div>

                        <div>
                            <button onClick={() => { FilterDispatch({ type: "Clear_Filter" }) }} class="btn login-btn">Login</button>
                            {isError && (
                                <div class="alert-items alert-danger ">
                                    <i class="fas fa-exclamation-triangle alert-icon"></i>
                                    {isError}
                                </div>
                            )}
                        </div>
                        <button
                            class="btn login-btn"
                            onClick={() => {
                                FilterDispatch({ type: "Clear_Filter" });
                                handleLoginData(test.email, test.password);
                            }}
                        >
                            Login with test credential
                        </button>
                        <div class="create-new-account">
                            <Link to='/SignUp'>
                                Create new account{" "}
                                <i class="fas fa-angle-right create-icon"></i>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage