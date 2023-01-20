const CHANGE_MIN_INPUT = 'CHANGE-MIN-INPUT'

export type MinInputActionsType = ReturnType<typeof minInputAC>

export function minInputReducer(state:number = 0, action:MinInputActionsType):number {
    switch (action.type) {
        case CHANGE_MIN_INPUT:
            return action.value
        default:
            return state
    }
}
export function minInputAC(value:number) {
    return ({type: CHANGE_MIN_INPUT, value: value} as const)
}