module.exports = {
    friendlyName: "Get todo",
    inputs:{
    },
    exits: {
        invalid: {
          responseType: "badRequest",
        },
      },
    
      fn: async function ( input, exits ) {
          const _id = this.req.param('id');
        try {
          var getTodo = await Todo.findOne({user_id: this.req.me.id, id:_id});
          return this.res.json(getTodo);
        } catch (error) {
            return exits.error({
              message: 'Oops :) an error occurred',
              error: error.message,
            });
          }
        },
}
