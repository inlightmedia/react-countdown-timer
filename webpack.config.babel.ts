import path from 'path';
import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
const packageJson = require('./package.json');

export default () => ({
  mode: 'production',
  entry: {
    index: path.join(__dirname, 'src/index.ts')
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].ts',
    library: packageJson.name,
    libraryTarget: 'umd',
    globalObject: 'this'
  },

  module: {
    rules: [
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', "@babel/preset-typescript"]
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

  externals: {
    react: 'react',
    reactDOM: 'react-dom'
  },

  plugins: [
    new CleanWebpackPlugin(['dist/*.*']),
    new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(en)$/)
  ],
  optimization: {
    splitChunks: {
      name: 'vendor',
      minChunks: 2
    }
  }
});
