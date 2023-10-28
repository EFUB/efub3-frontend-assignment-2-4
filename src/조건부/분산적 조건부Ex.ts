type StringNumberSwitch2<T> = T extends number ? string : number;

let c: StringNumberSwitch2<number | string>;
