/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TokenInterceptor } from './token-interceptor';

describe('TokenInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenInterceptor]
    });
  });

  it('should ...', inject([TokenInterceptor], (service: TokenInterceptor) => {
    expect(service).toBeTruthy();
  }));
});