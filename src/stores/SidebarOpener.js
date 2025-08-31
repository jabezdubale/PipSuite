import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useSidebarOpener = create(
  persist(
    (set, get) => ({
      largeSidebarOpen: false,
      overlaySidebarOpen: false,
      selectedSidebar: "dashboard",
      setLargeSidebarOpen: () =>
        set((s) => ({ largeSidebarOpen: !s.largeSidebarOpen })),
      setOverlaySidebarOpen: () =>
        set((s) => ({ overlaySidebarOpen: !s.overlaySidebarOpen })),
      setSelectedSidebar: (value) => set({ selectedSidebar: value }),
    }),
    {
      name: "pipsuite-sidebar",
      storage: createJSONStorage(() =>
        typeof window !== "undefined" ? sessionStorage : undefined
      ),
      partialize: (state) => ({ selectedSidebar: state.selectedSidebar }),
    }
  )
);

export default useSidebarOpener;
