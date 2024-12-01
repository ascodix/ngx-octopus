import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RxjsConsoleComponent } from './rxjs-console.component';

describe('RxjsConsoleComponent', () => {
  let component: RxjsConsoleComponent;
  let fixture: ComponentFixture<RxjsConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsConsoleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RxjsConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
