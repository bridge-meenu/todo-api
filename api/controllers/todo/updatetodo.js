module.exports = {
    friendlyName: "Edit Todo",
  
    description: "Edit a task exist on the todo list.",
  
    extendedDescription: `this update a todo task that already exist in the database. We can change taske name and status`,
  
    inputs: {
      task: {
        type: "string",
        required: true,
        maxLength: 100,
        description: "The new task to the todo list",
      },
      due_date: {
        type: "string",
        columnType: "date",
        required: true,
        description: "Which shows the end date to complete task",
      },
      status: {
        type: "boolean",
        default: false,
        description: "Which shows whether the task complete or not",
      },
    },
  
    exits: {
      success: {
        description: "The  task is updated successfully",
      },
      invalid: {
        responseType: "badRequest",
      },
    },
  
    fn: async function ( input, exits ) {
        const _id = this.req.param('id');
      try {
        var updateTodo = await Todo.updateOne({user_id: this.req.me.id, id:_id}).set({
          task: input.task,
          due_date: input.due_date,
          status: input.status,
        });
        console.log(updateTodo);
  
        return this.res.json(updateTodo);
      } catch (e) {
        console.log(e);
      }
    },
  };
  