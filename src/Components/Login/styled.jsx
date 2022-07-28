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
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Logo = styled.div `
    width: 100px;
    height: 100px;
    background: #9d9d9d;
    position: absolute;
    top: 20%;
    
`;

export const InputL = styled.input `
    position: relative;
    top: -72px;
    width: 400px;
    border: 2px solid #d4a373;
    border-radius: 6px;
    background: none;
    padding: 10px;
    ::placeholder {
        font-size: 12px;
        color: #d4a373;
    }
`;

export const InputS = styled.input `
    position: relative;
    top: -30px;
    width: 400px;
    border: 2px solid #d4a373;
    border-radius: 6px;
    background: none;
    padding: 10px;
    ::placeholder {
        font-size: 12px;
        color: #d4a373;
    }
`;

export const Button = styled.button `
    position: relative;
    width: 100px;
    height: 30px;
    background: #d4a373;
    color: #fff;
    top: 0px;
    left: 160px;
    border-radius: 6px;
    border: none;
    :hover {
        cursor: pointer;
    }
`;
