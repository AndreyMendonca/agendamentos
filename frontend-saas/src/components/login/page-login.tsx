"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { LoginForm } from "./login-form";
import { CadastroForm } from "./cadastro-form";

export const PageLogin = () =>{
    const [login, setLogin] = useState<Boolean>(true);

    const handleCadastro = () => {
        setLogin(!login);
    }

    return (
        <Card className="shadow-2xl min-h-102 flex justify-center">
            <CardHeader>
                <CardTitle> 
                    {login ? 
                        "Acesse sua conta" : 
                        "Faça seu cadastro"
                    }
                </CardTitle>
            </CardHeader>
            <CardContent>
                    {login ? 
                        <LoginForm onClick={handleCadastro}/>: 
                        <CadastroForm onClick={handleCadastro}/>
                    }
            </CardContent>
        </Card>
    )
}