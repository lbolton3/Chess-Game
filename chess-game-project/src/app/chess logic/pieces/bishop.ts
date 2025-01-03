import { fenChar, Coords,Color } from "../models";
import { Piece } from "./pieces";


export class bishop extends Piece{
    private Moved: boolean = false;
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
    public get hasMoved():boolean{
        return this.Moved;
    }
    public set hasMoved(_){
        this.Moved = true;
    }
}
