import { ReportsPOCPage } from './app.po';

describe('reports-poc App', function() {
  let page: ReportsPOCPage;

  beforeEach(() => {
    page = new ReportsPOCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
