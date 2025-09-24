import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CityDetail from "../pages/CityDetail";
import App from "../App";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/city/:lat/:lon" element={<CityDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
