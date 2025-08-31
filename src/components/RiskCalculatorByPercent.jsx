import useRiskCalculatorStore from "../stores/RiskCalculatorStore";

const RiskCalculatorByPercent = ({ allAssets }) => {
  const setCalculated = useRiskCalculatorStore((state) => state.setCalculated);

  const assetPair = useRiskCalculatorStore((state) => state.assetPair);
  const entryPrice = useRiskCalculatorStore((state) => state.entryPrice);
  const takeProfit = useRiskCalculatorStore((state) => state.takeProfit);
  const stopLoss = useRiskCalculatorStore((state) => state.stopLoss);
  const accountBalance = useRiskCalculatorStore(
    (state) => state.accountBalance
  );
  const riskPercentage = useRiskCalculatorStore(
    (state) => state.riskPercentage
  );
  const lotSize = useRiskCalculatorStore((state) => state.lotSize);
  const leverage = useRiskCalculatorStore((state) => state.leverage);
  const setAssetPair = useRiskCalculatorStore((state) => state.setAssetPair);
  const setEntryPrice = useRiskCalculatorStore((state) => state.setEntryPrice);
  const setTakeProfit = useRiskCalculatorStore((state) => state.setTakeProfit);
  const setStopLoss = useRiskCalculatorStore((state) => state.setStopLoss);
  const setAccountBalance = useRiskCalculatorStore(
    (state) => state.setAccountBalance
  );
  const setRiskPercentage = useRiskCalculatorStore(
    (state) => state.setRiskPercentage
  );
  const setLotSize = useRiskCalculatorStore((state) => state.setLotSize);
  const setLeverage = useRiskCalculatorStore((state) => state.setLeverage);
  const handleSubmit = (e) => {
    e.preventDefault();
    setCalculated();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        <div className="grid grid-cols-2 w-full gap-y-3 my-5">
          <div className="flex flex-col gap-1 mr-3">
            <label htmlFor="assetPair">Asset Pair</label>
            <select
              id="assetPair"
              className="border border-main-border p-2 rounded-xl"
              value={assetPair}
              onChange={(e) => setAssetPair(e.target.value)}
            >
              <option value=""></option>
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
              type="text"
              id="entryPrice"
              value={entryPrice}
              onChange={(e) => setEntryPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1 mr-3">
            <label htmlFor="takeProfit">Take-Profit</label>
            <input
              className="border border-main-border p-2 rounded-xl"
              type="text"
              id="takeProfit"
              value={takeProfit}
              onChange={(e) => setTakeProfit(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1 mr-3">
            <label htmlFor="stopLoss">Stop-Loss</label>
            <input
              className="border border-main-border p-2 rounded-xl"
              type="text"
              id="stopLoss"
              value={stopLoss}
              onChange={(e) => setStopLoss(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1 mr-3">
            <label htmlFor="accountBalance">Account Balance($)</label>
            <input
              className="border border-main-border p-2 rounded-xl"
              type="text"
              id="accountBalance"
              value={accountBalance}
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
              onChange={(e) => setLotSize(e.target.value)}
            />
          </div> */}

          <div className="flex flex-col gap-1 mr-3">
            <label htmlFor="riskPercentage">Risk Percentage</label>
            <input
              className="border border-main-border p-2 rounded-xl"
              type="text"
              id="riskPercentage"
              value={riskPercentage}
              onChange={(e) => setRiskPercentage(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1 mr-3">
            <label htmlFor="leverage">Leverage</label>
            <input
              className="border border-main-border p-2 rounded-xl"
              type="text"
              id="leverage"
              value={leverage}
              onChange={(e) => setLeverage(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="border border-brand-green bg-brand-green/30 p-2 rounded-xl w-[80%]"
        >
          Calculate Risk
        </button>
      </form>
    </div>
  );
};

export default RiskCalculatorByPercent;
