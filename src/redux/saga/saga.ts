import { all } from "redux-saga/effects";
import { cryptosSagas } from "./cryptos/sagas";

export const SAGAS_FLOW_NAMES = {
    GET_TRENDING_CRYPTOS: "GET_TRENDING_CRYPTOS",
    GET_COIN_DATA_BY_ID: "GET_COIN_DATA_BY_ID",
    GET_SEARCH_RESULTS: "GET_SEARCH_RESULTS",
}

export default function* rootSaga() {
    yield all([ ...cryptosSagas ])
}