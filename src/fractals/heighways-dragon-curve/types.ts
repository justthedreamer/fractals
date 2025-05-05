export type HeighwaysDragonEvaluationRules = { X: string; Y: string; };

export type HeighwaysDragonDrawAction = 'DRAW' | 'ROTATE_LEFT' | 'ROTATE_RIGHT';

export type HeighwaysDragonDrawCallback = (action: HeighwaysDragonDrawAction, drawIndex: number) => void;

export type HeighwaysDragonSettings = {
    iterations: number,
    initialState: HeighwaysDragonState,
    lineLength: number;
}

export type HeighwaysDragonState = {
    x: number;
    y: number;
    angle: number;
}

export type HeighwaysDragonColoringRule = {
    rules: Record<number, string>;
    lastRuleIndex: number;
    lastRuleOffset: number;
}
