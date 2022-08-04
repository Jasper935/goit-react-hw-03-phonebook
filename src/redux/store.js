import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer } from './contacts/contactsReducers'
const rootReducer = combineReducers({ contacts: reducer })
export const store = createStore(rootReducer, composeWithDevTools())