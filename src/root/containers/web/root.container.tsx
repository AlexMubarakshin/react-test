declare var process: any;

let store = null;
if (process.env.NODE_ENV !== 'development' || process.env.PLATFORM_ENV !== 'web') {
  store = require('./root.container.prod');  
} else {
  store = require('./root.container.dev');
}

export default store;
