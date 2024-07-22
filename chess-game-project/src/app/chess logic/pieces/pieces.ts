import { Color, Coords, fenChar } from "../models";
export abstract class piece{
    protected abstract fenChar: fenChar;
    protected abstract directions: Coords[];
    constructor(private color_: Color){}

    public get FENChar(): fenChar{
        return this.fenChar;
    }

    public get direction(): Coords[]{
        return this.directions
    }

    public get color(): Color{
        return this.color;
    }


}