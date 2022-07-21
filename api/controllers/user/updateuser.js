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
      type: "string",
      isEmail: true,
      description:
        "The email address for the new account, e.g. username@example.com.",
      extendedDescription: "Must be a valid email address.",
    },
    image: {
      type: "string",
      required: false,
      description: "profile picture for user.",
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

  fn: async function (input, exits) {
    try {

      if ((this.req.file("image").fieldName == "image")) {
        var uploadFile = this.req.file("image");
        var origifile = this.req.file("image")._files[0].stream.filename;
        var filename = origifile;
        uploadFile.upload({
          dirname: "../../assets/images",
          saveAs: function (file, cb) {
            cb(null, file.filename);

            //
          },
        });
        var updateTodo = await User.updateOne({ id: this.req.me.id }).set({
          name: input.name,
          email: input.email,
          image: filename,
        });
      } else if((this.req.file("image").fieldName == "NOOP_image")) {
        var updateTodo = await User.updateOne({ id: this.req.me.id }).set({
          name: input.name,
          email: input.email,
        });
      }

      return this.res.json(updateTodo);
    } catch (e) {
      console.log(e);
    }
  },
};
