import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllviewComponent } from './allview.component';

describe('AllviewComponent', () => {
  let component: AllviewComponent;
  let fixture: ComponentFixture<AllviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllviewComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
