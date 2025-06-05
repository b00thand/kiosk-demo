window.GENESYS_CONFIG = {
  en: {
    organizationId: '26cc7c06-c180-4ad3-9309-13416ea96e0c',
    deploymentId: '4d91d146-8a5e-4500-b998-3a12eef90df5',
    videoengagerUrl: 'https://videome.leadsecure.com',
    tennantId: 'JaOzURAS29JLcWUl',
    environment: 'https://api.usw2.pure.cloud',
    queue: 'CEI CSC TechExpress'
  }
};

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
  function nextImage () {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    imageSlider.src = imageUrls[currentIndex];
  }

 
};

