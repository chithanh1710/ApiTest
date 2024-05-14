const fs = require("fs");
const users = JSON.parse(
  fs.readFileSync("./dev-data/data/users.json", "utf-8")
);

exports.checkID = (req, res, next, val) => {
  console.log(`User id: ${val}`);
  const user = users.find((item) => item["_id"] === req.params.id);
  if (!user) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  next();
};

exports.getAllUser = (req, res) => {
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: users.length,
    data: {
      users,
    },
  });
};

exports.getUser = (req, res) => {
  const user = users.find((item) => item["_id"] === req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};

exports.createUser = (req, res) => {
  const newId = users[users.length - 1].id + 1;
  const newUser = Object.assign(
    {
      id: newId,
    },
    req.body
  );
  users.push(newUser);
  fs.writeFile(
    "./dev-data/data/users-simple.json",
    JSON.stringify(users),
    (err) => {
      if (err) {
        console.error();
      }
      res.status(201).json({
        status: "success",
        data: {
          user: newUser,
        },
      });
    }
  );
};

exports.updateUser = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tour: `<Updated tour here...>`,
    },
  });
};

exports.deleteUser = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};
