import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import CityDetail from "../pages/CityDetail"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/city/:cityName" element={<CityDetail />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter