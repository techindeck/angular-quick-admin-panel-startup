// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  URI: {
    ORIGIN: 'localhost:8000',
    API_RESOURCE: '/api/',
    BASE_URI: 'http://localhost:8000/',
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
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
