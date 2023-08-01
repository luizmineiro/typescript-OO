export class Address {
  private address: string = "";
  private zipCode: string = "";
  private number?: number;
  private static defaultCepValidation = 75000000;

  public setAddress(address: string): void {
    if (address.length < 3) {
      throw new Error("invalid address");
    }
    this.address = address;
  }

  public getAddress(): string {
    return this.address;
  }

  public setzipCode(zipCode: string) {
    this.zipCode = zipCode;
  }

  public getzipCode(): string {
    return this.zipCode.replace(/\D/g, "");
  }

  public static isCepValid(zipCode: string): boolean {
    return parseInt(zipCode.replace(/\D/g, "")) > Address.defaultCepValidation;
  }
}

console.log(Address.isCepValid("75605-987"));
console.log(Address.isCepValid("74605-987"));
