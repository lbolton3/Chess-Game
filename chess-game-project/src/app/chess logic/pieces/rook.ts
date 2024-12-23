import { fenChar, Coords,Color } from "../models";
import {Piece} from "./pieces";

export class rook extends Piece{
    private Moved: boolean = false;
    protected override fenChar: fenChar;
    protected override directions: Coords[] = [
        {x: 1, y: 0},
        {x: -1, y: 0},
        {x: 0, y: 1},
        {x: 0, y: -1}
    ];
    constructor(private pieceColor: Color){
        super(pieceColor);
        this.fenChar = pieceColor === Color.White ? fenChar.wRook : fenChar.bRook;
    }

    public get hasMoved():boolean{
        return this.Moved;
    }
    public set hasMoved(_){
        this.Moved = true;
    }
}