import { put, call, takeLatest, fork } from "redux-saga/effects";
import { ITrendingCryptos } from "../../../interfaces/ITrending";
import { SAGAS_FLOW_NAMES } from "../saga";
import { cryptosActions } from "./slice";
import { GetTrendingCryptos } from '../../../../models/services/cryptos/getTrendingCryptos'
import { GetCoinDataById } from '../../../../models/services/cryptos/getCoinDataById'
import { GetSearchResults } from '../../../../models/services/cryptos/getSearchResults'
import { ICoinData } from "../../../interfaces/ICoinData";
import { ISearchResults } from "../../../interfaces/ISearchResults";

function* getTrendingCryptos() {
  const method = "[📈] getTrendingCryptos"
  console.log(method);

  const url = `/search/trending`

  try {
    yield put(cryptosActions.setIsLoading(true))

    const data: ITrendingCryptos = yield call(GetTrendingCryptos, url)
    console.log(`${method} - getTrendingCryptos: ${JSON.stringify(data, null, 2)}`);

    yield put(cryptosActions.setTrendingCryptos(data));
  } catch (error) {
    yield put(cryptosActions.setIsLoading(false));
    console.log(`${method} - error: ${error}`);
    console.log(`${method} - error: ${JSON.stringify(error, null, 2)}`);
  } finally {
    yield put(cryptosActions.setIsLoading(false));
    console.log(`${method} - end`);
  }
}

function* getCoinDataById(action: any) {
  const method = "[💸🔧] getCoinDataById"
  console.log(method);

  const url = `/coins/${action.payload}`

  try {
    yield put(cryptosActions.setIsLoadingDetails(true))

    const data: ICoinData = yield call(GetCoinDataById, url)
    console.log(`${method} - getCoinDataById: ${JSON.stringify(data, null, 2)}`);

    yield put(cryptosActions.setCoinDataById(data));
  } catch (error) {
    yield put(cryptosActions.setIsLoadingDetails(false));
    console.log(`${method} - error: ${error}`);
    console.log(`${method} - error: ${JSON.stringify(error, null, 2)}`);
  } finally {
    yield put(cryptosActions.setIsLoadingDetails(false));
    console.log(`${method} - end`);
  }
}

function* getSearchResults(action: any) {
  const method = "[🔎💸] getSearchResults"
  console.log(method);

  const url = `/search?query=${action.payload}`

  try {
    yield put(cryptosActions.setIsLoading(true))

    const data: ISearchResults = yield call(GetSearchResults, url)
    console.log(`${method} - getCoinDataById: ${JSON.stringify(data, null, 2)}`);

    yield put(cryptosActions.setSearchResults(data));
  } catch (error) {
    yield put(cryptosActions.setIsLoading(false));
    console.log(`${method} - error: ${error}`);
    console.log(`${method} - error: ${JSON.stringify(error, null, 2)}`);
  } finally {
    yield put(cryptosActions.setIsLoading(false));
    console.log(`${method} - end`);
  }
}

function* watchGetTrendingCryptos() {
  yield takeLatest(SAGAS_FLOW_NAMES.GET_TRENDING_CRYPTOS, getTrendingCryptos)
}

function* watchGetCoinDataById() {
  yield takeLatest(SAGAS_FLOW_NAMES.GET_COIN_DATA_BY_ID, getCoinDataById)
}

function* watchGetSearchResults() {
  yield takeLatest(SAGAS_FLOW_NAMES.GET_SEARCH_RESULTS, getSearchResults)
}

export const cryptosSagas = [fork(watchGetTrendingCryptos), fork(watchGetCoinDataById), fork(watchGetSearchResults)]