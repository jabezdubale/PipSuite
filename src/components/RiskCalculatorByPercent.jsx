import { useEffect } from "react";
import useRiskCalculatorStore from "../stores/RiskCalculatorStore";
import { apiGet } from "../lib/api";

const RiskCalculatorByPercent = ({ selectedAsset }) => {
  useEffect(() => {
    const getAllAssets = async () => {
      try {
        const allAssets = await apiGet("Assets");
        setAllAssets(allAssets);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };

    getAllAssets();
  }, []);

  const allAssets = useRiskCalculatorStore((state) => state.allAssets);
  const setAllAssets = useRiskCalculatorStore((state) => state.setAllAssets);

  const assetPair = useRiskCalculatorStore((state) => state.assetPair);
  const setAssetPair = useRiskCalculatorStore((state) => state.setAssetPair);

  const entryPrice = useRiskCalculatorStore((state) => state.entryPrice);
  const setEntryPrice = useRiskCalculatorStore((state) => state.setEntryPrice);

  const takeProfit = useRiskCalculatorStore((state) => state.takeProfit);
  const setTakeProfit = useRiskCalculatorStore((state) => state.setTakeProfit);

  const stopLoss = useRiskCalculatorStore((state) => state.stopLoss);
  const setStopLoss = useRiskCalculatorStore((state) => state.setStopLoss);

  // prettier-ignore
  const accountBalance = useRiskCalculatorStore((state) => state.accountBalance);
  // prettier-ignore
  const setAccountBalance = useRiskCalculatorStore((state) => state.setAccountBalance);

  // prettier-ignore
  const riskPercentage = useRiskCalculatorStore((state) => state.riskPercentage);
  // prettier-ignore
  const setRiskPercentage = useRiskCalculatorStore((state) => state.setRiskPercentage);

  const leverage = useRiskCalculatorStore((state) => state.leverage);
  const setLeverage = useRiskCalculatorStore((state) => state.setLeverage);

  const direction = useRiskCalculatorStore((state) => state.direction);
  const setDirection = useRiskCalculatorStore((state) => state.setDirection);

  const lotSize = useRiskCalculatorStore((state) => state.lotSize);
  const setLotSize = useRiskCalculatorStore((state) => state.setLotSize);

  const TpPoint = useRiskCalculatorStore((state) => state.TpPoint);
  const setTpPoint = useRiskCalculatorStore((state) => state.setTpPoint);

  const SLPoint = useRiskCalculatorStore((state) => state.SLPoint);
  const setSLPoint = useRiskCalculatorStore((state) => state.setSLPoint);

  const calculated = useRiskCalculatorStore((state) => state.calculated);
  // prettier-ignore
  const setCalculatedTrue = useRiskCalculatorStore((state) => state.setCalculatedTrue);
  // prettier-ignore
  const setCalculatedFalse = useRiskCalculatorStore((state) => state.setCalculatedFalse);

  const setShowAssetPairFalse = useRiskCalculatorStore(
    (state) => state.setShowAssetPairFalse
  );

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!selectedAsset) return;

    const entry = Number(entryPrice);
    const tp = Number(takeProfit);
    const sl = Number(stopLoss);
    const bal = Number(accountBalance);
    const pct = Number(riskPercentage);
    const cs = Number(selectedAsset.contractSize);
    const tick = Number(selectedAsset.tick);
    const pip = Number(selectedAsset.pip);

    if (![entry, tp, sl, bal, pct, cs, tick, pip].every(Number.isFinite))
      return;

    const snap = (v) => Math.round(v / tick) * tick;
    const entryQ = snap(entry),
      tpQ = snap(tp),
      slQ = snap(sl);

    const longOrShort = tpQ >= entryQ ? "Long" : "Short";
    setDirection(longOrShort);
    setCalculatedTrue();

    const tpPoints = Math.abs(tpQ - entryQ);
    const slPoints = Math.abs(entryQ - slQ);

    setTpPoint(Number(tpPoints.toFixed(5)));
    setSLPoint(Number(slPoints.toFixed(5)));

    const riskAmount = bal * (pct / 100);
    const denom = slPoints * cs;
    const lots = denom > 0 ? riskAmount / denom : 0;
    setLotSize(lots);
    setShowAssetPairFalse();
  };

  const handleSelectAssetPair = (e) => {
    const value = e.target.value;
    setAssetPair(value);
  };

  return (
    <div>
      <form
        onSubmit={handleCalculate}
        className="flex flex-col justify-center items-center"
      >
        <div className="grid grid-cols-2 w-full gap-y-3 my-5">
          <div className="flex flex-col gap-1 mr-3">
            <label htmlFor="assetPair">Asset Pair</label>
            <select
              id="assetPair"
              className="border border-main-border p-2 rounded-xl"
              value={assetPair}
              required
              onChange={handleSelectAssetPair}
            >
              <option value="" className="bg-secondary-Background"></option>
              {allAssets.map((assetData) => (
                <option
                  className="bg-secondary-Background"
                  value={assetData.symbol}
                  key={assetData.id}
                >
                  {assetData.symbol}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1 mr-3">
            <label htmlFor="entryPrice">Entry Price</label>
            <input
              className="border border-main-border p-2 rounded-xl"
              autoComplete="off"
              type="text"
              id="entryPrice"
              value={entryPrice}
              required
              onChange={(e) => setEntryPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1 mr-3">
            <label htmlFor="takeProfit">Take-Profit</label>
            <input
              className="border border-main-border p-2 rounded-xl"
              autoComplete="off"
              type="text"
              id="takeProfit"
              value={takeProfit}
              required
              onChange={(e) => setTakeProfit(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1 mr-3">
            <label htmlFor="stopLoss">Stop-Loss</label>
            <input
              className="border border-main-border p-2 rounded-xl"
              autoComplete="off"
              type="text"
              id="stopLoss"
              value={stopLoss}
              required
              onChange={(e) => setStopLoss(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1 mr-3">
            <label htmlFor="accountBalance">Account Balance($)</label>
            <input
              className="border border-main-border p-2 rounded-xl"
              autoComplete="off"
              type="text"
              id="accountBalance"
              value={accountBalance}
              required
              onChange={(e) => setAccountBalance(e.target.value)}
            />
          </div>

          {/* <div className="flex flex-col gap-1 mr-3">
            <label htmlFor="lotSize">Lot Size</label>
            <input
              className="border border-main-border p-2 rounded-xl"
              type="text"
              id="lotSize"
              value={lotSize}
              required
              onChange={(e) => setLotSize(e.target.value)}
            />
          </div> */}

          <div className="flex flex-col gap-1 mr-3">
            <label htmlFor="riskPercentage">Risk Percentage</label>
            <input
              className="border border-main-border p-2 rounded-xl"
              autoComplete="off"
              type="text"
              id="riskPercentage"
              value={riskPercentage}
              required
              onChange={(e) => setRiskPercentage(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1 mr-3">
            <label htmlFor="leverage">Leverage</label>
            <input
              className="border border-main-border p-2 rounded-xl"
              autoComplete="off"
              type="text"
              id="leverage"
              value={leverage}
              required
              onChange={(e) => setLeverage(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="border border-brand-green bg-brand-green/30 p-2 rounded-xl w-[80%] cursor-pointer"
        >
          Calculate Risk
        </button>
      </form>
    </div>
  );
};

export default RiskCalculatorByPercent;
