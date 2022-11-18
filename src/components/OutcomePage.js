import { useState } from "react"
import styled from "styled-components"

export default function OutcomePage() {
    const [value, setValue] = useState('')
    const [description, setDescription] = useState('')

    function sum(event) {
        event.preventDefault()
        console.log(value, description)
    }

    return (
        <Page>
            <h1>Nova saída</h1>

            <form onSubmit={sum}>
                <input required type='number' placeholder="Valor" onChange={e => setValue(e.target.value)}/>
                <input required type='text' placeholder="Descrição" onChange={e => setDescription(e.target.value)}/>
                
                <button type="submit">Salvar saída</button>
            </form>
        </Page>
    )
}

const Page = styled.div`
    width: 90%;
    margin: auto;

    h1 {
        margin-top: 25px;
        margin-bottom: 40px;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 25px;
    }

    form {
        width: 100%;
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