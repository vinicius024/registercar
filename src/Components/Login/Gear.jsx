import React, { useState } from 'react';


export default function Gear() {

    const [login , setLogin] = useState("");
    const [senha, setSenha] = useState("");

    //PEGANDO OS VALORES DO INPUT DE LOGIN!

    function handleChangeLogin(event) {
        event.preventDefault();

        let Login = event.target.value;

        setLogin(Login);

        console.log(login);
    }
    
    //PEGANDO OS VALORES DO INPUT DE SENHA!

    function handleChangeSenha(event) {
        event.preventDefault();

        let Senha = event.target.value;

        setSenha(Senha);

        console.log(senha);
    }


    return {handleChangeLogin, handleChangeSenha, login, senha};
}