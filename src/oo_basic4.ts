class Address {
  constructor(
    public adress: string,
    public readonly zipCode: string,
    public number?: number
  ) {}
}

const address1 = new Address("Rua X", "64210-220", 235);
console.log(address1);
// address1.zipCode = "21345-753";
// console.log(address1);

