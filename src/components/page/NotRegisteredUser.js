import React, { Fragment, useContext }  from "react";
import  { Context }  from "../../Context";
import { UserForm } from '../userForm'
import { useRegisterMutation } from "../container/useRegisterMutation";
import { useLoginMutation } from "../container/useLoginMutation";

export const NotRegisteredUser = () => {

    const {activateAuth} = useContext(Context);

    const {registerMutation, data , loading, error } = useRegisterMutation();
    const {login, dataLogin, loadingLogin, errorLogin  } = useLoginMutation();

    const onSubmitRegister = ( { email, password })=>{
        const input = { email, password };
        const variables = { input };
        registerMutation({ variables })
            .then(({data}) => {
                const { signup } = data;
                activateAuth(signup);
            })
        }

        const onSubmitLogin = ( { email, password })=>{
                const input = { email, password };
                const variables = { input };
                login({ variables })
                    .then(({data})=> { 
                        const {login} = data ;
                        activateAuth(login);
            })     
        }
        const errorMsg = error && 'El usuario ya existe o hay algun problema'
        const errorLoginMsg = errorLogin && "El usuario y/o constaseña son incorrectos"


    return(
        <Fragment>
            <UserForm disabled={loading}  error={errorMsg} title='Registrarse' onSubmit={onSubmitRegister} />
            <UserForm disabled={loadingLogin} error={errorLoginMsg} title='Iniciar Sesión' onSubmit={onSubmitLogin} />
        </Fragment>  
    )
}