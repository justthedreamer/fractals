import type {HeighwaysDragonSettings} from "./types.ts";
import {getCanvasProps} from "../../utils/canvas.ts";

function createSettings(): HeighwaysDragonSettings {
    return {
        iterations: 12,
        lineLength: 5,
        initialState: {
            x: props.width / 2,
            y: props.height / 2,
            angle: 0,
        }
    }
}

export const defaultHeighwaysDragonSettings: () => HeighwaysDragonSettings = createSettings;