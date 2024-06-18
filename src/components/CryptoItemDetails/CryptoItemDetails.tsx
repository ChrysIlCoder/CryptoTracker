import { useDispatch, useSelector } from "react-redux";
import "./CryptoItemDetails.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { showDetailsActions } from "../../redux/features/showDetails";
import { cryptosSelector } from "../../redux/saga/cryptos/slice/cryptosSlice";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function CryptoItemDetails() {
  const coin = useSelector(cryptosSelector.getCoinDataById);
  const loading_details = useSelector(cryptosSelector.getIsLoadingDetails);
  const dispatch = useDispatch(); 

  return (
    <div className="crypto_item_details_container">
      {!loading_details ? (<>
        <div className="crypto_item_details_container__header">
        <h1>{coin?.name}</h1>
        <FontAwesomeIcon
          icon={faClose}
          onClick={() => dispatch(showDetailsActions.setShowDetails(false))}
          size="xl"
          className="crypto_item_details_container__header__close"
        />
      </div>
      <div className="crypto_item_details_container__content">
        <div className="crypto_item_details_container__content__top">
          <img
            className="crypto_item_details_container__content__top__img"
            src={coin?.image?.large}
            alt={coin?.name}
          />
          <div className="crypto_item_details_container__content__top__info">
            <div className="crypto_item_details_container__content__top__info__crypto_data">
              <span><span style={{ color: 'lightgreen' }}>Symbol:</span> {coin?.symbol?.toUpperCase()}</span>
              <span><span style={{ color: 'lightgreen' }}>Value:</span> {coin?.market_data?.current_price?.usd} $</span>
              <span>
                <span style={{ color: 'lightgreen' }}>Market Capitalization:</span> {coin?.market_data?.market_cap?.usd} $
              </span>
              <span>
                <span style={{ color: 'lightgreen' }}>Total Volume:</span> {coin?.market_data?.total_volume?.usd} $
              </span>
              <span>
                <span style={{ color: 'lightgreen' }}>Total Supply:</span> {coin?.market_data?.total_supply}{" "}
                {coin?.symbol?.toUpperCase()}
              </span>
              <span>
                <span style={{ color: 'lightgreen' }}>Circulating Supply:</span>  {coin?.market_data?.circulating_supply}{" "}
                {coin?.symbol?.toUpperCase()}
              </span>
            </div>
            {coin?.links?.homepage ? (
              <a
                className="crypto_item_details_container__content__top__info__homepage"
                href={coin?.links?.homepage[0]}
                target="_blank"
              >
                Visit Homepage
              </a>
            ) : null}
          </div>
          
        </div>
        <div className="crypto_item_details_container__content__center">
          <p className="crypto_item_details_container__content__center__desc" dangerouslySetInnerHTML={{ __html: coin?.description?.en ? coin?.description?.en : "No description" }}>
          </p>
        </div>
      </div>
      </>) : <LoadingSpinner />}
    </div>
  );
}
