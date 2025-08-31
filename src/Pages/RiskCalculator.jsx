import { useEffect, useState, useMemo } from "react";
import { apiGet } from "../lib/api";
import MainLayout from "../layouts/MainLayout";
import RiskCalculatorByPercent from "../components/RiskCalculatorByPercent";
import RiskCalculatorByLot from "../components/RiskCalculatorByLot";
import useRiskCalculatorStore from "../stores/RiskCalculatorStore";

const RiskCalculator = () => {
  const [allAssets, setAllAssets] = useState([]);
  const assetPair = useRiskCalculatorStore((state) => state.assetPair);

  useEffect(() => {
    apiGet("Assets").then((data) => setAllAssets(data));
  }, []);

  const selectedAsset = useMemo(
    () => allAssets.find((state) => state.symbol === assetPair),
    [allAssets, assetPair]
  );

  const calculated = useRiskCalculatorStore((state) => state.calculated);
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

  const [byRisk, setByRisk] = useState(true);

  return (
    <div>
      <MainLayout>
        <div className="w-full flex justify-center m-5">
          <div className="text-primary-headings text-lg gap-5 flex flex-col items-center justify-center sm:w-[80%] md:w-[60%] lg:w-[50%]">
            <div className="w-full">
              <p className="text-4xl mb-4">Risk Calculator</p>
              <p>Calculate your risk and profit amount.</p>
            </div>
            <div className="w-full">
              <div className="flex justify-start items-center ml-[5%] ">
                <div
                  onClick={() => setByRisk(true)}
                  className={`relative left-0 text-xl border-t border-x border-main-border py-3 px-3 rounded-t-xl ${
                    byRisk ? "-bottom-0.5 bg-main-Background" : "bottom-0"
                  }`}
                >
                  <p>By Risk %</p>
                </div>
                <div
                  onClick={() => setByRisk(false)}
                  className={`relative left-4 text-xl border-t border-x border-main-border py-3 px-3 rounded-t-xl ${
                    byRisk ? "bottom-0" : "-bottom-0.5 bg-main-Background"
                  }`}
                >
                  <p>By Lot Size</p>
                </div>
              </div>
              <div className="border border-main-border rounded-xl p-5">
                {byRisk ? (
                  <RiskCalculatorByPercent allAssets={allAssets} />
                ) : (
                  <RiskCalculatorByLot allAssets={allAssets} />
                )}
              </div>
            </div>
            <div className="h-30 bg-secondary-Background w-full rounded-xl p-5">
              {assetPair ? (
                <div>
                  <p>
                    <span className="font-bold">Asset Pair: </span>
                    {selectedAsset?.symbol}
                  </p>
                  <div className="ml-5 text-base italic flex gap-3">
                    <p>Contract Size: {selectedAsset?.contractSize}</p>
                    <p>pip: {selectedAsset?.pip}</p>
                    <p>tick: {selectedAsset?.tick}</p>
                  </div>
                  <div className={`${calculated ? "" : "hidden"}`}>
                    <p>
                      <span className="font-bold">TP: </span> (entry - take
                      profit) = {entryPrice} - {takeProfit} ={" "}
                      {entryPrice - takeProfit}
                    </p>
                  </div>
                </div>
              ) : (
                <div>Please Add your values to see your potential PnL</div>
              )}
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default RiskCalculator;
