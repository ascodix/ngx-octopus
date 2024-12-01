import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RxjsViewerComponent } from './rxjs-viewer.component';

describe('RxjsViewerComponent', () => {
  let component: RxjsViewerComponent;
  let fixture: ComponentFixture<RxjsViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsViewerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RxjsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
