import { createSlice } from "@reduxjs/toolkit";
import { sampleCrypto } from "../../data/sampleData";

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: sampleCrypto,
  reducers: {
    updateLiveData: (state, action) => {
      const asset = state.find((c) => c.symbol === action.payload.symbol);
      if (asset) {
        asset.price = action.payload.price;
        asset.change24h = action.payload.change24h;
        asset.volume24h = action.payload.volume24h;
      }
    },
  },
});

export const { updateAssets } = cryptoSlice.actions;
export default cryptoSlice.reducer;
