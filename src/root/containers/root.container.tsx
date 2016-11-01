declare var process: any;

let root = null;

if (process.env.NODE_ENV === 'production') {
  root = require('./root.container.prod');
} else {
  root = require('./root.container.dev');
}

export default root.default;
