let socket;

export const connectBinanceSocket = (onPriceUpdate) => {
  //   const streamNames = ["btcusdt", "ethusdt", "xrpusdt", "bnbusdt", "adausdt"];
  const url = `wss://stream.binance.com:9443/stream?streams=btcusdt@trade/ethusdt@trade`;

  socket = new WebSocket(url);

  socket.onmessage = (msg) => {
    const payload = JSON.parse(msg.data); // multi-stream format
    const data = payload.data;

    if (!data || !data.s || !data.p) return;

    const symbol = data.s.toLowerCase(); // 'btcusdt'
    const price = parseFloat(data.p);
    onPriceUpdate({ [symbol]: price });
  };

  socket.onerror = (err) => console.error("WebSocket error:", err);

  socket.onclose = () => {
    console.warn("WebSocket closed. Reconnecting...");
    setTimeout(() => connectBinanceSocket(onPriceUpdate), 2000);
  };
};

export const closeBinanceSocket = () => {
  if (socket) socket.close();
};
