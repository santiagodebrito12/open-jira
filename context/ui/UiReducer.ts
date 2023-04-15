import { UiState } from "./";

type UiActionType= 
| {type:"SET_OPEN_MENU"}
| {type:"SET_CLOSE_MENU"}
| {type:"SET_IS_DRAGGING",payload:boolean}

export const UiReducer = (state:UiState,action:UiActionType) =>{

    switch(action.type){
        case "SET_OPEN_MENU":
            return{
                ...state,
                sideMenuOpen:true
            }
         case "SET_CLOSE_MENU":
                return{
                    ...state,
                    sideMenuOpen:false
            }    
        case "SET_IS_DRAGGING":
                return{
                    ...state,
                    isDragging:action.payload,
            }    
        default:
            return state;
            
        }
    
}

