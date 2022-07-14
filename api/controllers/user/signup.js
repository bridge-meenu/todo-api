module.exports = {
  friendlyName: "Signup",

  description: "Sign up for a new user.",

  extendedDescription: `this creates a new user to the database.`,

  inputs: {
    name: {
      type: "string",
      required: true,
    },
    email: {
        equired: true,
        type: 'string',
        isEmail: true,
        description: 'The email address for the new account, e.g. username@example.com.',
        extendedDescription: 'Must be a valid email address.',
    },
    password: {
        required: true,
        type: 'string',
        maxLength: 200,
        example: 'hcKf5445kjhghj',
        description: 'The password to use for the new account.'
      
    },
  },
  exits: {
    success: {
      description: "New user created successfully.",
    },

    invalid: {
      responseType: "badRequest",
      description: "The email address is invalid.",
    },

    emailAlreadtInUse: {
      statusCode: 409,
      description: "The provided email address is already in use.",
    },
  },
  fn: async function ( input, exits) {
    try {
      console.log(input)
        var newEmail = input.email.toLowerCase();
        var newUser = await User.create({
            name: input.name,
            email: newEmail,
            password: await UtilService.hasPassword(input.password),
          }).fetch();
return exits.success({
  message:`Account created for ${newUser.name} successfully` 
})
            
    } catch (e) {
      if (e.code === 'E_UNIQUE'){
        return exits.emailAlreadtInUse({
          error: 'The email already in use'
        });
      }
      return exits.invalid({
        error: "An error is occurred"
      })
    }
  },
};
