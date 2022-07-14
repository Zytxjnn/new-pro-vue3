import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

exports.cors = {
  origin: '*',
  allowMethods: 'GET,POST,DELETE,PUT',
}

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1657785539866_6576';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.cors = {
    origin: () => '*',
    allowMethods: 'GET,POST,DELETE,PUT',
    credentials: true
  }

  const useConfig = {
    APP_KEY: '3439d48dc43ed9e73d3b3d67d1bd0d99',
    API: {
      GET_NEW_LIST: 'http://v.juhe.cn/toutiao/index'
    }
  }

  config.security = {
    csrf: {
      enable: false
    }
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
    ...useConfig
  };
};
