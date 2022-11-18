import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./components/LoginPage"
import MainPage from "./components/MainPage"
import RegisterPage from "./components/RegisterPage"
import IncomePage from "./components/IncomePage"
import OutcomePage from "./components/OutcomePage"
import GlobalStyle from "./assets/styles/globalStyles"

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/income" element={<IncomePage />} />
                <Route path="/outcome" element={<OutcomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App