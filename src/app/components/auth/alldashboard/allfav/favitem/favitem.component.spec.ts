import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavitemComponent } from './favitem.component';

describe('FavitemComponent', () => {
  let component: FavitemComponent;
  let fixture: ComponentFixture<FavitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavitemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
