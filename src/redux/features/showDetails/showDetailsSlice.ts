import { createSlice } from "@reduxjs/toolkit";

interface ShowDetailsSliceInitalState {
  showDetails: boolean;
}

const initialState: ShowDetailsSliceInitalState = {
  showDetails: false,
}

const showDetailsSlice = createSlice({
  name: 'showDetails',
  initialState,
  reducers: {
    setShowDetails: (state, action) => {
      state.showDetails = action.payload
    },
  }
})

const getShowDetails = ({ showDetails }: { showDetails: ShowDetailsSliceInitalState }) => showDetails.showDetails

export const showDetailsSelector = {
  getShowDetails,
}

export const { actions, reducer } = showDetailsSlice