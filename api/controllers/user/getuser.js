module.exports = {
    friendlyName: "Get User",
    inputs:{
    },
    exits: {
        invalid: {
          responseType: "badRequest",
        },
      },
    
      fn: async function (  exits ) {
          const _id = this.req.param('id');
        try {
          var getUser = await User.findOne({id: this.req.me.id});
          return this.res.json(getUser);
        } catch (error) {
            return exits.error({
              message: 'Oops :) an error occurred',
              error: error.message,
            });
          }
        },
}
