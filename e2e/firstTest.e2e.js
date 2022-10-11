// eslint-disable-next-line no-undef
describe('Login flow test', () => {
  beforeEach(async () => {
    await device.launchApp();
    // await device.reloadReactNative();
  });

  it('should have login screen', async () => {
    await expect(element(by.id('loginView'))).toBeVisible();
  });

  it('should fill login form', async () => {
    await element(by.id('usernameInput')).typeText('zzzzz');
    await element(by.id('passwordInput')).typeText('test123\n');
    await element(by.id('loginButton')).tap();
  });

  it('should show dashboard screen', async () => {
    await expect(element(by.id('dashboardView'))).toBeVisible();
    await expect(element(by.id('loginView'))).not.toExist();
  });
});
