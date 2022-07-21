
module.exports = {
  friendlyName: "AddTodo",

  description: "Add a new task to the todo list.",

  extendedDescription: `this creates a new todo task to the database. While creating its status shows as active. It must inclde its due date too.`,

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
      description: "The new task is added successfully",
    },
    invalid: {
      responseType: "badRequest",
    },
  },
  fn: async function (input) {
    try {
      var newTodo = await Todo.create({
        task: input.task,
        due_date: input.due_date,
        status: input.status,
        user_id: this.req.me.id
      }).fetch();
      return { message: "successfully added",response: newTodo };    
    } catch (e) {
      console.log(e);
    }
  },
};
