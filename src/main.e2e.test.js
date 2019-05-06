const Application = require('spectron').Application;
const electronPath = require('electron');

const newApp = () => {
  return new Application(path=electronPath);
};

test('window opens on application start', () => {
  const app = newApp();
  app.start()
      .then(() => {
        expect(app.browserWindow.isVisible().toBeTruthy());
      })
      .catch((error) => {
        throw error;
      });
});
