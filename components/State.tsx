import { create } from "zustand";

export interface StoreState {
  language: string;
  setLanguage: (languageIncoming: string) => void;
  val: boolean;
  setLoaded: (valIncoming: boolean) => void;
}

export const useStore = create<StoreState>((set) => ({
  language: "eng",
  setLanguage: (languageIncoming: string) =>
    set({ language: languageIncoming }),
  val: false,
  setLoaded: (valIncoming: boolean) => set({ val: valIncoming }),
}));
