import { create } from "zustand";

const useMainNavOverlay = create((set) => ({
  amountOverlayOpen: false,
  profileOverlayOpen: false,
  setAmountOverlayOpen: () =>
    set((state) => ({ amountOverlayOpen: !state.amountOverlayOpen })),
  setAmountOverlayOpenFalse: () => set(() => ({ amountOverlayOpen: false })),
  setProfileOverlayOpen: () =>
    set((state) => ({ profileOverlayOpen: !state.profileOverlayOpen })),
  setProfileOverlayOpenFalse: () => set(() => ({ amountOverlayOpen: false })),
}));

export default useMainNavOverlay;
