import { DARKMODE, LIGHTMODE } from "./action";

export const themereducer = (state = {}, { type, payload }) => {
    switch (type) {

        case LIGHTMODE: {
            return {
                ...state,
                theme: payload
            }
        }

        case DARKMODE: {

            return {
                ...state,
                theme: payload
            }
        }
        
        default: {
            return state;
        }
    }

}