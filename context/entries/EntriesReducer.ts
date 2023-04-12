import { EntriesState } from ".";

type EntriesActionType= 
| {type:"SET_OPEN_MENU"}
| {type:"SET_CLOSE_MENU"}


export const EntriesReducer = (state:EntriesState,action:any) =>{

    switch(action.type){
        // case "SET_OPEN_MENU":
        //     return{
        //         ...state,
        //         sideMenuOpen:true
        //     }
        //  case "SET_CLOSE_MENU":
        //         return{
        //             ...state,
        //             sideMenuOpen:false
        //     }    
        default:
            return state;
            
        }
    
}

