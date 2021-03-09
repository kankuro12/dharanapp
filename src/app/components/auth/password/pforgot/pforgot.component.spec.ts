import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PforgotComponent } from './pforgot.component';

describe('PforgotComponent', () => {
  let component: PforgotComponent;
  let fixture: ComponentFixture<PforgotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PforgotComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PforgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
