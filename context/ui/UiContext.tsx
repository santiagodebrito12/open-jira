import { createContext } from "react";

export interface ContextProps {
    sideMenuOpen: boolean;
    toggleMenu :Function,
    isDragging:boolean,
    toggleDrag:Function,
}

export const UiContext = createContext({} as ContextProps);