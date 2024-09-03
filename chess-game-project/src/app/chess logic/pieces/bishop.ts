import { fenChar, Coords,Color } from "../models";
import { piece } from "./pieces";


export class Bishop extends piece{
    protected override fenChar: fenChar;
    protected override directions: Coords[] = [
        { x: 1, y: 1},
        { x: 1, y: -1 },
        { x:-1, y: 1 },
        { x: -1, y: -1 } 
    ];
    constructor(private pieceColor: Color){
        super(pieceColor);
        this.fenChar = pieceColor === Color.White ? fenChar.wBishop : fenChar.bBishop;
    }
}