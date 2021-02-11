import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MobilefooterComponent } from './mobilefooter.component';

describe('MobilefooterComponent', () => {
  let component: MobilefooterComponent;
  let fixture: ComponentFixture<MobilefooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilefooterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MobilefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
