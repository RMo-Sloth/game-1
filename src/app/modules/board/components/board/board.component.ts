import { Component, OnInit } from '@angular/core';
import BoardCell from '../../data/BoardCell';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public board = {
    rows: 10,
    columns: 8
  }
  public cells: BoardCell[] = [];

  ngOnInit(): void {
    this.cells = Array(this.board.rows * this.board.columns)
      .fill(null)
      .map( (_, index) => ({
      column: index % this.board.columns,
      row: Math.floor( index / this.board.columns ) + 1
    }) );
  }

}
