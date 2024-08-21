import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormViewComponent } from './create-form-view.component';

describe('CreateFormViewComponent', () => {
  let component: CreateFormViewComponent;
  let fixture: ComponentFixture<CreateFormViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFormViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
