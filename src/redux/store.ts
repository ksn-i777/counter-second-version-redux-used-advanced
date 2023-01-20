import { legacy_createStore, combineReducers } from 'redux'
import { minInputReducer } from './minInput-reducer'
import { maxInputReducer } from './maxInput-reducer'
import { counterReducer } from './counter-reducer'
import { errorReducer } from './error-reducer'
import { windowSettingsReducer } from './windowSettings-reducer'

const rootReducer = combineReducers({
    minInput: minInputReducer,
    maxInput: maxInputReducer,
    counter: counterReducer,
    error: errorReducer,
    windowSettings: windowSettingsReducer,
})

let preloadedState
const minLS = localStorage.getItem('min value')
const maxLS = localStorage.getItem('max value')
const counterLS = localStorage.getItem('counter')

if (minLS && maxLS && counterLS) {
  preloadedState = {
    minInput: JSON.parse(minLS),
    maxInput: JSON.parse(maxLS),
    counter: JSON.parse(counterLS)
  }
}

export const store = legacy_createStore(rootReducer, preloadedState)

export type AppStateType = ReturnType<typeof rootReducer>

store.subscribe(() => {
    localStorage.setItem('min value', JSON.stringify(store.getState().minInput))
    localStorage.setItem('max value', JSON.stringify(store.getState().maxInput))
    localStorage.setItem('counter', JSON.stringify(store.getState().counter))
})