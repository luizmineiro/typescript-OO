export class User {
  private name: string; // public|protected|private
  private email: string;
  private address: Address[] = [];
  private active: boolean;

  constructor(name: string, email: string, active: boolean = false) {
    this.name = name;
    this.email = email;
    this.active = active;
  }

  public addAddress(newAddress: Address): void {
    this.address.push(newAddress);
  }

  public changeName(newName: string): void {
    if (this.name.length < 3) {
      throw new Error("Invalid name");
    }
    this.name = newName;
  }

  public getName(): string {
    return this.name;
  }
}

const user1 = new User("User1", "user1@gmail.com");
console.log(user1);
user1.changeName("User changed name");
console.log(user1.getName());
