import { AngularAlertPage } from './app.po';

describe('angular-alert App', () => {
  let page: AngularAlertPage;

  beforeEach(() => {
    page = new AngularAlertPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
