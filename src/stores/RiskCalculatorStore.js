import { create } from "zustand";

const useRiskCalculatorStore = create((set) => ({
  assetPair: "",
  entryPrice: "",
  takeProfit: "",
  stopLoss: "",
  accountBalance: "",
  riskPercentage: "",
  lotSize: "",
  leverage: "",
  calculated: false,
  setAssetPair: (value) => set(() => ({ assetPair: value })),
  setEntryPrice: (value) => set(() => ({ entryPrice: value })),
  setTakeProfit: (value) => set(() => ({ takeProfit: value })),
  setStopLoss: (value) => set(() => ({ stopLoss: value })),
  setAccountBalance: (value) => set(() => ({ accountBalance: value })),
  setRiskPercentage: (value) => set(() => ({ riskPercentage: value })),
  setLotSize: (value) => set(() => ({ lotSize: value })),
  setLeverage: (value) => set(() => ({ leverage: value })),
  setCalculated: () => set((state) => ({ calculated: !state.calculated })),
}));

export default useRiskCalculatorStore;
