import React from 'react'
import './App.css'
import { SettingsCounter } from './components/SettingsCounter/SettingsCounter'
import { Counter } from './components/Counter/Counter'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'

export function AppWithReduxAdvanced() {

    const opened = useSelector<RootState, boolean>(s => s.windowSettings)

    return (
        <div className="App">
            {opened ? <SettingsCounter/> : <Counter/>}
        </div>
    );
}