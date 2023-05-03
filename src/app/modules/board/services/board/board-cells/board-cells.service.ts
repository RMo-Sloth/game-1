import { Injectable } from '@angular/core';
import { BoardCellService } from './board-cell/board-cell.service';
import BoardCell from '../../../data/BoardCell';

@Injectable({
  providedIn: 'root'
})
export class BoardCellsService {

  constructor(
    private board_cell_service: BoardCellService
  ) { }

  public generate_records( rows: number, columns: number ): BoardCell[] {
    return Array(rows * columns).fill( null )
      .map( (_, index) => { 
        const column = index % columns + 1;
        const row = Math.floor( index / columns ) + 1;
        return this.board_cell_service.create( column, row, index );
      } );
  }


}
