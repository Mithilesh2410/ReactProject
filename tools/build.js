import webpack from 'webpack';
import config from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';
console.log('Generating minified bundle for production.This will take a moment..'.blue);

webpack(config).run((error, stats) => {
  if (error) {
    console.log(error.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack stats: ${stats}`);

  console.log('Your app is compiled in production mode in /dist. It\'s ready to roll!'.green);

  return 0;
});
