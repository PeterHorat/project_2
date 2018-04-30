import {createInterval} from "../utils/constants";

export default (state, initialGameState) => {
    return {
        ...state,
        gameState: {
            ...initialGameState,
            started: false,
            test:true,
            intervall: state.gameState.intervall + 10,
        }
    }
};