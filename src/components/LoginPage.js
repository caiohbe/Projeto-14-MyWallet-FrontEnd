import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function login(event) {
        event.preventDefault()
        console.log(email, password)
    }

    return (
        <Page>
            <h1>MyWallet</h1>

            <form onSubmit={login}>
                <input required type='email' placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
                <input required type='password' placeholder="Senha" onChange={e => setPassword(e.target.value)}/>
                
                <button type="submit">Entrar</button>
            </form>

            <Link to={'/register'}>
                <h3>Primeira vez? Cadastre-se!</h3>
            </Link>
        </Page>
    )
}

const Page = styled.div`
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-bottom: 25px;
        font-family: 'Saira Stencil One';
        font-size: 35px;
        line-height: 50px;
        color: #FFFFFF;
    }

    form {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        input {
            font-size: 20px;
            font-family: 'Raleway';
            width: 100%;
            height: 60px;
            border: none;
            border-radius: 5px;
            margin-bottom: 15px;
            padding: 15px;
        }
    }

    button {
        width: 100%;
        height: 45px;
        background-color: #A328D6;
        border: none;
        border-radius: 5px;
        font-family: 'Raleway';
        font-size: 20px;
        font-weight: 700;
        color: #FFFFFF;
        margin-bottom: 35px;
    }

    h3 {
        color: #FFFFFF;
        font-weight: 700;
        font-size: 15px;
        text-decoration: underline white 1px;
    }
`