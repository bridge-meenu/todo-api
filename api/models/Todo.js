/**
 * Todo.js
 *
 * Tasks that created by a user.
 */
module.exports = {
  attributes: {
    task: { type: "string", required: true },
    due_date: { type: "string", columnType: "date", required: true },
    status: { type: "boolean" },
    user_id: { type: "number" },
    owner: {
      model: "user",
    },
  },
};
