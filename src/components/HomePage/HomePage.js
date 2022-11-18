import { Link } from "react-router-dom"
import styled from "styled-components"
import logoutIcon from "./logoutIcon.png"
import plusIcon from "./plusIcon.png"
import minusIcon from "./minusIcon.png"

export default function HomePage() {
    return (
        <Page>
            <Header>
                <h1>Olá Fulano</h1>
                <Link to={"/"}><img src={logoutIcon} alt='logoutIcon' /></Link>
            </Header>

            <Summary>
                <Balance>
                    <h1>SALDO</h1>
                    <h2>2849.96</h2>
                </Balance>
                <Item>
                    <h1><span>30/11</span> Almoço mãe</h1> 
                    <h2>39.90</h2>
                </Item>
                <Item>
                    <h1><span>30/11</span> Almoço mãe</h1> 
                    <h2>39.90</h2>
                </Item>
                <Item>
                    <h1><span>30/11</span> Almoço mãe</h1> 
                    <h2>39.90</h2>
                </Item>
            </Summary>

            <Buttons>
                <Link to={'/income'}>
                    <button>
                        Nova <br/>entrada
                        <img src={plusIcon} alt="plusIcon" />
                    </button>
                </Link>
                <Link to={'/outcome'}>
                    <button>
                        Nova <br /> saída
                        <img src={minusIcon} alt="minusIcon" />
                    </button>
                </Link>
            </Buttons>

        </Page>
    )
}

const Page = styled.div`
    width: 90%;
    margin: auto;
`

const Header = styled.div`
    margin-top: 25px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;

    h1 {
        color: #FFFFFF;
        font-weight: 700;
        font-size: 25px;
    }
`

const Summary = styled.div`
    height: 65vh;
    overflow: scroll;
    width: 100%;
    background-color: white;
    border-radius: 5px;
    padding: 30px 10px;
    position: relative;
`

const Item = styled.div`
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    color: #000000;
    margin-bottom: 20px;
    
    span {
        color: #C6C6C6;
        padding-right: 4px;
    }

    h2 {
        color: #C70000;
    }
`

const Balance = styled.div`
    position: fixed;
    display: flex;
    top: 70vh;
    width: 85%;
    justify-content: space-between;

    h1 {
        font-weight: 700;
    }

    h2 {
        color: #03AC00;
    }
`

const Buttons = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    
    button {
        border: none;
        border-radius: 5px;
        background-color: #A328D6;
        width: 40vw;
        height: 15vh;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        font-family: 'Raleway';
        text-align: left;
        padding: 10px;
        position: relative;
        text-decoration: underline #A328D6;

        color: #FFFFFF;
        font-size: 17px;
        font-weight: 700;

        img {
            position: absolute;
            top: 10px;
            left: 10px;
        }
    }
`
