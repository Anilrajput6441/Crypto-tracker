import React, { useState } from "react";
import { useSelector } from "react-redux";
import PercentageChange from "../../components/PercentageChange";
import Chart from "../../components/Chart";

function CryptoTable() {
  const crypto = useSelector((state) => state.crypto);
  const [expandedRows, setExpandedRows] = useState({});

  const toggleRow = (id) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full bg-[#1E1E1E] p-5  text-white overflow-x-auto">
      <table className="w-full text-sm">
        <thead className=" bg-[#121212]">
          <tr>
            <th className="py-3 px-2 hidden md:table-cell">#</th>
            <th>Logo</th>
            <th className="hidden md:table-cell">Name</th>
            <th className="hidden md:table-cell">Symbol</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th className="hidden md:table-cell">7d %</th>
            <th className="hidden md:table-cell">Market Cap</th>
            <th>24h Volume</th>
            <th className="hidden md:table-cell">Circulating</th>
            <th className="hidden md:table-cell">Max Supply</th>
            <th className="hidden md:table-cell">7d Chart</th>
          </tr>
        </thead>
        <tbody>
          {crypto.map((c, idx) => (
            <React.Fragment key={c.id}>
              {/* Basic Row (always visible) */}
              <tr
                onClick={() => toggleRow(c.id)}
                className="md:table-row cursor-pointer border-b border-gray-700"
              >
                <td className="py-3 px-2 hidden md:table-cell">{idx + 1}</td>
                <td className="px-2">
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="w-8 md:w-20 h-8 md:h-20  contrast-125"
                  />
                </td>
                <td className="hidden md:table-cell px-2">{c.name}</td>
                <td className="hidden md:table-cell px-2">{c.symbol}</td>
                <td className="px-2">${c.price.toLocaleString()}</td>
                <td className=" px-2">
                  <PercentageChange value={c.change1h} />
                </td>
                <td className="px-2">
                  <PercentageChange value={c.change24h} />
                </td>
                <td className="hidden md:table-cell px-2">
                  <PercentageChange value={c.change7d} />
                </td>
                <td className="hidden md:table-cell px-2">
                  ${c.marketCap.toLocaleString()}
                </td>
                <td className="px-2">${c.volume24h.toLocaleString()}</td>
                <td className="hidden md:table-cell px-2">
                  {c.circulatingSupply}B
                </td>
                <td className="hidden md:table-cell px-2">{c.maxSupply}B</td>
                <td className="hidden md:table-cell  px-2">
                  <Chart src={c.chart} />
                </td>
              </tr>

              {/* Expanded Details for Mobile */}
              {expandedRows[c.id] && (
                <tr className="md:hidden">
                  <td colSpan={13} className="p-4 bg-[#2a2a2a] rounded-md">
                    <p
                      className="text-xl flex justify-end pl-5"
                      onClick={() => toggleRow(c.id)}
                    >
                      x
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <strong>Name:</strong> {c.name}
                      </div>
                      <div>
                        <strong>Symbol:</strong> {c.symbol}
                      </div>
                      <div>
                        <strong>1h %:</strong>{" "}
                        <PercentageChange value={c.change1h} />
                      </div>
                      <div>
                        <strong>7d %:</strong>{" "}
                        <PercentageChange value={c.change7d} />
                      </div>
                      <div>
                        <strong>Market Cap:</strong> $
                        {c.marketCap.toLocaleString()}
                      </div>
                      <div>
                        <strong>Circulating:</strong> {c.circulatingSupply}B
                      </div>
                      <div>
                        <strong>Max Supply:</strong> {c.maxSupply}B
                      </div>
                      <div>
                        <strong>7d Chart:</strong> <Chart src={c.chart} />
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CryptoTable;
