import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotComponent } from './bot.component';
import { FormsModule } from '@angular/forms';
import { BotService } from './service/bot.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [BotComponent],
  providers: [BotService],
  exports: [BotComponent]
})
export class BotModule {
}
