import { fenChar, Coords,Color } from "../models";
import { Piece } from "./pieces";


export class pawn extends Piece{
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
        if(pieceColor === Color.Black) this.initBlackPawn();
        this.fenChar = pieceColor === Color.White ? fenChar.wPawn : fenChar.bPawn;
    }
    private initBlackPawn(): void{
        this.directions = this.directions.map(({x, y}) => ({x: -1*x, y}));
    }

    public get hasMoved():boolean{
        return this.Moved;
    }
    public set hasMoved(_){
        this.Moved = true;
        this.directions = [
            {x: 1, y: 0},
            {x: 1, y: 1},
            {x: 1, y: -1}
        ];
        if(this.pieceColor === Color.Black) this.initBlackPawn();
    }
}