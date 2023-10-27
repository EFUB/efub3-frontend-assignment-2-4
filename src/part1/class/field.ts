class Employee_ {
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

  work() {
    console.log(`${this.name}이 일함`);
  }
}
