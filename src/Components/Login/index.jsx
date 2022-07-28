import { Link } from "react-router-dom";
import {
    Wrapper,
    Logo,
    InputL,
    InputS,
    Button
} from "./styled";

import Gear from "./Gear";

export default function Home() {

    const {handleChangeLogin, handleChangeSenha, login, senha} = Gear();

    return(
        <Wrapper>
             <Logo/>

            <InputL 
                placeholder="Nome"
                onChange={handleChangeLogin} 
                value={login}
            />

            <InputS 
                placeholder="Senha" 
                onChange={handleChangeSenha}
                value={senha}
            />
            <Link to={"../Pendencias"}>
                <Button>Acessar</Button>
            </Link>
        </Wrapper>
    );
}