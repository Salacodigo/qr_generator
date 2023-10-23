import { TestBed } from '@angular/core/testing';

import { QrLinkService } from './qr-link.service';

describe('QrLinkService', () => {
  let service: QrLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
