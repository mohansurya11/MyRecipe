import { TestBed } from '@angular/core/testing';

import { CalIngredientsService } from './cal-ingredients.service';

describe('CalIngredientsService', () => {
  let service: CalIngredientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalIngredientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
