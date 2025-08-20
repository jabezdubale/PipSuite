import { create } from "zustand";

const useNavOverlayStore = create((set) => ({
  isOpen: false,
  buttonIsClicked: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useNavOverlayStore;
