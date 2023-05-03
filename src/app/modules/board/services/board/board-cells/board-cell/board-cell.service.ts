import { Injectable } from '@angular/core';
import BoardCell from 'src/app/modules/board/services/board/board-cells/board-cell/BoardCell';

@Injectable({
  providedIn: 'root'
})
export class BoardCellService {

  public create( column: number, row: number, id: number ): BoardCell {
    const neighbours: number[] = [];
    
    const position_1 = id - 2 * column;
    if( position_1 >= 0 ) 
      neighbours.push( position_1 );

    const position_2 = id - column;
    if( position_2 >= 0 )
      neighbours.push( position_2 );

    const position_3 = id + column;
    if( position_3 < column*row )
      neighbours.push( position_3 );
    
    const position_4 = id + 2 * column;
    if( position_4 < column*row )
      neighbours.push( position_4 );
    
    const position_5 = id + column - 1;
    if( position_5 < column*row && position_5 > 0 )
      neighbours.push( position_5 );

    const position_6 = id - column - 1;
    if( position_6 >= 0 )
      neighbours.push( position_6 );

    return { column, row, id, neighbours };
  }

}
