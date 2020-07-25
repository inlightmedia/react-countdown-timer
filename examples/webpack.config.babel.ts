import path from 'path';
import webpack from 'webpack'; //eslint-disable-line
import CleanWebpackPlugin from 'clean-webpack-plugin';

export default () => ({
  mode: 'production',
  entry: {
    index: path.join(__dirname, './index.tsx')
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /.(tsx|ts)?$/,
        exclude: /node_modules/,

        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
            }
          }
        ]
      },
      {
        test: /\.(scss)$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss']
  },

  plugins: [
    // Clean dist folder
    new CleanWebpackPlugin(['./dist/build.js']),
    new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(en)$/)
  ]
});
