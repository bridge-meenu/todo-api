/**
 * @description :: The conventional "custom" hook.  Extends this app with custom server-start-time and request-time logic.
 * @docs        :: https://sailsjs.com/docs/concepts/extending-sails/hooks
 */
 const jwt = require('jsonwebtoken');

 module.exports = function defineCustomHook(sails) {
 
   return {
     routes: {
       /**
        * Runs before every matching route.
        *
        * @param {Ref} req
        * @param {Ref} res
        * @param {Function} next
        */
       before: {
         '/api/*': {
           skipAssets: true,
           fn: async function(req, res, next){
             let token = req.cookies.token;
             if(!token) {
               req.me = null;
               return next();
             }
             const secret = "key"
             if(jwt.verify(token, secret)) {
               let user = await User.findOne({ email: jwt.decode(token).sub });
               req.me = user;
               return next();
             }
             req.me = null;
             res.cookies('token', '');
             return next();
           }
         }
       }
     }
 
 
   };
 
 };
 