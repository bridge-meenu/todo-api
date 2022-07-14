
const tokenAuth = require("../../services/UtilService");
module.exports = {

    friendlyName: 'User Login' ,

    inputs: {
        email:{
            type: 'string',
            required: true,
            unique: true,
            isEmail: true,
            maxLength: 200,
            description: 'Enter email',
            extendedDescription: 'Must be a valid username/email.',
        },

        password: {
            required: true,
            type: "string",
            maxLength: 200,
            description: 'Enter password',
        },
    },
    exits: {
        success: {
          description: "Login successfully",
        },
        invalid: {
          responseType: "badRequest",
        },
        notUser:{
          statusCode: 404,
          description: "User not found"
        }
      },
    fn: async function (input, exits) {
      try{        const user = await User.find({email: input.email }).limit(1);
      if (user == "") return exits.notUser({
        error: `Account belongs to ${input.email} not found`
      })
      var response = await User.comparePassword(input.password, user[0].password)
        const token = await sails.helpers.generateNewJwtToken(user[0].email);
        // this.req.me = user;
        this.res.cookie('token', token, { maxAge: 900000, httpOnly: true });
        return exits.success({
          
          message: `${user[0].email} has been logged in`,
          token: token,
          data: user,
          
        });}
        catch(e){
          return exits.error({
            message: `Error logging in user ${inputs.email}`,
            error: e.message,
          });
        }
    }
  
  };