import { TestBed } from '@angular/core/testing';

import { ServiceberitaService } from './serviceberita.service';

describe('ServiceberitaService', () => {
  let service: ServiceberitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceberitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
