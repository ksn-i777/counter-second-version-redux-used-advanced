import React from 'react'
import s from './Inputs.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from './../../redux/store'
import { minInputAC } from './../../redux/minInput-reducer'
import { maxInputAC } from './../../redux/maxInput-reducer'
import { errorMinInputAC, errorMaxInputAC } from './../../redux/error-reducer'

export function Inputs() {

    const dispatch = useDispatch()
    const minValue = useSelector<AppStateType, number>(s => s.minInput)
    const maxValue = useSelector<AppStateType, number>(s => s.maxInput)
    const error = useSelector<AppStateType, boolean>(s => s.error)

    
    function onChangeMinInput(value: number) {
        dispatch(errorMinInputAC(value, minValue, maxValue))
        dispatch(minInputAC(value))
    }
    function onChangeMaxInput(value: number) {
        dispatch(errorMaxInputAC(value, minValue, maxValue))
        dispatch(maxInputAC(value))
    }

    return (
        <div className={s.inputs}>
            <div className={s.inputItem}>
                <span className={s.inputText}>start value:</span>
                <input
                    type="number"
                    value={minValue}
                    className={error ? s.inputError : s.input}
                    onChange={(e) => onChangeMinInput(+e.currentTarget.value)}
                />
            </div>
            <div className={s.inputItem}>
                <span className={s.inputText}>max value:</span>
                <input
                    type="number"
                    value={maxValue}
                    className={error ? s.inputError : s.input}
                    onChange={(e) => onChangeMaxInput(+e.currentTarget.value)}
                />
            </div>
        </div>
    );
}

