import { create } from "zustand";

const useUserInfo = create((set) => ({
  users: [],
  setUser: (newUser) => set((state) => ({ users: [...state.users, newUser] })),
}));
