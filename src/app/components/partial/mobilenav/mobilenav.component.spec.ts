import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MobilenavComponent } from './mobilenav.component';

describe('MobilenavComponent', () => {
  let component: MobilenavComponent;
  let fixture: ComponentFixture<MobilenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilenavComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MobilenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
