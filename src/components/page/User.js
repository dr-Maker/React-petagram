import React, { useContext, Fragment } from "react";
import { Context } from "../../Context";
import { SubmitButton } from "../SubmitButton";

export const User = () =>{ 
    
    const { removeAuth } = useContext(Context);
    
    return(
    <Fragment>
        <h1> soy User </h1>
        <SubmitButton  onClick={removeAuth} >Cerrar Sesión</SubmitButton>
    </Fragment>
    )
}