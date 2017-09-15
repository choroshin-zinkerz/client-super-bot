import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotComponent } from './bot.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BotComponent],
  exports: [BotComponent]
})
export class BotModule {
}
