import { ZadaniePage } from './app.po';

describe('zadanie App', () => {
  let page: ZadaniePage;

  beforeEach(() => {
    page = new ZadaniePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
