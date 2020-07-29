// functionの型 ----------------------------------------------
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(1, 3));

// 型指定 ----------------------------------------------
let hasValue: boolean = true;
let count: number = 10;
let float: number = 2.14;
let negative: number = -0.21;
let single: string = "hello";
let double: string = "hello";
let back: string = `hello`;

// 型注釈、型推論 ----------------------------------------------
// 型推論を基本使って型推論できないものは型注釈を使う

// :booleanなどのついているものが型注釈
let hasValues: boolean = true;
// 型注釈を付けなくても推測してくれるものが型推論
let word = `hello`;

// オブジェクトに型を付ける方法 ----------------------------------------------

const person: {
  name: string;
  age: number;
} = {
  name: "Jack",
  age: 18,
};
console.log(person.name);

// 配列に型を付けるArray型はこう使う ----------------------------------------------
