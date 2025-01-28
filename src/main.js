
function setup() {

  Alpine.store('model', {
    currentPage: 'home', // 'home', 'service'
    currentLanguage: 'english',
    dialNumber: 'Kiosk Test',
    services: [],

    init() {
      const params = new URLSearchParams(location.search);
      if (params.has('number')) {
        this.dialNumber = params.get('number');
      } else {
        this.dialNumber = 'Kiosk Test'; // Default value if no query param is present
      }
    
      // Ensure dialNumber is a valid URI, or use a placeholder
      const isValidURI = /^([a-z][a-z\d+\-.]*:)?\/\//i.test(this.dialNumber);
      const dialURL = isValidURI ? this.dialNumber : `tel:${this.dialNumber}`;
    
      this.services = [
        { url: dialURL, name: 'Call' },
      ];
    },
    get page() {
      return this.currentPage;
    },
    set page(nextPage) {
      this.currentPage = nextPage;
    },
    currentLanguage: 'english',
    languages: ['english', 'norwegian'],
    get language() {
      return this.currentLanguage;
    },
    set language(current) {
      this.currentLanguage = current;
    },
  });

}

document.addEventListener('alpine:init', setup);

