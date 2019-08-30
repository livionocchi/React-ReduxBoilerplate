import {
  combineReducers
} from 'redux'
import AppReducer from './views/app/reducer'
import storage from 'redux-persist/lib/storage'

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['AppReducer']
};

export const rootReducer = combineReducers({
  AppReducer
})