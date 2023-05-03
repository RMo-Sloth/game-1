import { Injectable } from '@angular/core';
import BoardCell from '../../data/BoardCell';

@Injectable({
  providedIn: 'root'
})
export class BoardCellsService {

  // may belong in a BoardCells service
  private default_record(): BoardCell { 
    return {
      column: 0,
      row: 0,
      id: 0
    }
  }

  constructor() { }

  public generate_records( rows: number, columns: number ): BoardCell[] {
    return Array(rows * columns)
      .fill( this.default_record() )
      .map( (_, index) => ({
        column: index % columns + 1, 
        row: Math.floor( index / columns ) + 1,
        id: index
      }) );
  }


}
