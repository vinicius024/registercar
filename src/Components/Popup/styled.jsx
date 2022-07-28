import styled from "styled-components";

export const Wrapper = styled.div `
    width: 500px;
    height: 800px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 12px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Tittle = styled.h1 `
    font-size: 30px;
    color: #131313;
    font-family: Arial, Helvetica, sans-serif;
`;

export const Information = styled.h1 `
    font-size: 18px;
    color: #131313;
    font-family: Arial, Helvetica, sans-serif;
`;

export const Button = styled.button `
    width: 200px;
    height: 48px;
    background: #d4a373;
    border: none;
    border-radius: 12px;
    position: relative;
    top: 10%;
    color: #fff;
    :hover {
        cursor: pointer;
        background: #da9b5d;
    }
`;