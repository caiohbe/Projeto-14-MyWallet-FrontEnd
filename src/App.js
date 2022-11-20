import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./components/LoginPage"
import HomePage from "./components/HomePage/HomePage"
import RegisterPage from "./components/RegisterPage"
import IncomePage from "./components/IncomePage"
import OutcomePage from "./components/OutcomePage"
import GlobalStyle from "./assets/styles/globalStyles"
import { useState } from "react"
import AuthContext from "./contexts/AuthContext"

function App() {
    const [token, setToken] = useState("TOKEN")
    const [name, setName] = useState("Fulano")

    return (
        <AuthContext.Provider value={token}>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<LoginPage setToken={setToken} setName={setName} />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/home" element={<HomePage name={name}/>} />
                    <Route path="/income" element={<IncomePage />} />
                    <Route path="/outcome" element={<OutcomePage />} />
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App