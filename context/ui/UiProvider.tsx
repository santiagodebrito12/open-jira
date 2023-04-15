import { useReducer } from "react";
import { UiContext } from "./UiContext";
import { UiReducer } from "./UiReducer";

export interface UiState{
    sideMenuOpen: boolean;
    isDragging: boolean;
  
}
interface UiProviderProps {
    children: React.ReactNode;
   
  }

const UI_INITIAL_STATE: UiState = {
    sideMenuOpen: false,
    isDragging:false
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
  
  const toggleDrag = (payload:boolean) => {
    
    dispatch({type: 'SET_IS_DRAGGING', payload})

  }

  return (
    <UiContext.Provider value={{
      sideMenuOpen: state.sideMenuOpen,
      isDragging:state.isDragging,
      toggleMenu,
      toggleDrag,

    }}>
        {children}
    </UiContext.Provider>
  )
}

