import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessBoard } from '../../chess logic/chessboard';
import { Color, fenChar } from '../../chess logic/models';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ChessBoardComponent {
  private chessBoard = new ChessBoard();
  public chessBoardView: (fenChar|null)[][] = this.chessBoard.chessBoardView;
  public get playerColor(): Color{
    return this.chessBoard.PlayerColor;
  }
}
