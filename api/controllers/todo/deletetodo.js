module.exports = {
    friendlyName: "Delete Todo",
  
    description: "Delete a  task from the todo list.",
  
    extendedDescription: ``,
  
    inputs: {
      
    },
  
    exits: {
      
      error: {
        responseType: "Something went wrong",
      },
    },
  
    fn: async function ( input, exits ) {
      const id = this.req.param('id');
      try {
        var deleteTodo = await Todo.destroyOne({user_id: this.req.me.id, id: id});
        if (typeof result == 'undefined') {
          return this.res.json({
            message: "Record deleted"
          });
        }
        return this.res.json({
          message: "Record not found"
        }, 404);
  
      
      } catch (error) {
        return exits.error({
          message: 'Oops :) an error occurred',
          error: error.message,
        });
      }
    },
  };
  