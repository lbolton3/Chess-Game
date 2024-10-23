import { Color, fenChar } from "./models";
import { bishop } from "./pieces/bishop";
import { king } from "./pieces/king";
import { knight } from "./pieces/knight";
import { pawn } from "./pieces/pawn";
import { Piece } from "./pieces/pieces";
import { queen } from "./pieces/queen";
import { rook } from "./pieces/rook";


export class ChessBoard{
    private chessBoard:(Piece|null)[][];
    private playerColor = Color.White;


    constructor(){
        this.chessBoard = [
            [
                new rook(Color.White), new knight(Color.White),new bishop(Color.White),new queen(Color.White),
                new king(Color.White), new bishop(Color.White), new knight(Color.White), new rook(Color.White)
                
            ],
            [
                new pawn(Color.White), new pawn(Color.White), new pawn(Color.White), new pawn(Color.White),
                new pawn(Color.White), new pawn(Color.White), new pawn(Color.White), new pawn(Color.White)
            ],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],

            [
                new rook(Color.Black), new knight(Color.Black),new bishop(Color.Black),new queen(Color.Black),
                new king(Color.Black), new bishop(Color.Black), new knight(Color.Black), new rook(Color.Black)
                
            ],
            [
                new pawn(Color.Black), new pawn(Color.Black), new pawn(Color.Black), new pawn(Color.Black),
                new pawn(Color.Black), new pawn(Color.Black), new pawn(Color.Black), new pawn(Color.Black)
            ],
        ]
    }

    public get PlayerColor(): Color{
        return this.playerColor;
    }

    public get chessBoardView(): (fenChar|null)[][]{
        return this.chessBoard.map(row =>{
            return row.map(piece => piece instanceof Piece ? piece.FENChar: null)
    })

    }
}