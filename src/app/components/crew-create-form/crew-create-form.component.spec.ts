import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewCreateFormComponent } from './crew-create-form.component';

describe('CrewCreateFormComponent', () => {
  let component: CrewCreateFormComponent;
  let fixture: ComponentFixture<CrewCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewCreateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
