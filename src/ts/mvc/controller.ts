import {Member} from "./model";

export type AddType = {
    a: number;
    b: number;
}

export interface ModelInter {
    trigger(): void;
    add(addType: AddType): number;
}

export interface ViewInter {
    on(): void;
    draw(member: Member): void;
}

export default class Controller {
    private model: ModelInter;
    private view: ViewInter;

    public render(): void {
        this.view.on();
    }

    public listner(): void {
        this.model.trigger();
    }

    public add(addType: AddType) {
        this.model.add(addType);
    }

    constructor(model: ModelInter, view: ViewInter) {
        this.model = model;
        this.view = view;
    }
}
