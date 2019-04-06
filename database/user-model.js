const db = require("./dbConfig")

module.exports = {
  add
}

async function add(user) {
  const [id] = await db("users").insert(user)
  return id
}
