const { file } = require("grunt");
var sails = require("sails");
var request = require("supertest");
let todo_id = "";
let user_email = "";
let random_email = "";
let for_delete = "";
const fs = require("fs");
//signup with positive case

describe("Signup", () => {
  it("Signs up new user", (done) => {
    random_email = Math.random().toString(36).slice(2, 9);
    const newUser = {
      name: "amar",
      email: `${random_email}@gmail.com`,
      password: "12312312",
    };
    request(sails.hooks.http.app)
      .post("/api/v1/user/signup")
      .send(newUser)
      .expect(200)
      .end((err, res) => {
        user_email = res.body.user.email;
        done(err);
      });
  });
});

//negative case for null  name

describe("Signup", () => {
  it("Signs up negative case for null name", (done) => {
    const newUser = {
      name: "",
      email: "meenu@gmail.com",
      password: "12312312",
    };
    request(sails.hooks.http.app)
      .post("/api/v1/user/signup")
      .send(newUser)
      .expect(400)
      .end((err) => {
        done(err);
      });
  });
});

// sign up with existing mail id

describe("Signup", () => {
  it("Signs up test case fail for existing mail id", (done) => {
    const newUser = {
      name: "meen",
      email: "meendusa@gmail.com",
      password: "12312312",
    };
    request(sails.hooks.http.app)
      .post("/api/v1/user/signup")
      .send(newUser)
      .expect(409)

      .end((err) => {
        done(err);
      });
  });
});

//login

describe("Login", () => {
  it("login user", (done) => {
    const newUser = {
      email: user_email,
      password: "12312312",
    };
    request(sails.hooks.http.app)
      .post("/api/v1/user/login")
      .send(newUser)
      .expect(200)

      .end((err, res) => {
        cookie = res.headers["set-cookie"];
        done(err);
      });
  });
});

//get user

describe("Get user", () => {
  it("get logged user details", (done) => {
    request(sails.hooks.http.app)
      .get("/api/v1/user")
      .set("cookie", cookie)
      .expect(200)

      .end((err) => {
        done(err);
      });
  });
});

//update user for positive case

describe("Update user", () => {
  it("Update user details", (done) => {
    request(sails.hooks.http.app)
      .put(`/api/v1/user`)
      .set("cookie", cookie)
      .set("content-type", "multipart/form-data")
      .field("email", `${random_email}@gmail.com`)
      .field("name", "akku")
      .attach(
        "image",
        fs.readFileSync(`${__dirname}/tests/pic11.jpeg`),
        "tests/pic11.png"
      )
      .expect(200)
      .end((err) => {
        done(err);
      });
  });
});

//update user with negative case

describe("Update User", () => {
  it("Update user details without image", (done) => {
    request(sails.hooks.http.app)
      .put(`/api/v1/user`)
      .set("cookie", cookie)
      .set("content-type", "multipart/form-data")
      .field("email", `${random_email}@gmail.com`)
      .field("name", "akku")
   
      .expect(200)
      .end((err) => {
        done(err);
      });
  });
});
//add todo

describe("Add todo", () => {
  it("Add Todo", (done) => {
    const newTodo = {
      task: "new task",
      due_date: "2022/02/02",
    };
    request(sails.hooks.http.app)
      .post("/api/v1/todo")
      .set('cookie', cookie)
      .send(newTodo)
      .expect(200)
      .end((err, res) => {
        todo_id = res.body.response.id;
        done(err);
      });
  });

  it("Add 2nd Todo", (done) => {
    const todo = {
      task: "2nd task",
      due_date: "2022/02/02",
    };
    request(sails.hooks.http.app)
      .post("/api/v1/todo")
      .set('cookie', cookie)
      .send(todo)
      .expect(200)
      .end((err) => {

        done(err);
      });
  });

  it("Add 3rd Todo", (done) => {
    const fordelete = {
      task: "3rd task",
      due_date: "2022/02/02",
    };
    request(sails.hooks.http.app)
      .post("/api/v1/todo")
      .set('cookie', cookie)
      .send(fordelete)
      .expect(200)
      .end((err,res) => {
        for_delete = res.body.response.id;
        done(err);
      });
  });
});

// add todo with null value

describe("Add todo", () => {
  it("Add Todo negative case null values", (done) => {
    const newTodo = {
      task: "taskk",
      due_date: "",
    };
    request(sails.hooks.http.app)
      .post("/api/v1/todo")
      .set('cookie', cookie)
      .send(newTodo)
      .expect(400)
      .end((err) => {
        done(err);
      });
  });
});

//get all todos

describe("Get todos", () => {
  it("Get all todos", (done) => {
    request(sails.hooks.http.app)
      .get("/api/v1/todos")
      .set('cookie', cookie)
      .expect(200)
      .end((err) => {
        done(err);
      });
  });
});

//get one todo

describe("Get todo", () => {
  it("Get  todo", (done) => {
    request(sails.hooks.http.app)
      .get(`/api/v1/todo/${todo_id}`)
      .set('cookie', cookie)
      .expect(200)
      .end((err) => {
        done(err);
      });
  });
});

//update todo

describe("Update todo", () => {
  it("Update one todo", (done) => {
    const newTodo = {
      task: "edited",
      due_date: "2022/02/02",
    };
    request(sails.hooks.http.app)
      .put(`/api/v1/todo/${todo_id}`)
      .set('cookie', cookie)
      .send(newTodo)
      .expect(200)
      .end((err) => {
        done(err);
      });
  });
});

// delete todo

describe("Delete todo", () => {
  it("Delete one todo", (done) => {
    request(sails.hooks.http.app)
      .delete(`/api/v1/todo/${for_delete}`)
      .set('cookie', cookie)
      .expect(200)
      .end((err) => {
        done(err);
      });
  });
});
