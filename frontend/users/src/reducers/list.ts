import { createReducer } from '@utils/reducer'
import * as actions from '../constants/list'

const initialState = {
  rows: [],
  count: 0,
  typeFilter: '1'
}

export default createReducer(initialState, {
  [actions.load]: (state, { list }) => ({ ...state, ...list }),
  [actions.clear]: () => initialState,
  [actions.changeFilter]: (state,  {value} ) => {
    let newRows = [];
    
    switch (value){
      case '1':
        newRows = state.rows.sort((a, b) => 
          (a.profile.firstName + a.profile.lastName) < (b.profile.firstName + b.profile.lastName) ? 1 : -1 )
        break;
      case '2':
        newRows = state.rows.sort((a, b) => 
          (a.profile.firstName + a.profile.lastName) > (b.profile.firstName + b.profile.lastName) ? 1 : -1 )
        break;
      case '3':
        newRows = state.rows.sort((a, b) => a.email < b.email ? 1 : -1 )
        break;
      case '4':
        newRows = state.rows.sort((a, b) => a.email > b.email ? 1 : -1 )
        break;
      default:
        break;
    }
    
    return ({
      ...state, 
      ["typeFilter"]: value,
      ["rows"]: newRows
    })
  }
})
