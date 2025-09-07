import { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import useAuth from "../stores/auth";
import useRiskCalculatorStore from "../stores/RiskCalculatorStore";
import { apiGet, apiPost } from "../lib/api";
import useNewTrade from "../stores/NewTradeStore";
import { useNavigate } from "react-router-dom";

const NewTrade = () => {
  useEffect(() => {
    const getAllAssets = async () => {
      try {
        const allAsset = await apiGet("Assets");
        setAllAssets(allAsset);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };

    getAllAssets();
  }, []);

  const user = useAuth((state) => state.user);

  const allAssets = useRiskCalculatorStore((state) => state.allAssets);
  const setAllAssets = useRiskCalculatorStore((state) => state.setAllAssets);

  const assetPair = useNewTrade((state) => state.assetPair);
  const setassetPair = useNewTrade((state) => state.setassetPair);

  const broker = useNewTrade((state) => state.broker);
  const setbroker = useNewTrade((state) => state.setbroker);

  const direction = useNewTrade((state) => state.direction);
  const setdirection = useNewTrade((state) => state.setdirection);

  const entryPrice = useNewTrade((state) => state.entryPrice);
  const setentryPrice = useNewTrade((state) => state.setentryPrice);

  const takeProfit = useNewTrade((state) => state.takeProfit);
  const settakeProfit = useNewTrade((state) => state.settakeProfit);

  const stopLoss = useNewTrade((state) => state.stopLoss);
  const setstopLoss = useNewTrade((state) => state.setstopLoss);

  const riskPercent = useNewTrade((state) => state.riskPercent);
  const setriskPercent = useNewTrade((state) => state.setriskPercent);

  const riskAmount = useNewTrade((state) => state.riskAmount);
  const setriskAmount = useNewTrade((state) => state.setriskAmount);

  const lotSize = useNewTrade((state) => state.lotSize);
  const setlotSize = useNewTrade((state) => state.setlotSize);

  const tradedPips = useNewTrade((state) => state.tradedPips);
  const settradedPips = useNewTrade((state) => state.settradedPips);

  const session = useNewTrade((state) => state.session);
  const setsession = useNewTrade((state) => state.setsession);

  const strategyIds = useNewTrade((state) => state.strategyIds);
  const setstrategyIds = useNewTrade((state) => state.setstrategyIds);

  const rr = useNewTrade((state) => state.rr);
  const setrr = useNewTrade((state) => state.setrr);

  const pnl = useNewTrade((state) => state.pnl);
  const setpnl = useNewTrade((state) => state.setpnl);

  const journal = useNewTrade((state) => state.journal);
  const setjournal = useNewTrade((state) => state.setjournal);

  const status = useNewTrade((state) => state.status);
  const setstatus = useNewTrade((state) => state.setstatus);

  const createdAt = useNewTrade((state) => state.createdAt);
  const setcreatedAt = useNewTrade((state) => state.setcreatedAt);

  const closedAt = useNewTrade((state) => state.closedAt);
  const setclosedAt = useNewTrade((state) => state.setclosedAt);

  const attachments = useNewTrade((state) => state.attachments);
  const setattachments = useNewTrade((state) => state.setattachments);

  const navigate = useNavigate();

  const handleAddTrade = async (e) => {
    e.preventDefault();
    const tradeToSet = {
      userId: user.id,
      assetPair,
      broker,
      direction,
      entryPrice,
      takeProfit,
      stopLoss,
      riskPercent,
      riskAmount,
      lotSize,
      tradedPips,
      session,
      strategyIds,
      rr,
      pnl,
      journal,
      status,
      createdAt,
      closedAt,
      attachments,
    };

    try {
      const created = await apiPost("Trades", tradeToSet);
      navigate("/trade-journal", { replace: true });
    } catch (err) {
      alert(`Trade Creation failed: ${err.message}`);
    }

    const reseter = () => {
      setassetPair("");
      setbroker("");
      setdirection("");
      setentryPrice("");
      settakeProfit("");
      setstopLoss("");
      setriskPercent("");
      setriskAmount("");
      setlotSize("");
      settradedPips("");
      setsession("");
      setstrategyIds("");
      setrr("");
      setpnl("");
      setjournal("");
      setstatus("");
      setcreatedAt("");
      setclosedAt("");
      setattachments("");
    };

    reseter();
  };

  return (
    <MainLayout>
      <div className="text-primary-headings m-5 min-h-full">
        <p className="text-3xl">Create a new Trade</p>
        <form onSubmit={handleAddTrade} className="mt-5">
          <h1 className="text-xl">New Trade info</h1>
          <div className="flex flex-wrap sm:flex-nowrap sm:gap-5 w-full sm:w-[70dvw] lg:w-[50dvw] ">
            <div
              className="text-sm sm:text-base px-2 py-1 flex flex-col gap-1 rounded-xl bg-secondary-Background border border-main-border my-1 w-full
            "
            >
              <label htmlFor="pair">Asset Pair</label>
              <select
                id="pair"
                value={assetPair}
                onChange={(e) => setassetPair(e.target.value)}
                className="border border-main-border px-2 py-1 rounded-xl bg-secondary-Background"
              >
                <option value=""></option>
                {allAssets.map((as) => (
                  <option key={as.id} value={as.symbol}>
                    {as.symbol}
                  </option>
                ))}
              </select>
            </div>

            <div
              className="text-sm sm:text-base px-2 py-1 flex flex-col gap-1 rounded-xl bg-secondary-Background border border-main-border my-1 w-full
            "
            >
              <label htmlFor="entry">Entry Price</label>
              <input
                type="text"
                id="entry"
                value={entryPrice}
                onChange={(e) => setentryPrice(e.target.value)}
                className="border border-main-border px-2 py-1 rounded-xl"
              />
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap sm:gap-5 w-full sm:w-[70dvw] lg:w-[50dvw] ">
            <div
              className="text-sm sm:text-base px-2 py-1 flex flex-col gap-1 rounded-xl bg-secondary-Background border border-main-border my-1 w-full
            "
            >
              <label htmlFor="profit">Take Profit</label>
              <input
                type="text"
                id="profit"
                value={takeProfit}
                onChange={(e) => settakeProfit(e.target.value)}
                className="border border-main-border px-2 py-1 rounded-xl"
              />
            </div>

            <div
              className="text-sm sm:text-base px-2 py-1 flex flex-col gap-1 rounded-xl bg-secondary-Background border border-main-border my-1 w-full
            "
            >
              <label htmlFor="stoploss">Stop Loss</label>
              <input
                type="text"
                id="stoploss"
                value={stopLoss}
                onChange={(e) => setstopLoss(e.target.value)}
                className="border border-main-border px-2 py-1 rounded-xl"
              />
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap sm:gap-5 w-full sm:w-[70dvw] lg:w-[50dvw] ">
            <div
              className="text-sm sm:text-base px-2 py-1 flex flex-col gap-1 rounded-xl bg-secondary-Background border border-main-border my-1 w-full
            "
            >
              <label htmlFor="riskPercent">Risk Percent</label>
              <input
                type="text"
                id="riskPercent"
                value={riskPercent}
                onChange={(e) => setriskPercent(e.target.value)}
                className="border border-main-border px-2 py-1 rounded-xl"
              />
            </div>
            <div
              className="text-sm sm:text-base px-2 py-1 flex flex-col gap-1 rounded-xl bg-secondary-Background border border-main-border my-1 w-full
            "
            >
              <label htmlFor="direction">Direction</label>
              <select
                id="direction"
                value={direction}
                onChange={(e) => setdirection(e.target.value)}
                className="border border-main-border px-2 py-1 rounded-xl bg-secondary-Background"
              >
                <option value=""></option>
                <option value="long">Long</option>
                <option value="short">Short</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap sm:gap-5 w-full sm:w-[70dvw] lg:w-[50dvw] ">
            <div
              className="text-sm sm:text-base px-2 py-1 flex flex-col gap-1 rounded-xl bg-secondary-Background border border-main-border my-1 w-full
            "
            >
              <label htmlFor="lotSize">Lot Size</label>
              <input
                type="text"
                id="lotSize"
                value={lotSize}
                onChange={(e) => setlotSize(e.target.value)}
                className="border border-main-border px-2 py-1 rounded-xl"
              />
            </div>

            <div
              className="text-sm sm:text-base px-2 py-1 flex flex-col gap-1 rounded-xl bg-secondary-Background border border-main-border my-1 w-full
            "
            >
              <label htmlFor="session">Session</label>
              <select
                id="session"
                value={session}
                onChange={(e) => setsession(e.target.value)}
                className="border border-main-border px-2 py-1 rounded-xl bg-secondary-Background"
              >
                <option value=""></option>
                <option value="NY">NY</option>
                <option value="LDN">LDN</option>
                <option value="TKO">TKO</option>
                <option value="SDY">SDY</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap sm:gap-5 w-full sm:w-[70dvw] lg:w-[50dvw] ">
            <div
              className="text-sm sm:text-base px-2 py-1 flex flex-col gap-1 rounded-xl bg-secondary-Background border border-main-border my-1 w-full
            "
            >
              <label htmlFor="riskAmount">Risk Amount</label>
              <input
                type="text"
                id="riskAmount"
                value={riskAmount}
                onChange={(e) => setriskAmount(e.target.value)}
                className="border border-main-border px-2 py-1 rounded-xl"
              />
            </div>

            <div
              className="text-sm sm:text-base px-2 py-1 flex flex-col gap-1 rounded-xl bg-secondary-Background border border-main-border my-1 w-full
            "
            >
              <label htmlFor="pnl">PnL</label>
              <input
                type="text"
                id="pnl"
                value={pnl}
                onChange={(e) => setpnl(e.target.value)}
                className="border border-main-border px-2 py-1 rounded-xl"
              />
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap sm:gap-5 w-full sm:w-[70dvw] lg:w-[50dvw] ">
            <div
              className="text-sm sm:text-base px-2 py-1 flex flex-col gap-1 rounded-xl bg-secondary-Background border border-main-border my-1 w-full
            "
            >
              <label htmlFor="rr">R:R</label>
              <input
                type="text"
                id="rr"
                value={rr}
                onChange={(e) => setrr(e.target.value)}
                className="border border-main-border px-2 py-1 rounded-xl"
              />
            </div>

            <div
              className="text-sm sm:text-base px-2 py-1 flex flex-col gap-1 rounded-xl bg-secondary-Background border border-main-border my-1 w-full
            "
            >
              <label htmlFor="journal">Note</label>
              <textarea
                type="text"
                id="journal"
                value={journal}
                onChange={(e) => setjournal(e.target.value)}
                className="border border-main-border px-2 py-1 rounded-xl"
              />
            </div>
          </div>

          <div className="flex justify-center sm:gap-5 w-full sm:w-[70dvw] lg:w-[50dvw] ">
            <button
              className="text-sm sm:text-base px-2 py-2 flex flex-col gap-1 rounded-xl bg-brand-green/30 border border-brand-green my-1 w-full sm:w-[70%]
            "
            >
              Add Trade
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default NewTrade;
