export class User {
  protected name: string; // public|protected|private
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

class Maneger extends User {
  public getName(): string {
    return `Maneger: ${this.name}`;
  }
}

const manager1 = new Maneger("maneger1", "maneger1@gmail.com", true);
console.log(manager1);
console.log(manager1.getName());
