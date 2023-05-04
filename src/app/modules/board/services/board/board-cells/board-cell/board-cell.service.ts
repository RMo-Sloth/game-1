import { Injectable } from '@angular/core';
import BoardCell from 'src/app/modules/board/services/board/board-cells/board-cell/BoardCell';

@Injectable({
  providedIn: 'root'
})
export class BoardCellService {

  public create( columns: number, rows: number, id: number ): BoardCell {
    const column = ( Math.floor( id / columns ) % 2 === 0) ? id % columns + 1 : id % columns + 1 + columns;
    const row = Math.floor( id / (columns * 2) ) + 1;
    
    const neighbours: number[] = [];

    // top position
    const position_1 = id - 2 * columns;
    if( row > 1 )
      neighbours.push( position_1 );

    // top-right position
    const position_2 = id + (column % 2 ? -rows * 2 + 3: 1);
    if( row > 1 && column < columns * 2|| row === 1 && column % 2 === 0 && column < columns * 2 )
      neighbours.push( position_2 );

    // const position_3 = id + column;
    // if( position_3 < column*row )
    //   neighbours.push( position_3 );
    
    // bottom position
    const position_4 = id + 2 * columns;
    if( row < rows / 2 )
      neighbours.push( position_4 );
    
    // const position_5 = id + column - 1;
    // if( position_5 < column*row && position_5 > 0 )
    //   neighbours.push( position_5 );

    // top-left position
    const position_6 = id + (column % 2 ? -rows * 2 + 1: -1);
    if( row > 1 && column > 1 || row === 1 && column % 2 === 0 )
      neighbours.push( position_6 );

    return { column, row, id, neighbours };
  }

}
