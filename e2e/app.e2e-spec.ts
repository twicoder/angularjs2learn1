import { Angular2learn1Page } from './app.po';

describe('angular2learn1 App', () => {
  let page: Angular2learn1Page;

  beforeEach(() => {
    page = new Angular2learn1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
