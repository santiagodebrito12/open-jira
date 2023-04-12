import { EntriesState } from ".";




export const EntriesReducer = (state:EntriesState,action:any) =>{

    switch(action.type){
        case "SET_NEW_ENTRY":
            return{
                ...state,
                entries:[action.payload,...state.entries],
            }
        //  case "SET_CLOSE_MENU":
        //         return{
        //             ...state,
        //             sideMenuOpen:false
        //     }    
        default:
            return state;
            
        }
    
}

