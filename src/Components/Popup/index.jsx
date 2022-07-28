import React from 'react'
import {
    Wrapper,
    Tittle,
    Information,
    Button
} from "../Popup/styled";

export default function Popup(trigger) {


    return (
        <Wrapper>
            <Tittle>Emplacamento XXX-XXX</Tittle>
            <Information>Horario: 08h00</Information>
            <Information>Proprietario: Vinicius</Information>
            <Information>Autorização: 12345</Information>
            <Information>tipo de veiculo: carro</Information>
            <Information>Categoria do veiculo: Passeio</Information>

            <Tittle>Checklist</Tittle>

            <Information>1- Geolocalização</Information>
            <Information>2- Biometria</Information>
            <Information>3- Foto da Placa Dianteira</Information>

            <Button onClick={() => {trigger.setTrigger(false)}}>
                Finalizar
            </Button>
        </Wrapper>
    );
}