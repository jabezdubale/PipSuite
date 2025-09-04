import { useState, useMemo } from "react";
import MainLayout from "../layouts/MainLayout";
import RiskCalculatorByPercent from "../components/RiskCalculatorByPercent";
import RiskCalculatorByLot from "../components/RiskCalculatorByLot";
import useRiskCalculatorStore from "../stores/RiskCalculatorStore";
import CleanNumber from "../components/CleanNumber";
import { IoIosArrowDropdown } from "react-icons/io";
{
  /* <IoIosArrowDropdown /> */
}
import { IoIosArrowDropup } from "react-icons/io";
<IoIosArrowDropup />;

const RiskCalculator = () => {
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

  const showAssetPair = useRiskCalculatorStore((state) => state.showAssetPair);
  const setShowAssetPair = useRiskCalculatorStore(
    (state) => state.setShowAssetPair
  );
  const setShowAssetPairTrue = useRiskCalculatorStore(
    (state) => state.setShowAssetPairTrue
  );
  const setShowAssetPairFalse = useRiskCalculatorStore(
    (state) => state.setShowAssetPairFalse
  );

  const calculated = useRiskCalculatorStore((state) => state.calculated);
  // prettier-ignore
  const setCalculatedTrue = useRiskCalculatorStore((state) => state.setCalculatedTrue);
  // prettier-ignore
  const setCalculatedFalse = useRiskCalculatorStore((state) => state.setCalculatedFalse);

  const [byRisk, setByRisk] = useState(true);
  const [showDirec, setshowDirec] = useState(false);
  const [showTpCalc, setshowTpCalc] = useState(false);
  const [showSlCalc, setshowSlCalc] = useState(false);
  const [showRRCalc, setshowRRCalc] = useState(false);
  const [showRiskCalc, setshowRiskCalc] = useState(false);
  const [showLotCalc, setshowLotCalc] = useState(false);
  const [showProfCalc, setshowProfCalc] = useState(false);
  const [showMargCalc, setshowMargCalc] = useState(false);
  const unitLabel = (value) => String(value || "").replace(/_/g, " ");

  const selectedAsset = useMemo(
    () => allAssets.find((assets) => assets.symbol === assetPair) ?? null,
    [allAssets, assetPair]
  );

  return (
    <div>
      <MainLayout>
        <div className="w-full flex p-5">
          <div className=" text-primary-headings text-lg gap-5 flex flex-col items-center justify-center w-[100dvw] md:w-[80dvw] lg:w-[50dvw]">
            <div className="w-full">
              <p className="text-4xl mb-4">Risk Calculator</p>
              <p>Calculate your risk and profit amount.</p>
            </div>

            <div className="w-full">
              <div className="flex justify-start items-center ml-[5dvw] ">
                <div
                  onClick={() => {
                    setByRisk(true);
                    setCalculatedFalse();
                    setShowAssetPairTrue();
                    setLotSize(null);
                    setRiskPercentage(null);
                    setshowDirec(false);
                    setshowTpCalc(false);
                    setshowSlCalc(false);
                    setshowRRCalc(false);
                    setshowRiskCalc(false);
                    setshowLotCalc(false);
                    setshowProfCalc(false);
                    setshowMargCalc(false);
                  }}
                  className={`cursor-pointer relative left-0 text-l sm:text-xl border-t border-x border-main-border p-2 sm:p-3 rounded-t-xl ${
                    byRisk
                      ? "-bottom-1.5 sm:-bottom-0.5 bg-main-Background"
                      : "bottom-0"
                  }`}
                >
                  <p>By Risk %</p>
                </div>
                <div
                  onClick={() => {
                    setByRisk(false);
                    setCalculatedFalse();
                    setShowAssetPairTrue();
                    setLotSize("");
                    setRiskPercentage(null);
                    setshowDirec(false);
                    setshowTpCalc(false);
                    setshowSlCalc(false);
                    setshowRRCalc(false);
                    setshowRiskCalc(false);
                    setshowLotCalc(false);
                    setshowProfCalc(false);
                    setshowMargCalc(false);
                  }}
                  className={`cursor-pointer relative left-4 text-l sm:text-xl border-t border-x border-main-border p-2 sm:p-3 rounded-t-xl ${
                    byRisk
                      ? "bottom-0"
                      : "-bottom-1.5 sm:-bottom-0.5 bg-main-Background"
                  }`}
                >
                  <p>By Lot Size</p>
                </div>
              </div>
              <div className="border border-main-border rounded-xl p-5">
                {
                  //prettier-ignore
                  byRisk ? (<RiskCalculatorByPercent selectedAsset={selectedAsset} allAssets={allAssets} />) : (<RiskCalculatorByLot  selectedAsset={selectedAsset} allAssets={allAssets}/>)
                }
              </div>
            </div>

            <div className="min-h-40 bg-secondary-Background w-full rounded-xl p-5 ">
              {byRisk ? (
                <div className="text-2xl font-bold mb-3">
                  Calculate using Risk Percentage
                </div>
              ) : (
                <div className="text-2xl font-bold mb-3">
                  Calculate using Lot Size
                </div>
              )}

              {selectedAsset ? (
                <div className="border-t border-main-border pt-2">
                  <div onClick={() => setShowAssetPair()}>
                    <p className="font-bold flex items-center justify-start gap-1 cursor-pointer">
                      <span className="text-brand-green/50">
                        {showAssetPair ? (
                          <IoIosArrowDropup />
                        ) : (
                          <IoIosArrowDropdown />
                        )}{" "}
                      </span>
                      Asset Pair: {selectedAsset.symbol}
                    </p>
                  </div>
                  {showAssetPair ? (
                    <div className="pl-5 pb-2 text-base italic flex flex-col gap-2">
                      <div className="flex">
                        <p>Contract Size (Value per Point) =</p>
                        <p>
                          {CleanNumber(selectedAsset.contractSize)}{" "}
                          {unitLabel(selectedAsset.contractSizeUnit)}
                        </p>
                      </div>
                      <p>
                        Pip: {CleanNumber(selectedAsset.pip)}{" "}
                        {unitLabel(selectedAsset.pipUnit)}
                      </p>
                      <p>
                        Tick: {CleanNumber(selectedAsset.tick)}{" "}
                        {unitLabel(selectedAsset.tickUnit)}
                      </p>

                      <div className="flex">
                        <p>Pip Value per lot = ( Contract Size * pip ) = </p>
                        <p>
                          {CleanNumber(
                            selectedAsset.contractSize * selectedAsset.pip
                          )}{" "}
                          {selectedAsset.quote} per pip
                        </p>
                      </div>
                      <div className="flex">
                        <p>Tick Value per lot = ( Contract Size * tick ) = </p>
                        <p>
                          {CleanNumber(
                            selectedAsset.contractSize * selectedAsset.tick
                          )}{" "}
                          {selectedAsset.quote} per tick
                        </p>
                      </div>
                    </div>
                  ) : null}

                  {calculated ? (
                    ""
                  ) : (
                    <div className="my-4 border-t border-b border-main-border py-3">
                      <span className="text-red-300/50">*</span> Fill in the
                      remaining fields and calculate your risk{" "}
                      <span className="text-red-300/50">*</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="border-t border-main-border pt-2">
                  <p>Please Add your values to see your potential PnL.</p>
                  <br />
                  <p className="mb-2">Or just check out an Asset Pair</p>
                </div>
              )}

              {/* Start */}
              {calculated && selectedAsset ? (
                <div>
                  {/* direction Calculations */}
                  <div className="border-t border-main-border mt-1 pt-1">
                    <div
                      className="cursor-pointer"
                      onClick={() => setshowDirec((Prev) => !Prev)}
                    >
                      <p>
                        <span className="font-bold inline-flex items-center justify-start gap-1">
                          <span className="text-brand-green/50">
                            {showTpCalc ? (
                              <IoIosArrowDropup />
                            ) : (
                              <IoIosArrowDropdown />
                            )}{" "}
                          </span>{" "}
                          Direction :{" "}
                        </span>
                        <span>{direction}</span>
                      </p>
                    </div>
                    {showDirec ? (
                      <div className="ml-5 text-base italic">
                        <p>
                          {entryPrice} {direction === "Long" ? "<" : ">"}{" "}
                          {takeProfit} : {direction}
                        </p>
                        <p>If Entry Price {"<"} Take Profit Price : Long</p>
                        <p>If Entry Price {">"} Take Profit Price : Short</p>
                      </div>
                    ) : null}
                  </div>
                  {/* TP Calculations */}
                  <div className="border-t border-main-border mt-1 pt-1">
                    <div
                      className="cursor-pointer"
                      onClick={() => setshowTpCalc((Prev) => !Prev)}
                    >
                      <p>
                        <span className="font-bold inline-flex items-center justify-start gap-1">
                          <span className="text-brand-green/50">
                            {showTpCalc ? (
                              <IoIosArrowDropup />
                            ) : (
                              <IoIosArrowDropdown />
                            )}{" "}
                          </span>{" "}
                          TP :{" "}
                        </span>
                        <span> {TpPoint} Points</span>
                        {" | "}
                        <span>
                          {" "}
                          {(TpPoint / selectedAsset.pip).toFixed(1)} Pips
                        </span>
                        {" | "}
                        <span>
                          {" "}
                          {(TpPoint / selectedAsset.tick).toFixed(1)} Ticks
                        </span>
                      </p>
                    </div>

                    {showTpCalc ? (
                      <div className="ml-5 text-base italic">
                        {direction === "Long" ? (
                          <p>
                            TpPoints = Take Profit - Entry price= {takeProfit} -{" "}
                            {entryPrice} = {TpPoint}
                          </p>
                        ) : (
                          <p>
                            TpPoints = Entry price - Take Profit= {entryPrice} -{" "}
                            {takeProfit} = {TpPoint}
                          </p>
                        )}

                        <p>
                          TpPips = TpPoints / pip ={TpPoint} /{" "}
                          {selectedAsset.pip} =
                          {(TpPoint / selectedAsset.pip).toFixed(1)} Pips
                        </p>
                        <p>
                          TpTicks = TpPoints / pip ={TpPoint} /{" "}
                          {selectedAsset.tick} =
                          {(TpPoint / selectedAsset.tick).toFixed(1)} Pips
                        </p>
                      </div>
                    ) : null}
                  </div>

                  {/* SL Calculations */}
                  <div className="border-t border-main-border mt-1 pt-1">
                    <div
                      className="cursor-pointer"
                      onClick={() => setshowSlCalc((Prev) => !Prev)}
                    >
                      <p>
                        <span className="font-bold inline-flex items-center justify-start gap-1">
                          <span className="text-brand-green/50">
                            {showSlCalc ? (
                              <IoIosArrowDropup />
                            ) : (
                              <IoIosArrowDropdown />
                            )}{" "}
                          </span>{" "}
                          SL :{" "}
                        </span>
                        <span>{SLPoint} Points</span>
                        {" | "}
                        <span>
                          {" "}
                          {(SLPoint / selectedAsset.pip).toFixed(1)} Pips
                        </span>
                        {" | "}
                        <span>
                          {" "}
                          {(SLPoint / selectedAsset.tick).toFixed(1)} Ticks
                        </span>
                      </p>
                    </div>

                    {showSlCalc ? (
                      <div className="ml-5 text-base italic">
                        {direction === "Long" ? (
                          <p>
                            SLPoints = Entry price - Stop Loss = {entryPrice} -{" "}
                            {stopLoss} = {SLPoint}
                          </p>
                        ) : (
                          <p>
                            SLPoints = Stop Loss -Entry price = {stopLoss} -{" "}
                            {entryPrice} = {SLPoint}
                          </p>
                        )}

                        <p>
                          SLPips = SLPoints / pip ={SLPoint} /{" "}
                          {selectedAsset.pip} =
                          {(SLPoint / selectedAsset.pip).toFixed(1)} Pips
                        </p>
                        <p>
                          SLTicks = SLPoints / pip ={SLPoint} /{" "}
                          {selectedAsset.tick} =
                          {(SLPoint / selectedAsset.tick).toFixed(1)} Pips
                        </p>
                      </div>
                    ) : null}
                  </div>

                  {/* RR calculations */}
                  <div className="border-t border-main-border mt-1 pt-1">
                    <div
                      className="cursor-pointer"
                      onClick={() => setshowRRCalc((Prev) => !Prev)}
                    >
                      <p>
                        <span className="font-bold inline-flex items-center justify-start gap-1">
                          <span className="text-brand-green/50">
                            {showRRCalc ? (
                              <IoIosArrowDropup />
                            ) : (
                              <IoIosArrowDropdown />
                            )}{" "}
                          </span>{" "}
                          Risk to Reward (RR) :{" "}
                        </span>
                        <span> 1 / {(TpPoint / SLPoint).toFixed(2)}</span>
                      </p>
                    </div>
                    {showRRCalc ? (
                      <div className="ml-5 text-base italic">
                        <p>
                          RR = TpPoint / SLPoint = {TpPoint} / {SLPoint} ={" "}
                          {(TpPoint / SLPoint).toFixed(2)}
                        </p>
                      </div>
                    ) : null}
                  </div>

                  {/* Risk amount calculation */}
                  {byRisk ? (
                    <div className="border-t border-main-border mt-1 pt-1">
                      <div
                        className="cursor-pointer"
                        onClick={() => setshowRiskCalc((Prev) => !Prev)}
                      >
                        <p>
                          <span className="font-bold inline-flex items-center justify-start gap-1">
                            <span className="text-brand-green/50">
                              {showRiskCalc ? (
                                <IoIosArrowDropup />
                              ) : (
                                <IoIosArrowDropdown />
                              )}{" "}
                            </span>{" "}
                            Risk Amount :{" "}
                          </span>
                          <span>
                            {accountBalance * (riskPercentage / 100)}
                            {selectedAsset.quote}
                          </span>
                        </p>
                      </div>
                      {showRiskCalc ? (
                        <div className="ml-5 text-base italic">
                          <p>
                            Risk Amount = Account Balance * (Risk Percentage /
                            100) = {accountBalance} * {riskPercentage}/100 ={" "}
                            {(accountBalance * riskPercentage) / 100}
                            {selectedAsset.quote}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <div className="border-t border-main-border mt-1 pt-1">
                      <div
                        className="cursor-pointer"
                        onClick={() => setshowRiskCalc((Prev) => !Prev)}
                      >
                        <p>
                          <span className="font-bold inline-flex items-center justify-start gap-1">
                            <span className="text-brand-green/50">
                              {showRiskCalc ? (
                                <IoIosArrowDropup />
                              ) : (
                                <IoIosArrowDropdown />
                              )}{" "}
                            </span>{" "}
                            Risk Amount:{" "}
                          </span>
                          <span>
                            {(
                              (entryPrice - stopLoss) *
                              selectedAsset.contractSize *
                              lotSize
                            ).toFixed(2)}{" "}
                            {selectedAsset.quote}
                          </span>
                        </p>
                      </div>
                      {showRiskCalc ? (
                        <div className="ml-5 text-base italic">
                          <p>
                            Risk Amount = (Entry Price - Stop Loss) * Value per
                            Point * Lot Size = ({entryPrice} - {stopLoss}) *{" "}
                            {selectedAsset.contractSize} * {lotSize} ={" "}
                            {(
                              (entryPrice - stopLoss) *
                              selectedAsset.contractSize *
                              lotSize
                            ).toFixed(2)}{" "}
                            {selectedAsset.quote}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  )}

                  {/* Lot size and Risk percentage calculation*/}
                  {byRisk ? (
                    <div className="border-t border-main-border mt-1 pt-1">
                      <div
                        className="cursor-pointer"
                        onClick={() => setshowLotCalc((Prev) => !Prev)}
                      >
                        <p>
                          <span className="font-bold inline-flex items-center justify-start gap-1">
                            <span className="text-brand-green/50">
                              {showLotCalc ? (
                                <IoIosArrowDropup />
                              ) : (
                                <IoIosArrowDropdown />
                              )}{" "}
                            </span>{" "}
                            Lot Size :{" "}
                          </span>
                          <span> {lotSize.toFixed(5)} Lots</span>
                        </p>
                      </div>
                      {showLotCalc ? (
                        <div className="ml-5 text-base italic">
                          <p>
                            Lot Size = Risk Amount / (SLPoint * Value Per Point)
                            = {(accountBalance * riskPercentage) / 100} / (
                            {SLPoint} * {selectedAsset.contractSize}) ={" "}
                            {lotSize.toFixed(5)} Lots
                          </p>
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <div className="border-t border-main-border mt-1 pt-1">
                      <div
                        className="cursor-pointer"
                        onClick={() => setshowLotCalc((Prev) => !Prev)}
                      >
                        <p>
                          <span className="font-bold inline-flex items-center justify-start gap-1">
                            <span className="text-brand-green/50">
                              {showLotCalc ? (
                                <IoIosArrowDropup />
                              ) : (
                                <IoIosArrowDropdown />
                              )}{" "}
                            </span>{" "}
                            Risk Percentage :{" "}
                          </span>
                          <span>
                            {" "}
                            {(
                              ((SLPoint *
                                selectedAsset.contractSize *
                                lotSize) /
                                accountBalance) *
                              100
                            ).toFixed(2)}{" "}
                            %
                          </span>
                        </p>
                      </div>
                      {showLotCalc ? (
                        <div className="ml-5 text-base italic">
                          <p>
                            Risk Percentage = ((SLPoint * Value per Point * Lot
                            Size) / Account Balance)*100 ={" "}
                            {(accountBalance * riskPercentage) / 100} / (
                            {SLPoint} * {selectedAsset.contractSize}) ={" "}
                            {(
                              ((SLPoint *
                                selectedAsset.contractSize *
                                lotSize) /
                                accountBalance) *
                              100
                            ).toFixed(2)}{" "}
                            %
                          </p>
                        </div>
                      ) : null}
                    </div>
                  )}

                  {/* Potential Profit */}
                  <div className="border-t border-main-border mt-1 pt-1">
                    <div
                      className="cursor-pointer"
                      onClick={() => setshowProfCalc((Prev) => !Prev)}
                    >
                      <p>
                        <span className="font-bold inline-flex items-center justify-start gap-1">
                          <span className="text-brand-green/50">
                            {showProfCalc ? (
                              <IoIosArrowDropup />
                            ) : (
                              <IoIosArrowDropdown />
                            )}{" "}
                          </span>{" "}
                          Potential Profit :{" "}
                        </span>
                        <span>
                          {" "}
                          {(
                            TpPoint *
                            selectedAsset.contractSize *
                            lotSize
                          ).toFixed(2)}{" "}
                          {selectedAsset.quote}
                        </span>
                      </p>
                    </div>
                    {showProfCalc ? (
                      <div className="ml-5 text-base italic">
                        <p>
                          Potential Profit = TpPoint * Value Per Point * Lot
                          Size = {TpPoint} * {selectedAsset.contractSize} *{" "}
                          {lotSize.toFixed(2)} ={" "}
                          {TpPoint *
                            selectedAsset.contractSize *
                            lotSize.toFixed(2)}
                          {selectedAsset.quote}{" "}
                        </p>
                      </div>
                    ) : null}
                  </div>

                  {/* Required Margin */}
                  <div className="border-t border-b border-main-border mt-1 py-1">
                    <div
                      className="cursor-pointer"
                      onClick={() => setshowMargCalc((Prev) => !Prev)}
                    >
                      <p>
                        <span className="font-bold inline-flex items-center justify-start gap-1">
                          <span className="text-brand-green/50">
                            {showMargCalc ? (
                              <IoIosArrowDropup />
                            ) : (
                              <IoIosArrowDropdown />
                            )}{" "}
                          </span>
                          Required Margin :
                        </span>
                        <span>
                          {(
                            (entryPrice *
                              selectedAsset.contractSize *
                              lotSize) /
                            leverage
                          ).toFixed(2)}
                          {selectedAsset.quote}
                        </span>
                      </p>
                    </div>
                    {showMargCalc ? (
                      <div className="ml-5 text-base italic">
                        <p>
                          Required Margin = (entryPrice * Value per Point *
                          lotSize) / leverage = ({entryPrice} *{" "}
                          {selectedAsset.contractSize} * {lotSize.toFixed(2)}) /{" "}
                          {leverage} ={" "}
                          {(
                            (entryPrice *
                              selectedAsset.contractSize *
                              lotSize) /
                            leverage
                          ).toFixed(2)}
                          {selectedAsset.quote}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}
              {/* End */}
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default RiskCalculator;
