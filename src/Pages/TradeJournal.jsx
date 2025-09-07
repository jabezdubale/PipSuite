import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { apiGet } from "../lib/api";
import useAuth from "../stores/auth";
import useRiskCalculatorStore from "../stores/RiskCalculatorStore";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const TradeJournal = () => {
  const allAssets = useRiskCalculatorStore((state) => state.allAssets);
  const setAllAssets = useRiskCalculatorStore((state) => state.setAllAssets);

  const user = useAuth((state) => state.user);
  const [userTrades, setUserTrades] = useState([]);
  const [filteredTrades, setFilteredTrades] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [pairFilter, setPairFilter] = useState("");
  const [directionFilter, setDirectionFilter] = useState("");
  const [sessionFilter, setSessionFilter] = useState("");
  const [pnlFilter, setPnlFilter] = useState("");
  const [pnlValueFilter, setPnlValueFilter] = useState("");
  const [RRFilter, setRRFilter] = useState("");
  const [RRValueFilter, setRRValueFilter] = useState("");
  const [strategyFilter, setStrategyFilter] = useState("");

  useEffect(() => {
    const fetchTrade = async () => {
      const res = await apiGet("Trades");
      const Trades = res.filter((eachTrades) => eachTrades.userId === user.id);
      setUserTrades(Trades);
      setFilteredTrades(Trades);
    };
    const getAllAssets = async () => {
      try {
        const allAssets = await apiGet("Assets");
        setAllAssets(allAssets);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };

    getAllAssets();
    fetchTrade();
  }, []);

  useEffect(() => {
    const filteringMachine = () => {
      let filtered = userTrades;

      pairFilter &&
        (filtered = filtered.filter((e) => e.assetPair === pairFilter));

      directionFilter &&
        (filtered = filtered.filter((e) => e.direction === directionFilter));

      sessionFilter &&
        (filtered = filtered.filter((e) => e.session === sessionFilter));

      strategyFilter &&
        (filtered = filtered.filter((e) => e.strategyIds === strategyFilter));

      if (pnlFilter && pnlValueFilter) {
        if (pnlFilter === ">=") {
          filtered = filtered.filter((e) => e.pnl >= Number(pnlValueFilter));
        } else {
          filtered = filtered.filter((e) => e.pnl <= Number(pnlValueFilter));
        }
      }

      if (RRFilter && RRValueFilter) {
        if (RRFilter === ">=") {
          filtered = filtered.filter((e) => e.rr >= Number(RRValueFilter));
        } else {
          filtered = filtered.filter((e) => e.rr <= Number(RRValueFilter));
        }
      }

      setFilteredTrades(filtered);
    };

    filteringMachine();
  }, [
    pairFilter,
    directionFilter,
    sessionFilter,
    pnlFilter,
    pnlValueFilter,
    RRFilter,
    RRValueFilter,
    strategyFilter,
  ]);

  return (
    <div>
      <MainLayout>
        <div className="text-primary-headings m-5 min-h-full">
          <p className="text-3xl">Trading Journal</p>
          <p className="text-sm text-brand-green/50 mb-4">
            Plan, execute, and review, without tab jungle
          </p>
          <div className="p-3 bg-secondary-Background mb-3 rounded-xl">
            <div
              onClick={() => setShowFilters((Prev) => !Prev)}
              className="flex justify-between items-center"
            >
              <div className=" text-lg flex gap-2 items-center mb-3">
                <CiFilter size={24} />
                <p>Filters</p>
              </div>
              {showFilters ? (
                <IoIosArrowUp
                  size={24}
                  className={`md:hidden text-brand-green`}
                />
              ) : (
                <IoIosArrowDown
                  size={24}
                  className={`md:hidden text-brand-green`}
                />
              )}
            </div>
            <div
              className={`${
                showFilters ? "" : "hidden"
              } md:flex flex-col md:flex-row md:flex-wrap px-2 md:px-0 gap-x-2 justify-start  mx-auto`}
            >
              <div className="flex flex-col bg-main-Background px-1.5 py-1 md:w-[180px] mb-2 mt-1 rounded-xl">
                <label className="text-sm" htmlFor="pair">
                  pair
                </label>
                <select
                  className="border border-main-border rounded-lg"
                  id="pair"
                  onChange={(e) => setPairFilter(e.target.value)}
                >
                  <option className="text-main-Background" value="" key={1}>
                    Any
                  </option>
                  {allAssets.map((asset) => (
                    <option
                      className="text-main-Background"
                      value={asset.symbol}
                      key={asset.id}
                    >
                      {asset.symbol}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col bg-main-Background px-1.5 py-1 md:w-[180px] mb-2 mt-1 rounded-xl">
                <label className="text-sm" htmlFor="direction">
                  Direction
                </label>
                <select
                  className="border border-main-border rounded-lg"
                  id="direction"
                  onChange={(e) => setDirectionFilter(e.target.value)}
                >
                  <option className="text-main-Background" value="">
                    Any
                  </option>
                  <option className="text-main-Background" value="long">
                    Long
                  </option>
                  <option className="text-main-Background" value="short">
                    Short
                  </option>
                </select>
              </div>

              <div className="flex flex-col bg-main-Background px-1.5 py-1 md:w-[180px] mb-2 mt-1 rounded-xl">
                <label className="text-sm" htmlFor="session">
                  Session
                </label>
                <select
                  className="border border-main-border rounded-lg"
                  id="session"
                  onChange={(e) => setSessionFilter(e.target.value)}
                >
                  <option className="text-main-Background" value="">
                    Any
                  </option>
                  <option className="text-main-Background" value="NY">
                    NY
                  </option>
                  <option className="text-main-Background" value="LDN">
                    LDN
                  </option>
                  <option className="text-main-Background" value="TKO">
                    TKO
                  </option>
                  <option className="text-main-Background" value="SDY">
                    SDY
                  </option>
                </select>
              </div>

              <div className="flex items-end gap-1 bg-main-Background px-1.5 py-1 md:w-[180px] mb-2 mt-1 rounded-xl">
                <div className="flex flex-col">
                  <label className="text-sm" htmlFor="pnl">
                    PnL
                  </label>
                  <select
                    className="border border-main-border rounded-lg px-2"
                    id="pnl"
                    onChange={(e) => setPnlFilter(e.target.value)}
                  >
                    <option className="text-main-Background" value="">
                      Any
                    </option>
                    <option className="text-main-Background" value=">=">
                      {">"}=
                    </option>
                    <option className="text-main-Background" value="<=">
                      {"<"}=
                    </option>
                  </select>
                </div>
                <input
                  type="text"
                  placeholder="Enter Value"
                  value={pnlFilter ? pnlValueFilter : ""}
                  className="border border-main-border rounded w-full"
                  onChange={(e) => setPnlValueFilter(e.target.value)}
                />
              </div>

              <div className="flex items-end gap-1 bg-main-Background px-1.5 py-1 md:w-[180px] mb-2 mt-1 rounded-xl">
                <div className="flex flex-col">
                  <label className="text-sm" htmlFor="rr">
                    R:R
                  </label>
                  <select
                    className="border border-main-border rounded-lg px-2"
                    id="rr"
                    onChange={(e) => setRRFilter(e.target.value)}
                  >
                    <option className="text-main-Background" value="">
                      Any
                    </option>
                    <option className="text-main-Background" value=">=">
                      {">"}=
                    </option>
                    <option className="text-main-Background" value="<=">
                      {"<"}=
                    </option>
                  </select>
                </div>
                <input
                  type="text"
                  placeholder="Enter Value"
                  value={RRFilter ? RRValueFilter : ""}
                  className="border border-main-border rounded w-full"
                  onChange={(e) => setRRValueFilter(e.target.value)}
                />
              </div>

              <div className="flex flex-col bg-main-Background px-1.5 py-1 md:w-[180px] mb-2 mt-1 rounded-xl">
                <label className="text-sm" htmlFor="strategy">
                  Strategy
                </label>
                <select
                  className="border border-main-border rounded-lg"
                  id="strategy"
                >
                  <option
                    className="text-main-Background"
                    value=""
                    onChange={(e) => setDirectionFilter(e.target.value)}
                  >
                    Any
                  </option>
                  <option className="text-main-Background" value="fvg">
                    fvg
                  </option>
                  <option className="text-main-Background" value="bos">
                    bos
                  </option>
                  <option className="text-main-Background" value="range">
                    range
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden max-w-full bg-secondary-Background rounded-xl overflow-x-auto overscroll-x-contain">
            <table className="table-fixed min-w-[900px] text-primary-headings ">
              <thead>
                <tr className="">
                  <th className="min-w-12 px-2 py-2 border-b border-r border-main-border">
                    No.
                  </th>
                  <th className="min-w-32 px-2 py-2 border-b border-r border-main-border">
                    Asset Pair
                  </th>
                  <th className="min-w-32 px-2 border-b border-r border-main-border">
                    Direction
                  </th>
                  <th className="min-w-32 px-2 border-b border-r border-main-border">
                    Entry
                  </th>
                  <th className="min-w-32 px-2 border-b border-r border-main-border">
                    TP
                  </th>
                  <th className="min-w-32 px-2 border-b border-r border-main-border">
                    SL
                  </th>
                  <th className="min-w-32 px-2 border-b border-r border-main-border">
                    R:R
                  </th>
                  <th className="min-w-32 px-2 border-b border-r border-main-border">
                    Lotsize
                  </th>
                  <th className="min-w-32 px-2 border-b border-r border-main-border">
                    PnL
                  </th>
                  <th className="min-w-32 px-2 border-b border-r border-main-border">
                    Session
                  </th>
                  <th className="min-w-32 max-w-64 px-2 border-b border-r border-main-border">
                    Notes
                  </th>
                  <th className="min-w-32 px-2 border-b border-r border-main-border">
                    Strategies
                  </th>
                  <th className="min-w-32 px-2 border-b border-r border-main-border">
                    Attachments
                  </th>
                  <th className="min-w-32 px-2 border-b border-r border-main-border">
                    Broker
                  </th>
                  <th className="min-w-32 px-2 border-b border-r border-main-border">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredTrades.map((eachUserTrade, i) => (
                  <tr key={eachUserTrade.id} className="gap-2">
                    <td className="text-center px-2 py-2 border-r border-main-border">
                      {i + 1}
                    </td>
                    <td className="text-center px-2 py-2 border-r border-main-border">
                      {eachUserTrade.assetPair}
                    </td>
                    <td className="text-center px-2 border-r border-main-border">
                      {eachUserTrade.direction}
                    </td>
                    <td className="text-center px-2 border-r border-main-border">
                      {eachUserTrade.entryPrice}
                    </td>
                    <td className="text-center px-2 border-r border-main-border">
                      {eachUserTrade.takeProfit}
                    </td>
                    <td className="text-center px-2 border-r border-main-border">
                      {" "}
                      {eachUserTrade.stopLoss}{" "}
                    </td>
                    <td className="text-center px-2 border-r border-main-border">
                      1:{eachUserTrade.rr}
                    </td>
                    <td className="text-center px-2 border-r border-main-border">
                      {eachUserTrade.lotSize}
                    </td>
                    <td className="text-center px-2 border-r border-main-border">
                      {eachUserTrade.pnl}
                    </td>
                    <td className="text-center px-2 border-r border-main-border">
                      {eachUserTrade.session}
                    </td>
                    <td className="min-w-32 max-w-64 text-center px-2 border-r border-main-border">
                      <div className="[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full overflow-x-auto whitespace-nowrap overscroll-x-contain ">
                        {eachUserTrade.journal}
                      </div>
                    </td>
                    <td className="text-center px-2 border-r border-main-border">
                      {eachUserTrade.strategyIds}
                    </td>
                    <td className="text-center px-2 border-r border-main-border">
                      file
                    </td>
                    <td className="text-center px-2 border-r border-main-border">
                      {eachUserTrade.broker}
                    </td>
                    <td className="text-center px-2 border-r border-main-border">
                      Actions
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default TradeJournal;
