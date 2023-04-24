import { TestBed } from '@angular/core/testing';

import { BoardCellsService } from './board-cells.service';

describe('BoardCellsService', () => {
  let service: BoardCellsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardCellsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
