import React, { useState } from "react";
import {
    Wrapper,
    InformationPerson,
    FotoPerfil,
    Name,
    Emplacamentos,
    Tittle,
    PlacaNum,
    HoraPlaca,
    NamePlaca
} from "./styled";

import Popup from "../Popup";

export default function Pendencias() {

    const [pop, setPop] = useState(false);

    return (
        <Wrapper>

            <InformationPerson>
                <FotoPerfil />
                <Name>Vinicius De Freitas e Silva</Name>
            </InformationPerson>

            <Tittle>Emplacamentos Pendentes</Tittle>

            <Emplacamentos onClick={() => {setPop(true);}}>
                <PlacaNum>XXX-XXX</PlacaNum>
                <HoraPlaca>10:00</HoraPlaca>
                <NamePlaca>Vinicius</NamePlaca>
            </Emplacamentos>

            {pop ? <Popup trigger={pop} setTrigger={setPop}/> : ""}
        </Wrapper>
    );

}