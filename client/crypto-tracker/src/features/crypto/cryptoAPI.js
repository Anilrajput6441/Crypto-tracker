import { updateAssets } from "./cryptoSlice";

export function simulateCryptoUpdates(assets, dispatch) {
  setInterval(() => {
    const updated = assets.map((asset) => ({
      ...asset,
      price: +(asset.price * (1 + (Math.random() - 0.5) / 100)).toFixed(2),
      change1h: +(Math.random() * 2 - 1).toFixed(2),
      change24h: +(Math.random() * 4 - 2).toFixed(2),
      change7d: +(Math.random() * 10).toFixed(2),
      volume24h: asset.volume24h + Math.floor(Math.random() * 1000000),
    }));
    dispatch(updateAssets(updated));
  }, 1500);
}
