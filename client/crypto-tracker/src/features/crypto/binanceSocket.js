export const connectToBinanceStream = (dispatch) => {
  // WebSocket URL to listen for 5 crypto pairs
  const socket = new WebSocket(
    "wss://stream.binance.com:9443/stream?streams=btcusdt@ticker/ethusdt@ticker/bnbusdt@ticker/xrpusdt@ticker/solusdt@ticker"
  );

  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    const data = message.data;
    const symbol = data.s.replace("USDT", "");

    // Prepare asset update
    const assetUpdate = {
      symbol,
      price: parseFloat(data.c),
      change24h: parseFloat(data.P),
      volume24h: parseFloat(data.v),
    };
    console.log(assetUpdate);

    // Dispatch to Redux for each asset update
    dispatch({
      type: "crypto/updateLiveData",
      payload: assetUpdate,
    });
  };

  socket.onerror = console.error;
};
