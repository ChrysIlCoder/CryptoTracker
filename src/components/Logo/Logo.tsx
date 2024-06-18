import logo from '../../assets/Logo_Crypto_Tracking.svg'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cryptosSagaActions } from "../../redux/saga/cryptos/slice/cryptosSlice";
import "./Logo.scss";
import { cryptosActions } from '../../redux/saga/cryptos/slice';

export default function Logo() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const goHome = () => {
    navigate("/")
    dispatch(cryptosActions.reset())
    dispatch(cryptosSagaActions.sagaGetTrendingCryptos)
  }
    
  return (
    <img
      className="logo_container"
      onClick={goHome}
      src={logo}
    />
  );
}
