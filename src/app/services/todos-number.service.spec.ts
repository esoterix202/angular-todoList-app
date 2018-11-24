import { TestBed } from '@angular/core/testing';

import { TodosNumberService } from './todos-number.service';

describe('TodosNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodosNumberService = TestBed.get(TodosNumberService);
    expect(service).toBeTruthy();
  });
});
