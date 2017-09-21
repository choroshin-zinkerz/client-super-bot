import { Component, OnInit } from '@angular/core';
import { BotService } from './service/bot.service';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss']
})
export class BotComponent implements OnInit {
  private queryText: string;
  private queryResult: string;
  private botService: BotService;

  constructor(botService: BotService) {
    this.botService = botService;
  }

  ngOnInit() {
  }

   onButtonClicked() {
    this.queryResult = this.botService.getData(this.queryText);
  }
}
