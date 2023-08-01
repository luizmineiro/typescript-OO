export class User {
  protected name: string; // public|protected|private
  private email: string;
  private active: boolean;

  constructor(name: string, email: string, active: boolean = false) {
    this.name = name;
    this.email = email;
    this.active = active;
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

  public getNumber(): number {
    return 123;
  }
}

class Manager extends User {
  constructor(name: string, email: string, active: boolean, code: string) {
    console.log(code);
    super(name, email, active);
  }

  public getName(): string {
    return `Maneger: ${this.name}`;
  }

  public getNumber(): number {
    return super.getNumber() + 10;
  }
}

const manager1 = new Manager("Manager1", "manager1@email.com", true, "manager");
console.log(manager1.getNumber());
