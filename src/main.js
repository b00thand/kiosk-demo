function setup() {
  let idleTimeout;

  Alpine.store('model', {
    currentPage: 'home', // 'home', 'service'
    currentLanguage: 'english',
    dialNumber: '+16786453333',
    services: [],

    init() {
      const params = new URLSearchParams(location.search);
      if (params.has('number')) {
        this.dialNumber = params.get('number');
      }
      this.services = [
        { url: this.dialNumber, name: 'Call' },
      ];
      this.resetIdleTimer(); // Start idle timer
      this.addIdleListeners(); // Attach event listeners
    },

    get page() {
      return this.currentPage;
    },

    set page(nextPage) {
      this.currentPage = nextPage;
      this.resetIdleTimer(); // Reset timer on page change
    },

    currentLanguage: 'english',
    languages: ['english', 'norwegian'],
    
    get language() {
      return this.currentLanguage;
    },

    set language(current) {
      this.currentLanguage = current;
    },

    resetIdleTimer() {
      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => {
        this.currentPage = 'home'; // Return to home screen after 10s
      }, 10000); // 10 seconds
    },

    addIdleListeners() {
      ['click', 'mousemove', 'keypress', 'touchstart'].forEach(event => {
        document.addEventListener(event, () => this.resetIdleTimer());
      });
    }
  });
}

document.addEventListener('alpine:init', setup);
