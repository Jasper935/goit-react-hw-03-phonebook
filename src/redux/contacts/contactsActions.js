import { ADD, DELETE, FILTER } from "./contactsTypes";

export const addUser = (user) => ({ type: ADD, payload: user })
export const deleteUser = (userId) => ({ type: DELETE, payload: userId })
export const filetrUser = (value) => ({ type: FILTER, payload: value })