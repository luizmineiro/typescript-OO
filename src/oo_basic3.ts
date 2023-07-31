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
  address: Address[] = [];
  active: boolean;

  constructor(name: string, email: string, active: boolean = false) {
    this.name = name;
    this.email = email;
    this.active = active;
  }

  addAddress(newAddress: Address): void {
    this.address.push(newAddress);
  }

  getAddress(): Address[] {
    return this.address
  }
}

const address1 = new Address("Rua X", "64210-220", 235);
const address2 = new Address("Rua W", "64710-660", 189);
const user1 = new User("User1", "user1@gmail.com");
console.log(user1);

user1.addAddress(address1);
user1.addAddress(address2);
console.log(user1);

