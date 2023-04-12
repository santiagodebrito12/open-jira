import { UiState } from "./";

type UiActionType= 
| {type:"SET_OPEN_MENU"}
| {type:"SET_CLOSE_MENU"}

export const UiReducer = (state:UiState,action:any) =>{

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
        default:
            return state;
            
        }
    
}

