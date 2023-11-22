import { TestBed } from '@angular/core/testing';

import { AjoutArticleServiceService } from './ajout-article-service.service';

describe('AjoutArticleServiceService', () => {
  let service: AjoutArticleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutArticleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
