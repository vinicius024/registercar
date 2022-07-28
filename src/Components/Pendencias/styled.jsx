import styled from "styled-components";

export const Wrapper = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: #faedcd;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const InformationPerson = styled.div `
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    width: 600px;
    height: 160px;
    background: none;
    border: none;
    padding: 12px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
`;

export const FotoPerfil = styled.div `
    width: 120px;
    height: 120px;
    background: #c4c4c4;
    border-radius: 100%;
`;

export const Name = styled.h1 `
    font-size: 36px;
    font-family: Arial, Helvetica, sans-serif;
    color: #d4a373;
`;

export const Tittle = styled.h1 `
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
    color: #d4a373;
`;

export const Emplacamentos = styled.button `
    width: 25%;
    height: 10%;
    background: none;
    border: 3px solid #d4a373;
    display: flex;
    justify-content: space-around;
    align-items: center;
    :hover {
        cursor: pointer;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);
    }
`;

export const PlacaNum = styled.h2 `
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    color: #d4a373;
`;

export const HoraPlaca = styled.h2 `
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    color: #d4a373;
`;

export const NamePlaca = styled.h2 `
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    color: #d4a373;
`;