import { useSelector } from "react-redux";
import "./App.css";
import HomePage from "./pages/HomePage";
import { showDetailsSelector } from "./redux/features/showDetails/showDetailsSlice";
import CryptoItemDetails from "./components/CryptoItemDetails/CryptoItemDetails";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const showDetails = useSelector(showDetailsSelector.getShowDetails);

  return (
    <BrowserRouter>
      {showDetails ? <CryptoItemDetails /> : null}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
