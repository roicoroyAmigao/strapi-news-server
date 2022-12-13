import Logo from 'assets/logo.svg';

export default {
  config: {
    locales: ['en', 'pt-BR'],
    translations: {
      en: {
        'Auth.form.email.placeholder': 'roicoroy@mercado.com',
        'Auth.form.welcome.subtitle': 'Welcome to the jungle',
        'Auth.form.welcome.title': 'Mercado Amigão!',
        'global.documentation': 'Example documentation text',
        'app.components.BlockLink.documentation.content': 'Discover our products',
        'app.components.HomePage.welcome.again': 'Welcome 👋'
      },
      'pt-BR': {
        'Auth.form.email.placeholder': 'roicoroy@mercado.com',
        'Auth.form.welcome.subtitle': 'Bem-vindo a selva de pedras',
        'Auth.form.welcome.title': 'Mercado Amigão!',
        'global.documentation': 'Exemplo documentação',
        'app.components.BlockLink.documentation.content': 'Descubra nossos produtos',
        'app.components.HomePage.welcome.again': 'Bem-vindo 👋'
      },
    },
    auth: {
      logo: Logo,
    },
    theme: {
      colors: {
        // danger100: '#FF5722',
        // danger700: '#ff6838',
        // neutral0: '#2dd36f',
        // neutral100: '#FF5722',
        // neutral150: '#2dd36f',
        // neutral200: '#343746',
        // neutral500: '#f8f8f2',
        // neutral600: '#f8f8f2',
        // neutral700: '#f8f8f2',
        // neutral800: '#ffffff',
        // neutral900: '#282A36',
        // primary100: '#FF5722',
        // primary200: '#FF5722',
        // primary500: '#FF5722',
        // primary600: '#FF5722',
        // primary700: '#FF5722',
        // secondary100: '#e04d1e',
        // success100: '#2dd36f',
      },
    },
    head: {
      favicon: Logo,
      title: 'Ion News Blog Backend',
    },
    menu: {
      logo: Logo,
    },
    tutorials: false,
    notifications: { release: false },
  },
  bootstrap() { 
    console.log('bootstrap');
  },
};
