import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPetComponentComponent } from './add-pet-component.component';

describe('AddPetComponentComponent', () => {
  let component: AddPetComponentComponent;
  let fixture: ComponentFixture<AddPetComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPetComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
