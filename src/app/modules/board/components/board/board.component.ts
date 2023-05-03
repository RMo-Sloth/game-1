import { Component, OnInit } from '@angular/core';
import Board from '../../services/board/Board';
import { BoardService } from '../../services/board/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public board: Board;
  // Better share the state from somewhere with an observable: ngrx Store

  constructor(
    private boardService: BoardService 
  ) {
    this.board = this.boardService.init();
  }

  ngOnInit(): void {

  }

}
