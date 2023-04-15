import { EntriesState } from ".";

type EntriesActionType =
| {type: "SET_NEW_ENTRY", payload: any}
| {type: "ENTRY_UPDATED", payload: any}

export const EntriesReducer = (state:EntriesState,action:EntriesActionType) =>{

    switch(action.type){
        case "SET_NEW_ENTRY":
            return{
                ...state,
                entries:[action.payload,...state.entries],
            }
        case "ENTRY_UPDATED":
                return{
                    ...state,
                    entries:state.entries.map((entry)=>{
                        if(entry._id === action.payload._id){
                            entry.status = action.payload.status;
                            entry.description = action.payload.description; 
                        }
                        return entry;
                    }),
                }
        default:
            return state;
            
        }
    
}

