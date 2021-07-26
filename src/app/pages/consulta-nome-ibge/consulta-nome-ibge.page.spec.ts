import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultaNomeIBGEPage } from './consulta-nome-ibge.page';

describe('ConsultaNomeIBGEPage', () => {
  let component: ConsultaNomeIBGEPage;
  let fixture: ComponentFixture<ConsultaNomeIBGEPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaNomeIBGEPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultaNomeIBGEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
