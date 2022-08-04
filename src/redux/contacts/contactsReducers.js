import { ADD, DELETE, FILTER } from "./contactsTypes";
import {combineRedusers }from 'redux' 
export const itemReducer = (state=[], {type, payload})=>{
    switch (type) {
        case ADD:
          return [...state, payload];
        case DELETE:
          return state.filter(({ id }) => id !== payload)
          case FILTER :
            return
    
        default:
          return state;
      }
    
      

}

export const filterReducer =(state='', {type, payload})=>{
switch(type){
case FILTER:
    return payload
    default: return state

}
}

export const reducer = combineRedusers({
    items: itemReducer,
    filter: filterReducer
})