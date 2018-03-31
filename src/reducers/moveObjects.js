import { calculateAngle } from '../utils/formulas';

function moveObjects(state, action) {
    if (!action.mousePosition) return state;
    const { x, y } = action.mousePosition;
    console.log('x: ' + x + ' y: ' + y);
    const angle = calculateAngle(0, 0, x, y);
    return {
        ...state,
        angle,
    };
}

export default moveObjects;