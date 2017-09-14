import { ClientSuperBotPage } from './app.po';

describe('client-super-bot App', () => {
  let page: ClientSuperBotPage;

  beforeEach(() => {
    page = new ClientSuperBotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
