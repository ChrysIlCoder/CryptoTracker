import { useDispatch, useSelector } from "react-redux";
import CryptoItem from "../CryptoItem/CryptoItem";
import Sections from "../Sections/Sections";
import "./CryptosGrid.scss";
import {
  cryptosSagaActions,
  cryptosSelector
} from "../../redux/saga/cryptos/slice/cryptosSlice";
import { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import SearchedResultItem from "../SearchedResultItem/SearchedResultItem";

export default function CryptosGrid() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const cryptos = useSelector(cryptosSelector.getTrendingCryptos);
  const loading = useSelector(cryptosSelector.getisLoading);
  const search_results = useSelector(cryptosSelector.getSearchResults);
  const query = window.location.href.split("=")[1];
  const dispatch = useDispatch();
  
  const sections_tabs = !search_results?.coins
    ? windowWidth >= 800
      ? [{ name: "Symbol" }, { name: "Value" }, { name: "24H %" }]
      : [{ name: "Value" }]
    : [{ name: "Symbol" }];

  useEffect(() => {
    if (query) dispatch(cryptosSagaActions.sagaGetSearchResults(query));
    else dispatch(cryptosSagaActions.sagaGetTrendingCryptos);

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="cryptos_grid_container">
      <Sections tabs={sections_tabs} />
      <div className="cryptos_grid_container__grid">
        {!loading && !search_results?.coins ? (
          cryptos?.coins?.map((coin) => (
            <CryptoItem
              tabs={windowWidth >= 800 ? [
                { name: coin?.item?.symbol?.toUpperCase() },
                { name: `${coin?.item?.data?.price?.toFixed(2)} $` },
                { name: `${coin?.item?.data?.price_change_percentage_24h?.usd?.toFixed(2)} %`}
              ] : [{ name: `${coin?.item?.data?.price?.toFixed(2)} $` }]}
              {...coin}
              key={coin.item.coin_id}
            />
          ))
        ) : search_results?.coins?.length > 0 ? (
          search_results?.coins?.map((coin) => (
            <SearchedResultItem {...coin} key={coin?.id} />
          ))
        ) : search_results?.coins?.length === 0 ? (
          <h2 className="cryptos_grid_container__grid__no_results">
            Crypto not found
          </h2>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
}
