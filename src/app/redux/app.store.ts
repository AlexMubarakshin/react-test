declare var process: any;

let store = null;
if (process.env.NODE_ENV !== 'development' || process.env.PLATFORM_ENV !== 'web') {
  store = require('./app.store.prod');  
} else {
  store = require('./app.store.dev');
}

export default store;
