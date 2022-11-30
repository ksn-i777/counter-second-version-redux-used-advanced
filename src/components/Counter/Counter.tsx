import React from 'react'
import s from './Counter.module.css'
import { Display } from './Display'
import { Buttons } from './Buttons'

export function Counter() {
    return (
        <div className={s.counter}>
            <Display/>
            <Buttons/>
        </div>
    );
}