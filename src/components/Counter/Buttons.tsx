import React from 'react'
import s from './Buttons.module.css'
import { Button } from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from './../../redux/store'
import { resCounterAC, incCounterAC } from './../../redux/counter-reducer'
import { openSettingsWindowAC } from './../../redux/windowSettings-reducer'

export function Buttons() {

    const dispatch = useDispatch()
    const minValue = useSelector<AppStateType, number>(s => s.minInput)
    const maxValue = useSelector<AppStateType, number>(s => s.maxInput)
    const count = useSelector<AppStateType, number>(s => s.counter)

    return (
        <div className={s.buttons}>
            <Button
                name={'inc'}
                className={s.button}
                callback={() => dispatch(incCounterAC())}
                disabled={count === maxValue ? true : false}
            />
            <Button
                name={'reset'}
                className={s.button}
                callback={() => dispatch(resCounterAC(minValue))}
                disabled={count === minValue ? true : false}
            />
            <Button
                name={'set'}
                className={s.button}
                callback={() => dispatch(openSettingsWindowAC())}
                disabled={false}
            />
        </div>
    );
}