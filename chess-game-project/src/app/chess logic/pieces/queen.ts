import { fenChar, Coords,Color } from "../models";
import { Piece } from "./pieces";
export class queen extends Piece{
    private Moved: boolean = false;
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
    public get hasMoved():boolean{
        return this.Moved;
    }
    public set hasMoved(_){
        this.Moved = true;
    }
}