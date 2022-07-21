/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const bcrypt = require("bcrypt");
module.exports = {
  attributes: {
    name: { type: "string", required: true },
    email: {
      type: "string",
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200,
      example: "mary.sue@example.com",
    },
    password: {
      type: "string",
      required: true,
      description:
        "Securely hashed representation of the user's login password.",
      protect: true,
      example: "2$28a8eabna301089103-13948134nad",
    },
    image: {
      type: "string",
      required: false,
      description:
        "profile picture for user.",
    },
    todos: {
      collection: "todo",
      via: "owner",
    },

    // encryptedPassword:{
    //   type: 'string',
    //   required: true,
    //   example: '2$28a8eabna301089103-13948134nad'
    // }
  },
  // beforeCreate(values, next) {
  //   bcrypt.genSalt(10, (err, salt) => {
  //       if (err) {
  //           sails.log.error(err);
  //           return next();
  //       }

  //       bcrypt.hash(values.password, salt, (err, hash) => {
  //           if (err) {
  //               sails.log.error(err);
  //               return next();
  //           }
  //           values.encryptedPassword = hash;
  //           return next();
  //       });
  //   });
  // },

  comparePassword(password, pass) {
    return new Promise(function (resolve, reject) {
      bcrypt.compare(password, pass, (err, match) => {
        if (err) {
          sails.log.error(err);
          return reject({ error: "Something went wrong!" });
        }
        if (match) return resolve();
        else return reject({ error: "Mismatch passwords" });
      });
    });
  },
};
