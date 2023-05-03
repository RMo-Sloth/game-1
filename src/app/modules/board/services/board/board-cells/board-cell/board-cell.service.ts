import { Injectable } from '@angular/core';
import BoardCell from 'src/app/modules/board/services/board/board-cells/board-cell/BoardCell';

@Injectable({
  providedIn: 'root'
})
export class BoardCellService {

  public create( columns: number, rows: number, id: number ): BoardCell {
    const column = id % columns + 1;
    const row = Math.floor( id / columns ) + 1;
    
    const neighbours: number[] = [];
    const position_1 = id - 2 * columns;
    if( row > 2 )
      neighbours.push( position_1 );

    const position_2 = id - columns + 1 - row % 2;
    if( position_2 >= 0 )
      neighbours.push( position_2 );

    // const position_3 = id + column;
    // if( position_3 < column*row )
    //   neighbours.push( position_3 );
    
    const position_4 = id + 2 * columns;
    if( row < rows - 1)
      neighbours.push( position_4 );
    
    // const position_5 = id + column - 1;
    // if( position_5 < column*row && position_5 > 0 )
    //   neighbours.push( position_5 );

    const position_6 = id - columns - row % 2;
    if( row > 1 )
      neighbours.push( position_6 );

    return { column, row, id, neighbours };
  }

}
