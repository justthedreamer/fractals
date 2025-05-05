import type {CanvasProps, CanvasSettings} from "../types/canvas";

function getCanvas(canvasId: string): HTMLCanvasElement {
    return document.getElementById(canvasId) as HTMLCanvasElement;
}

export function getCanvasProps(canvasId: string): CanvasProps {
    const canvas = getCanvas(canvasId)

    return {
        width: canvas.width,
        height: canvas.height,
        clientWidth: canvas.clientWidth,
        clientHeight: canvas.clientHeight,
    }
}

export function getCanvasContext(canvasId: string): CanvasRenderingContext2D {
    const canvas = getCanvas(canvasId)
    const context = canvas.getContext('2d');
    if (!context) {
        throw new Error("Failed to get canvas context.")
    }
    return context;
}
