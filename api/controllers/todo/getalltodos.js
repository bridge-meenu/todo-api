module.exports = {
    friendlyName: "Get all todos",
    inputs:{
    },
    exits: {
        invalid: {
          responseType: "badRequest",
        },
      },
    
      fn: async function ( input, exits ) {
        try {
          var getTodo = await Todo.find({user_id: this.req.me.id});
          return this.res.json(getTodo);
        } catch (error) {
            return exits.error({
              message: 'Oops :) an error occurred',
              error: error.message,
            });
          }
        },
}
