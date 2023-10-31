interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

interface Map_<V> {
  [key: string]: V;
}

let stringMap: Map_<string> = {
  key: "value",
};

let booleanMap: Map_<boolean> = {
  key: true,
};

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "string",
};

class NumberList {
  constructor(private list: number[]) {}
  push(data: number) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

const numberList = new NumberList([1, 2, 3]);

class StringList {
  constructor(private list: string[]) {}
  push(data: string) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

const stringList = new StringList(["1", "2", "3"]);

class List<T> {
  constructor(private list: T[]) {}
  push(data: T) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

const numberList_ = new List([1, 2, 3]);
const stringList_ = new List(["1", "2"]);
