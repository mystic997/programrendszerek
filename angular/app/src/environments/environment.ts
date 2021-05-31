// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  custom: 'This is PRF dev',
  serverUrl: 'http://localhost:4200/server',
  //serverUrl: 'http://localhost:3000/',
  firebase: {
    apiKey: "AIzaSyC0JAjDPMze_A2QG6q-i-Y3lHU61nox8Eg",
    authDomain: "homework-44ad9.firebaseapp.com",
    projectId: "homework-44ad9",
    storageBucket: "homework-44ad9.appspot.com",
    messagingSenderId: "374497283370",
    appId: "1:374497283370:web:116644f54d981ddfd02253"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
