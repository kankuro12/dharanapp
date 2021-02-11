import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopmainComponent } from './shopmain.component';

describe('ShopmainComponent', () => {
  let component: ShopmainComponent;
  let fixture: ComponentFixture<ShopmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopmainComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
