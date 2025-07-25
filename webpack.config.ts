import path from 'path';
import webpack from 'webpack';
import { buildWebpack } from './config/webpack/buildWebpack';
import { BuildPaths } from './config/webpack/types/types';

type Mode = 'development' | 'production';

interface EnvVariables {
  mode?: Mode;
  port?: number;
  analyzer?: boolean;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src'),
  };

  const config: webpack.Configuration = buildWebpack({
    paths,
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    analyzer: env.analyzer ?? false,
  });

  return config;
};
