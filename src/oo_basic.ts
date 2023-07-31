class User {
  name: string;
  email: string;
  active: boolean;

  constructor(name: string, email: string, active: boolean = false) {
    this.name = name;
    this.email = email;
    this.active = active;
  }
}

const joao = new User("João", "jluizmineiro@gmail.com");
console.log(joao);

const user2 = new User("User2", "user2@gmail.com", true);
console.log(user2);

const user3 = new User("User3", "user3@gmail.com");
console.log(user3);
