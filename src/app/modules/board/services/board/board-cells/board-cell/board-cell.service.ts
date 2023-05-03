import { Injectable } from '@angular/core';
import BoardCell from 'src/app/modules/board/data/BoardCell';

@Injectable({
  providedIn: 'root'
})
export class BoardCellService {

  public create( column: number, row: number, id: number ): BoardCell {
    return { column, row, id };
  }

}
