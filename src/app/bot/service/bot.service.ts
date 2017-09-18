import { Injectable } from '@angular/core';

@Injectable()
export class BotService {

  constructor() {
  }

  public getData(query: string): any {
    return [{id: '1', name: 'Sasha'}, {id: '2', name: 'Olga'}];
  }

}
