import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAuth = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user: user }),
      logOut: () => set({ user: null }),
    }),
    {
      name: "PipSuite-Auth",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ user: state.user }),
    }
  )
);

export default useAuth;
