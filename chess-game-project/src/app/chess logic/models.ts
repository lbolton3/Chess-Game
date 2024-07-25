/**
 * Color representing the colors of a piece.
 * 'White' and 'Black' represent the color of the two opposing sides
*/

export enum Color{
    White,
    Black
}

/**
 * Type representing the coordinates of a piece on the chessboard.
 * 'x' and 'y' represent the position on the board.
 */

export type Coords = {
    x: number;
    y: number;
}

/*
 *Enumeration representing the FEN (Forsyth-Edwards Notation) characters
 *for each type of chess piece.
*/

export enum fenChar{
    wPawn = "P",
    wBishop = "B",
    wKnight = "N",
    wRook = "R",
    wQueen = "Q",
    wKing = "K",
    bPawn = "p",
    bBishop = "b",
    bKnight = "n",
    bRook = "r",
    bQueen = "q",
    bKing = "k",
}