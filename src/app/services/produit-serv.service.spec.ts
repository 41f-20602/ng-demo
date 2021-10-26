import { TestBed } from '@angular/core/testing';

import { ProduitServService } from './produit-serv.service';

describe('ProduitServService', () => {
  let service: ProduitServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
