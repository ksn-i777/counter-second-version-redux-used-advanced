import React from 'react'
import s from './Display.module.css'
import { useSelector } from 'react-redux'
import { RootState } from './../../redux/store'

export function Display() {

    const maxValue = useSelector<RootState, number>(s => s.maxInput)
    const count = useSelector<RootState, number>(s => s.counter)

    return (
        <div className={count === maxValue ? s.info + ' ' + s.numberMax : s.info}>
            {count === maxValue ? count + ' max' : count}
        </div>
    )
}
