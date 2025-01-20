// babel.config.js
module.exports = {
    presets: [
      ['@babel/preset-env', {
        targets: 'last 2 versions, > 0.5%, Firefox ESR, not dead',  // Use a valid targets string
      }],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
  };
  
  