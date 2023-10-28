interface ChracterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}
class Character implements ChracterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}
  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}
