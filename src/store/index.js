import { create } from "zustand";

export const useStore = create((set) => ({
  isLogin: false,
  setUserAuth: (data) =>
    set((state) => ({ data })),
}));

