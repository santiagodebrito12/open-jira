import { createContext } from "react";

export interface ContextProps {
    sideMenuOpen: boolean;
    toggleMenu :Function,
 
}

export const UiContext = createContext({} as ContextProps);