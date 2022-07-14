/**
 * UtilSerice.js
 *
 * @description :: Utility service like haspasword, compare password
 * @docs        :: https://sailsjs.com/documentation/concepts/services
 */


 const bcrypt = require("bcrypt");
 const SALT_ROUND = 10;
 
 module.exports = {
 
     async hasPassword(password) {
         return await bcrypt.hash(password, SALT_ROUND);
     },
 
     async comparePassword(password, hash) {
         return await bcrypt.compare(password, hash)
     },
 };