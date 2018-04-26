import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry: './src/index',
    target: 'web',
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.DefinePlugin(GLOBALS),
      new ExtractTextPlugin('styles.css'),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.ProvidePlugin({
          $:'jquery',
          jQuery:'jquery'
        })
    ],
    module: {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
            {test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap")},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
            {test:/\.json$/, loader: 'json'},
            {test: /\.gif$/,    loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.jpg$/,    loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.png$/,    loader: "url-loader?prefix=img/&limit=5000" },
            {test:/\.(jpg|png)$/, include: path.join(__dirname,'images'), loader: 'file?name=[path][name].[hash].[ext]'},
            {test:/(\.less)$/,loaders:['style','css','less']}
        ]
    }
};
