import { ProjetoWebPage } from './app.po';

describe('projeto-web App', function() {
  let page: ProjetoWebPage;

  beforeEach(() => {
    page = new ProjetoWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
