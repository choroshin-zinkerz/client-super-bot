import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotComponent } from './bot.component';
import { FormsModule } from '@angular/forms';
import { BotService } from './service/bot.service';

describe('BotComponent', () => {
  let component: BotComponent;
  let fixture: ComponentFixture<BotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      providers: [BotService],
      declarations: [BotComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
