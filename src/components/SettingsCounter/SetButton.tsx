import React from 'react'
import s from './SetButton.module.css'
import { Button } from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './../../redux/store'
import { resCounterAC } from './../../redux/counter-reducer'
import { closeSettingsWindowAC } from './../../redux/windowSettings-reducer'

export function SetButton() {

    const dispatch = useDispatch()
    const minValue = useSelector<RootState, number>(s => s.minInput)
    const error = useSelector<RootState, boolean>(s => s.error)

    function setStartValue() {
        dispatch(resCounterAC(minValue))
        dispatch(closeSettingsWindowAC())
    }

    return (
        <div className={s.setButton}>
            <Button
                name={'set'}
                className={s.button}
                callback={setStartValue}
                disabled={error}
            />
        </div>
    );
}