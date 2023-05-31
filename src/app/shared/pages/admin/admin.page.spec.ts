import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminPage } from './admin.page';

describe('LoginComponent', () => {
  let component: AdminPage;
  let fixture: ComponentFixture<AdminPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPage]
    });
    fixture = TestBed.createComponent(AdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
