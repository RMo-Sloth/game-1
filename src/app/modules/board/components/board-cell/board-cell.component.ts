import { Component, Input, OnInit } from '@angular/core';
import BoardCell from '../../services/board/board-cells/board-cell/BoardCell';

@Component({
  selector: 'app-board-cell[cell]',
  templateUrl: './board-cell.component.html',
  styleUrls: ['./board-cell.component.scss']
})
export class BoardCellComponent implements OnInit {
  @Input() cell!: BoardCell;
  constructor() { }

  ngOnInit(): void {
  }

}
