var database = [
  {
    id: 1,
    name: "cindy",
    email: "cindy123@gmail.com",
    password: "cindy123!",
  },
  {
    id: 2,
    name: "alex",
    email: "alex123@gmail.com",
    password: "alex123!",
  },
];

const userModel = {
  findOne: (email) => {
    const user = database.find((user) => user.email === email);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with email: ${email}`);
  },
  findById: (id) => {
    const user = database.find((user) => user.id === id);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with id: ${id}`);
  },
  createUser: (name, email, password) => {
    database.push({
      id: database.length + 1,
      name: name,
      email: email,
      password: password
    });
  }
};

module.exports = { database, userModel };
