const jwt = require('jsonwebtoken');

module.exports = {


  friendlyName: 'Generate new jwt token',


  description: '',


  inputs: {
    subject: {
      type: 'string',
      required: true
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    const payload = {
      sub: inputs.subject, // subject
      iss: 'Sails TODO API' // issuer
    };
    const secret = "key";
    const token = jwt.sign(payload, secret, { expiresIn: '1d' });
    return token;
  }


};

