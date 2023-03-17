import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('First technology should be SQL', () => {
    const sql = fixture.nativeElement.querySelector('[data-test="sql"]');
    expect(sql.textContent).toEqual('SQL');
  });
  it('Second technology should be NodeJS', () => {
    const sql = fixture.nativeElement.querySelector('[data-test="nodejs"]');
    expect(sql.textContent).toEqual('NodeJS');
  });
  it('Third technology should be TypeScript', () => {
    const sql = fixture.nativeElement.querySelector('[data-test="typescript"]');
    expect(sql.textContent).toEqual('TypeScript');
  });
});
