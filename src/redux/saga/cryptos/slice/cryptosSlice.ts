import { createSlice } from "@reduxjs/toolkit";
import { ITrendingCryptos } from "../../../../interfaces/ITrending";
import { SAGAS_FLOW_NAMES } from "../../saga";
import { ICoinData } from "../../../../interfaces/ICoinData";
import { ISearchResults } from "../../../../interfaces/ISearchResults";

interface ICryptosSliceInitalState {
  isLoading: boolean;
  isLoadingDetails: boolean;
  trending_cryptos:ITrendingCryptos;
  coin_data: ICoinData;
  search_results: ISearchResults;
}

const initialState: ICryptosSliceInitalState = {
  isLoading: false,
  isLoadingDetails: false,
  trending_cryptos: {} as ITrendingCryptos,
  coin_data: {} as ICoinData,
  search_results: {} as ISearchResults
}

const cryptosSlice = createSlice({
  name: 'cryptos',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isLoadingDetails = false

      state.trending_cryptos = {} as ITrendingCryptos
      state.coin_data = {} as ICoinData
      state.search_results = {} as ISearchResults
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setIsLoadingDetails: (state, action) => {
      state.isLoadingDetails = action.payload
    },
    setTrendingCryptos: (state, action) => {
      state.trending_cryptos = action.payload
    },
    setCoinDataById: (state, action) => {
      state.coin_data = action.payload
    },
    setSearchResults: (state, action) => {
      state.search_results = action.payload
    }
  }
})

const getisLoading = ({ cryptos }: { cryptos: ICryptosSliceInitalState }) => cryptos.isLoading

const getIsLoadingDetails = ({ cryptos }: { cryptos: ICryptosSliceInitalState }) => cryptos.isLoadingDetails

const getTrendingCryptos = ({ cryptos }: { cryptos: ICryptosSliceInitalState }) => cryptos.trending_cryptos

const getCoinDataById = ({ cryptos }: { cryptos: ICryptosSliceInitalState }) => cryptos.coin_data

const getSearchResults = ({ cryptos }: { cryptos: ICryptosSliceInitalState }) => cryptos.search_results

export const cryptosSelector = {
  getisLoading,
  getIsLoadingDetails,
  getTrendingCryptos,
  getCoinDataById,
  getSearchResults,
}

export const { actions, reducer } = cryptosSlice

export const cryptosSagaActions = {
  sagaGetTrendingCryptos: ({ type: SAGAS_FLOW_NAMES.GET_TRENDING_CRYPTOS }),
  sagaGetCoinDataById: (id: string) => ({ type: SAGAS_FLOW_NAMES.GET_COIN_DATA_BY_ID, payload: id }),
  sagaGetSearchResults: (query: FormDataEntryValue | null) => ({ type: SAGAS_FLOW_NAMES.GET_SEARCH_RESULTS, payload: query })
}