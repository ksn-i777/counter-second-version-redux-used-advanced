const INC_COUNTER = 'INC-COUNTER'
const RES_COUNTER = 'RES-COUNTER'

export type IncCounterActionType = ReturnType<typeof incCounterAC>
export type ResCounterActionType = ReturnType<typeof resCounterAC>
export type CounterActionsType = IncCounterActionType | ResCounterActionType

export function counterReducer(state:number = 0, action:CounterActionsType):number {
    switch (action.type) {
        case INC_COUNTER:
            return state + 1
        case RES_COUNTER:
            return action.value
        default:
            return state
    }
}

export function incCounterAC() {
    return ({type: INC_COUNTER} as const)
}
export function resCounterAC(value:number) {
    return ({type: RES_COUNTER, value} as const)
}