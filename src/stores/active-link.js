import { atom, useAtom } from "jotai";

const activeLinkAtom = atom(0); // The index of the active link in the links array.

export const useActiveLinkAtom = () => useAtom(activeLinkAtom);
