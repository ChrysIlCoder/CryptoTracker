import { useDispatch } from "react-redux";
import { ISearchedCoin } from "../../interfaces/ISearchResults";
import "./SearchedResultItem.scss";
import { showDetailsActions } from "../../redux/features/showDetails";
import { cryptosSagaActions } from "../../redux/saga/cryptos/slice/cryptosSlice";

export default function SearchedResultItem({ ...props }: ISearchedCoin) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showDetailsActions.setShowDetails(true));
    dispatch(cryptosSagaActions.sagaGetCoinDataById(props.id));
  };

  return (
    <div className="searched_result_item_container" onClick={handleClick}>
      <div className="searched_result_item_container__left">
        <img
          className="searched_result_item_container__left__img"
          src={props.large}
          alt=""
        />
        <span className="searched_result_item_container__left__name">
          {props.name.length > 10
            ? props.name.slice(0, 10) + "..."
            : props.name}
        </span>
      </div>
      <div
        className="searched_result_item_container__specs"
        style={{ gridTemplateColumns: `repeat(1, 100px)` }}
      >
        <span className="searched_result_item_container__specs__data">
          {props.symbol}
        </span>
      </div>
    </div>
  );
}
