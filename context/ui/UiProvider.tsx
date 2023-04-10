import { useReducer } from "react";
import { UiContext } from "./UiContext";
import { UiReducer } from "./UiReducer";

export interface UiState{
    sideMenuOpen: boolean;
  
}
interface UiProviderProps {
    children: React.ReactNode;
   
  }

const UI_INITIAL_STATE: UiState = {
    sideMenuOpen: false,
}


export const UiProvider = ({children}:UiProviderProps) => {
  
  const [state, dispatch] = useReducer(UiReducer, UI_INITIAL_STATE)  
  
  const toggleMenu = () => {
    if(state.sideMenuOpen){
      dispatch({type: 'SET_CLOSE_MENU'})
    
    }else{
      dispatch({type: 'SET_OPEN_MENU'})
    }
  }
  
  

  return (
    <UiContext.Provider value={{
      sideMenuOpen: state.sideMenuOpen,
      toggleMenu,
     

    }}>
        {children}
    </UiContext.Provider>
  )
}

