# Kiosk Demo Configuration Guide

This README provides instructions for configuring the kiosk demo. Follow these steps to customize your kiosk experience.

### Configuring Genesys Settings

1. Navigate to `./config/conf.js` in the kiosk root folder.
2. Find the `window.GENESYS_CONFIG` setting.
3. Replace the existing configuration with your Genesys configuration details.

### Customizing Carousel Images

1. In the same `conf.js` file, locate `window.CAROUSEL_ITEMS`.
2. This setting expects an array of objects in the form: `Array<{src:string}>`.
3. Edit this array to include the paths to the images you want to display during the loading state.

### Changing the Background Image

1. Still in `conf.js`, find the `window.BACKGROUND_IMAGE` setting.
2. Replace the current value with the path to your desired background image.

### Additional Notes

- Changes will take effect after restarting the kiosk application.
- The kiosk web app can be run locally by opening the file path in a browser.
