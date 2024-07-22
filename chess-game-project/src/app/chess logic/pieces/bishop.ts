import { fenChar } from "../models";
import { piece } from "./pieces";
import { Coords } from "../models";

export class Bishop extends piece{
    protected override fenChar: fenChar;
    protected override directions: Coords[] = [
        { x: 1, y: 1},
        { x: 1, y: -1 },
        { x:-1, y: 1 },
        { x: -1, y: -1 } 
    ];
}