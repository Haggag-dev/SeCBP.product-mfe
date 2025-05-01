import { atom, useAtom } from "jotai";

const toggleMenuAtom = atom(false);

export const useToggleMenu = () => useAtom(toggleMenuAtom);
