import {TOGGLE_OPEN} from "../../utils/types";

const handlers = {
    DEFAULT: state => state,
    [TOGGLE_OPEN]: state => ({...state, open: !state.open}),

}

export const modalReducer = (state, action) => {
    const handler = handlers[action.type || handlers.DEFAULT]
    return handler(state, action)
}