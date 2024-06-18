import { ICoin } from "../../interfaces/ITrending";
import "./CryptoItem.scss";
import { useDispatch } from "react-redux";
import { showDetailsActions } from "../../redux/features/showDetails";
import { cryptosSagaActions } from "../../redux/saga/cryptos/slice/cryptosSlice";

interface ISections {
  tabs: {name: string}[]
}

type ICryptoItemProps = ISections & ICoin

export default function CryptoItem({ ...props }: ICryptoItemProps) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showDetailsActions.setShowDetails(true));
    dispatch(cryptosSagaActions.sagaGetCoinDataById(props.item.id));
  };

  return (
    <div className="crypto_item_container" onClick={handleClick}>
      <div className="crypto_item_container__crypto">
        <img
          className="crypto_item_container__crypto__img"
          src={props.item.large}
          alt={props.item.name}
        />
        <span className="crypto_item_container__crypt o__name">
          {props.item.name.length > 10
            ? props.item.name.slice(0, 10) + "..."
            : props.item.name}
        </span>
      </div>
      <div
        className="crypto_item_container__specs"
        style={{ gridTemplateColumns: `repeat(3, 100px)` }}
      >
        {props.tabs.map(tab => <span className="crypto_item_container__specs__data">{tab.name}</span>)}
      </div>
    </div>
  );
}
