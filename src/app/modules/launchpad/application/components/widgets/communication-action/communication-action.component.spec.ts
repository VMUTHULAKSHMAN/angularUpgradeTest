import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommunicationService } from 'app/modules/launchpad/application/repository/communication-service/communication.service';

import { CommunicationActionComponent } from './communication-action.component';

describe('CommunicationActionComponent', () => {
  let component: CommunicationActionComponent;
  let fixture: ComponentFixture<CommunicationActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CommunicationActionComponent],
      providers: [CommunicationService]
    })
      .overrideTemplate(CommunicationActionComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
