import { CodersPage } from './app.po';

describe('coders App', () => {
  let page: CodersPage;

  beforeEach(() => {
    page = new CodersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
