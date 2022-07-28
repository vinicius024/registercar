import React from "react";
import { 
    Routes, 
    Route 
} from 'react-router-dom';

import Home from '../Login';
import Pendencias from "../Pendencias";

export default function Rotas() {
    return (    
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Pendencias" element={<Pendencias/>} />
                <Route path="*" element={<h1>Not found by Vinicius</h1>}/>
            </Routes>  
    );
}