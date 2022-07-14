const jwt = require("jsonwebtoken");
module.exports = {


  friendlyName: 'Logout',


  description: 'Logout user.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs,exits ) {
    // refer https://javascript.plainenglish.io/authentication-systems-using-jwt-and-node-js-9c3cc14aaf82
    this.req.me = null;
    this.res.clearCookie('token');
    return exits.success();
  }

};
