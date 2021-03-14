import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllfavComponent } from './allfav.component';

describe('AllfavComponent', () => {
  let component: AllfavComponent;
  let fixture: ComponentFixture<AllfavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllfavComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllfavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
