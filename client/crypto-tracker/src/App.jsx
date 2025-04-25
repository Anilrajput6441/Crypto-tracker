import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connectToBinanceStream } from "./features/crypto/binanceSocket";
import CryptoTable from "./features/crypto/CryptoTable";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    connectToBinanceStream(dispatch);
  }, []);

  return (
    <div className="App flex flex-col justify-center items-center w-[100vw] h-[100vh]">
      <h1 className="p-5 font-serif w-full bg-black text-center">
        Live Crypto Tracker
      </h1>
      <CryptoTable />
    </div>
  );
}
export default App;
