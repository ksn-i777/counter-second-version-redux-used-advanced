const CHANGE_MAX_INPUT = 'CHANGE-MAX-INPUT'

export type MaxInputActionsType = ReturnType<typeof maxInputAC>

export function maxInputReducer(state:number = 5, action:MaxInputActionsType):number {
    switch (action.type) {
        case CHANGE_MAX_INPUT:
            return action.value > state ? state + 1 : state - 1
        default:
            return state
    }
}
export function maxInputAC(value:number) {
    return ({type: CHANGE_MAX_INPUT, value: value})
}