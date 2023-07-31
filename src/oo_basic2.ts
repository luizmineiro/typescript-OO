class Address {
  constructor(
    public adress: string,
    public zipCode: string,
    public number?: number
  ) {}
}

export class User {
  name: string;
  email: string;
  active: boolean;
  address: Address;

  constructor(
    name: string,
    email: string,
    address: Address,
    active: boolean = false
  ) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.active = active;
  }
}

const address1 = new Address("Rua X", "64210-220", 235);
const user1 = new User("User1", "user1@gmail.com", address1);

console.log(user1);

