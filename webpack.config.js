import path from 'path';

const outPath = path.join(__dirname, 'build');

export default {
  entry: {
    app: ['./src/index.js'],
  },
  output: {
    path: outPath,
    filename: 'bundle.js',
  },
  'module': {
    'loaders': [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          optional: ['runtime'],
          stage: 0,
        },
      },
    ],
    'resolve': {
      'extensions': ['', '.js', '.jsx'],
    },
  },
  devServer: {
    contentBase: outPath,
    // noInfo: true, //  --no-info option
    // hot: true,
    inline: true,
    stats: {colors: true},
  },
};