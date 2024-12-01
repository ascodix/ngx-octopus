import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsViewerItemComponent } from './rxjs-viewer-item.component';

describe('RxjsViewerItemComponent', () => {
  let component: RxjsViewerItemComponent;
  let fixture: ComponentFixture<RxjsViewerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsViewerItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsViewerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
