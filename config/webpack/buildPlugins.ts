import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack, { Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/types';

export function buildPlugins({
  mode,
  paths,
  analyzer,
}: BuildOptions): Configuration['plugins'] {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: path.resolve(paths.html),
      favicon: path.resolve(paths.public, 'favicon.ico'),
    }),
  ];

  if (isDev) {
    plugins.push(
      new webpack.ProgressPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new ReactRefreshWebpackPlugin(),
    );
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
      // if you need to add static files (e.g. json) to prod uncomment this
      // new CopyPlugin({
      //   patterns: [
      //     {
      //       from: path.resolve(paths.public, '...'),
      //       to: path.resolve(paths.output, '...'),
      //     },
      //   ],
      // })
    );

    if (analyzer) {
      plugins.push(new BundleAnalyzerPlugin());
    }
  }

  return plugins;
}
