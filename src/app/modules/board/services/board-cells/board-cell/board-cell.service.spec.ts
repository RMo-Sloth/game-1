import { TestBed } from '@angular/core/testing';

import { BoardCellService } from './board-cell.service';

describe('BoardCellService', () => {
  let service: BoardCellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardCellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
