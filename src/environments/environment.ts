// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  // userapi:"https://heroku-json-server-samsung.herokuapp.com/users",
  userapi:"https://localhost:7286/api/Registrations",
  cartapi:"https://heroku-json-server-samsung.herokuapp.com/cart",
  postsapi:"https://heroku-json-server-samsung.herokuapp.com/posts"
  // userapi:"https://fake-server-app-angular-amazon.herokuapp.com/users",
  // cartapi:"https://fake-server-app-angular-amazon.herokuapp.com/cart"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
