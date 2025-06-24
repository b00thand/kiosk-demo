window.GENESYS_CONFIG = {
  en: {
    // WILL BE IGNORED, KEEP AS IS
    organizationId: '26cc7c06-c180-4ad3-9309-13416ea96e0c',
    // CHANGE THIS TO MESSENGER DEPLOYMENT ID
    deploymentId: '7c8e841b-99f8-4d9b-b4b7-587332410de7',
    videoengagerUrl: 'videome.leadsecure.com',
    tennantId: 'JaOzURAS29JLcWUl',
    // CHANGE THIS TO PURECLOUD DOMAIN
    domain: 'usw2.pure.cloud',
    queue: 'CEI CSC TechExpress'
  }
};

/**
 * @description
 * Function to apply VideoEngager configuration based on the selected language.
 * @param {string} language - The language code (e.g., 'en').
 * @throws Will throw an error if the configuration for the specified language is not found.
 * */
function applyVeHubConfig(language) {
  const configs = window.GENESYS_CONFIG[language];
  if (!configs) {
    console.error(`Configuration for language "${language}" not found.`);
    throw new Error(`Configuration for language "${language}" not found.`);
  }
  window.__VideoEngagerConfigs = {
    videoEngager: {
      tenantId: configs.tenantId, // Provided by VideoEngager Settings Page
      veEnv: configs.videoengagerUrl, // e.g., 'videome.leadsecure.com'
      isPopup: false, // true for popup video, false for inline
      customAttributes: {
        'context.firstname': 'TechExpress',
        'context.lastname': 'Kiosk User',
        // email: 'na@videoengager.com',
        subject: 'Tech Express Video Call',
      },
      debug: false, // Enable debug mode for VideoEngager
      firstMessage: '**This is a VideoEngager Video Call!!!**'
    },
    genesys: {
      debug: false, // Enable debug mode for VideoEngager
      deploymentId: configs.deploymentId, // Genesys Cloud deployment ID
      domain: configs.domain // e.g., 'mypurecloud.com', 'usw2.pure.cloud'
    },
    logger: false, // Enable logging for debugging
    useGenesysMessengerChat: false // Set to true to enable Genesys chat functions
  }
}
window.applyVeHubConfig = applyVeHubConfig;
/**
 *  @description
 * Background image for the page while the page is in Initial State
 */
window.BACKGROUND_IMAGE = 'img/HomeScreen.svg';

/**
 *  @description
 * Loading Screen Images
 */
window.onload = function () {
  // Loading images
  const imageUrls = [
    'img/Loading1.svg',
    'img/Loading2.svg'
  ];

  let currentIndex = 0;
  let intervalID;
  const imageSlider = document.getElementById('image-slider');

  // rotate through loading images
  function nextImage() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    imageSlider.src = imageUrls[currentIndex];
  }
};
