import { fenChar, Coords,Color } from "../models";
import { piece } from "./pieces";
export class queen extends piece{
    protected override fenChar: fenChar;
    protected override directions: Coords[] = [
        {x: 0, y: 1},
        {x: 0, y: -1},
        {x: 1, y: 0},
        {x: 1, y: -1},
        {x: 1, y: 1},
        {x: -1, y: 0},
        {x: -1, y: 1},
        {x: -1, y: -1},

    ];
    constructor(private pieceColor: Color){
        super(pieceColor);
        this.fenChar = pieceColor === Color.White ? fenChar.wQueen : fenChar.bQueen;
    }
}