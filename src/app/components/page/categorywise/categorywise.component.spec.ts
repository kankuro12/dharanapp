import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategorywiseComponent } from './categorywise.component';

describe('CategorywiseComponent', () => {
  let component: CategorywiseComponent;
  let fixture: ComponentFixture<CategorywiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorywiseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategorywiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
