import { IProperties, IFile, BaseClass } from "./base";
export declare class CanvasContext extends BaseClass {
    framesColor: string;
    framesElapsedColor: string;
    framesWidthBar: number;
    framesWidthSpacer: number;
    timelineHeight: number;
    timelineFont: string;
    timelineTimeColor: string;
    timelineBarColor: string;
    barHeight: number;
    barWidth: number;
    barLargeGroupCount: number;
    barSmallGroupCount: number;
    wrapper: HTMLElement;
    private staticEl;
    private framesEl;
    private staticCtx;
    private framesCtx;
    private ratio;
    private renderRectData;
    private rafId;
    private step;
    private audioData;
    private audioFiles;
    private audioDuration;
    private audioProgress;
    private audioCompletedStatus;
    constructor(properties: IProperties);
    width: number;
    height: number;
    resize(): void;
    loadAudioData(bufferData: Float32Array, duration: number, files: Array<IFile>, positions: Array<number>, progress: () => number, completed: () => boolean): void;
    draw(): void;
    startRenderingProgress(): void;
    stopRenderingProgress(): void;
    private drawFrames(fillTo);
    private computeRenderData(callback?);
    private computeValues(bufferData, positions);
    private drawTimeline(duration);
    private clear(onlyFramesCtx?);
    private toHHMMSS(secs);
}
