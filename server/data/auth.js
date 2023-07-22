let users = [
  {
    id: "1",
    username: "bella",
    password: "1234",
    name: "BellaJin",
    email: "bella@gmail.com",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
  {
    id: "2",
    username: "ellie",
    password: "1234",
    name: "Ellie",
    email: "ellie@gmail.com",
  },
];
export async function findByUsername(username) {
  return users.find((user) => user.username === username);
}

export async function findById(id) {
  return users.find((user) => user.id === id);
}

export async function createUser(user) {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  return created.id;
}
