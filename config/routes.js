/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  "/": { view: "pages/homepage" },

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/
  
  "POST /api/v1/user/signup": { action: "user/signup" },
  "POST /api/v1/user/logout": { action: "user/logout" },
  "POST /api/v1/user/login": { action: "user/login" },
  "GET /api/v1/user": { action: "user/getuser" },
  "PUT /api/v1/user": { action: "user/updateuser" },
  "POST /api/v1/todo": { action: "todo/addtodo" },
  "GET /api/v1/todo/:id": { action: "todo/gettodo" },
  "GET /api/v1/todos": { action: "todo/getalltodos" },
  "PUT /api/v1/todo/:id": { action: "todo/updatetodo" },
  "DELETE /api/v1/todo/:id": { action: "todo/deletetodo" },
  // "GET /me": "user/me",
  //   'POST /api/v1/user/signup': {
  //     controller: 'UserController',
  //     action: 'signup',
  //     swagger: {
  //       summary: 'User Signup',
  //       tags: [
  //         "User Signup"
  //       ],
  //       description: 'this is for new user signup',
  //       parameters: [
  //         {
  //           in: "query",
  //           name: "email",
  //           required: true,
  //           schema: {
  //             type: "string",
  //             maxLength: 50,
  //           },
  //           description: "Enter your email"
  //         },
  //         {
  //           in: "query",
  //           name: "password",
  //           required: true,
  //           schema: {
  //             type: "string",
  //             maxLength: 200,
  //           },
  //           description: "Enter your password"
  //         },
  //         {
  //           in: "query",
  //           name: "fullname",
  //           required: true,
  //           schema: {
  //             type: "string",
  //             maxLength: 50,
  //           },
  //           description: "Enter your name"
  //         },
  //     ],
  //   }
  // }
  // 'GET  /api/v1/user/me' : {
  //   controller: 'UserController',
  //   action: 'me',
  //   swagger: {
  //     summary: 'User Details',
  //     tags: [
  //       "User Details"
  //     ],
  //     description: 'This is for getting logged in user details',
  //     security: [
  //       {
  //         JWT: []
  //       }
  //     ]
  //   }
  // },
};
