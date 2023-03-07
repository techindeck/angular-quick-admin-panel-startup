export const environment = {
  production: true,
  URI: {
    ORIGIN: 'http://localhost:8904',
    API_RESOURCE: '/api/',
    BASE_URI: 'http://localhost:8904/',
  },
  services: {
    imagekitIO: {
      API_URI: '',
      CF_CDN_URI: '',
      CF_PATH: '',
      SRC: '',
      TRANSFORM: {
        size: {
          w75: 'w75',
          w100: 'w100',
          w125: 'w125',
          w150: 'w150',
          w175: 'w175',
          w200: 'w200',
          w400: 'w400',
          w600: 'w600',
        },
      },
    },
    pusher: {
      KEY: '',
      CLUSTER: 'ap2',
      CHANNEL: '',
      EVENT: '',
    },
    SAPI: {
      BASE: 'http://localhost:8904',
      PATH: '/api/',
    },
  },
};
