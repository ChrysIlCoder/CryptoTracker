import { combineReducers } from "@reduxjs/toolkit";
import { cryptosReducer } from "./saga/cryptos/slice";
import { showDetailsReducer } from "./features/showDetails";

export default combineReducers({
    showDetails: showDetailsReducer,

    cryptos: cryptosReducer
})