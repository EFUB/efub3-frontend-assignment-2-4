type ReturnType<T extends {...args: any} => any> = T extends{
    ...args: any
} => infer R
    ? R
    : never;

function funcA(){
    return "hello";
}

function funcB(){
    return 10;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;