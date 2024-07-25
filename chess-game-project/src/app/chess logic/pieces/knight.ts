import { fenChar,Coords,Color } from "../models";
import { piece } from "./pieces";


export class knight extends piece{
    protected override fenChar: fenChar;
    protected override directions: Coords[] = [
        {x: 2,y: 1},
        {x: 2,y: -1},
        {x: -2,y: 1},
        {x: -2,y: -1},
        {x: 1,y: 2},
        {x: 1,y: -2},
        {x: -1, y: 2},
        {x: -1, y: -2}

    ];

    constructor(private pieceColor: Color){
        super(pieceColor);
        this.fenChar = pieceColor === Color.White ? fenChar.wKnight : fenChar.bKnight;
    }
}