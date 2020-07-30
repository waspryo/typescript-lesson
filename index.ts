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
const fruits: string[] = ["Apple", "Banana", "Grape"];
const fruit = fruits[0];
// fruitsはstringだからreduceやforEachは使えない
// fruit.reduce();

// 複数ある場合はanyまたは型推論で対応
const fruits1: any = ["Apple", "Banana", "Grape", 1];
// Union型
const fruits2 = ["Apple", "Banana", "Grape", 1];

// Tuple型を使用して、決まった内容の配列を作る方法 ----------------------------------------------

// 配列で決まったものがある場合Tupleを使う
const book: [string, number, boolean] = ["business", 1500, false];
book.push(21);
console.log(book);

// Enumを使って、特定のまとまったグループのみを受け入れる列挙型を使う方法 ----------------------------------------------

// const CoffeeSize = {
//   SHORT: "SHORT",
//   TALL: "TALL",
//   GRANDE: "GRANDE",
//   VENTI: "VENTI",
// };

// enum CoffeeSize {
//   SHORT = "SHORT",
//   TALL = "TALL",
//   GRANDE = "GRANDE",
//   VENTI = "VENTI",
// }
enum CoffeeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI,
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL,
};
coffee.size = CoffeeSize.SHORT;
console.log(CoffeeSize.SHORT);

// どんな型にもなるany型について知る ----------------------------------------------

let anything: any = true;
anything = "hello";
anything = ["hello", 3];
anything = {};
anything.nice = "hey man";
console.log(anything.nice);
let banana = "banana";
banana = anything;
