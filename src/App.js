import React , { useContext } from "react";
import { GlobalStyle } from "./components/styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { Home } from "./components/page/Home"; 
import { Detail } from "./components/page/Detail"; 
import { Favs } from "./components/page/Favs";
import { User } from "./components/page/User";
import { NotRegisteredUser } from "./components/page/NotRegisteredUser";
import { NotFound } from "./components/page/NotFound";
import { Router } from "@reach/router";
import { NavBar } from "./components/NavBar";
import { Context } from "./Context";
import { Redirect } from "@reach/router";

export const App = ()=>{

    const { isAuth } = useContext(Context);

    return(
        <div>
            <Logo />
            <GlobalStyle />
                <Router>
                    <NotFound  default />
                    <Home path="/"  />
                    <Home path="/pet/:id" />
                    <Detail path='/detail/:detailID' />
                    { !isAuth && <NotRegisteredUser  path="/login" /> }
                    { !isAuth && <Redirect from='/favs' to="/login" noThrow /> }
                    { !isAuth && <Redirect from='/user' to="/login" noThrow /> }
                    { isAuth && <Redirect from='/login' to="/" noThrow /> }
                    <Favs path="/favs" />
                    <User path="/user" />
                </Router>
                <NavBar />
        </div>
    )
}

