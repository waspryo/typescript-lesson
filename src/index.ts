import { type } from "os";

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

// Union型を使って複数の型 を使う方法 ----------------------------------------------

// 数字も文字もbooleanも入れたい
let unionType: number | string = 19;

// 配列を作る場合はカッコ()をつける
let unionTypes: (number | string)[] = [21, "hello"];

// Literal型を使って特定の値のみを取り扱う方法 ----------------------------------------------

// appleを定義したらappleしか受け付けない,
// またconstで定義したものは型推論でリテラル型になる

const apple: "apple" = "apple";
const pinapple: true = true;

// 肩注釈で2,3くらいならUnionとリテラル型を組み合わせる

let clothSize: "small" | "medium" | "large" = "large";
const cloth: {
  color: string;
  size: "small" | "medium" | "large";
} = {
  color: "white",
  size: "medium",
};

// typeエイリアスを使って複雑な型を変数のように扱う ----------------------------------------------
// エイリアスは別名と言う

// typeと打つとletやconstみたいに扱える
type ClothSize = "small" | "medium" | "large";

let clothSizes: ClothSize = "large";
const cloth1: {
  color: string;
  size: ClothSize;
} = {
  color: "white",
  size: "medium",
};

// typeエイリアスを使って複雑な型を変数のように扱う ----------------------------------------------

// ＊関数に型を適応させる方法で型をつける場所はパラメータ-と戻り値につける
// ＊またパラメーターは引数の後につけ、戻り値はパラメーター の後につける
function plus(num1: number, num2: number): number | string {
  return num1 + num2;
}

// 関数の戻り値にvoid型を使う方法 ----------------------------------------------

// *void方は何も返さない
// *基本undefindは使わない、voidかanyを使う

function sayHello(): void {
  console.log("hey man");
}

console.log(sayHello());
let tmp1: undefined;

// undefined型とnull型についての補足 ----------------------------------------------

function sayHello1(): void {
  console.log("hey man");
}

console.log(sayHello1());
let tmp: undefined;
// let tmpNull: null = undefined;

// 関数型を使って、特定の関数のみを代入できる変数を作る ----------------------------------------------
const anotherAdd: (n1: number, n2: number) => number = function plus(
  num1: number,
  num2: number
) {
  return num1 + num2;
};

const doubleNumber = (number: number): number => number * 2;
const doubleNumber1: (number: number) => number = (number) => number * 2;

// callback関数の型はこう書く ----------------------------------------------

function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}
doubleAndHandle(21, (doubleNum) => {
  return doubleNum;
});

// unknown型を使って、柔軟でanyよりも厳しい型を定義する方法 ----------------------------------------------
let unknownInut: unknown;
let anyInput: any;
let text: string;
unknownInut = "hello";
unknownInut = 21;
unknownInut = true;
text = anyInput;

// if文をかますことでunknownが使える
if (typeof unknownInut === "string") {
  text = unknownInut;
}

// never型を使って、起こり得ない値の型を使用する方法    ----------------------------------------------

function error(message: string): never {
  throw new Error(message);
}

//  interfaceはこう使う！    ----------------------------------------------

//*== 変数みたいなのにまとめたのがinterface(オブジェクトの表面を表したもの)
//*==typeとinterfaceの違い
// interfaceはオブジェクトのみ
// typeエイリアスは全部いける

// typeエイリアスで書く場合、|のユニオンが使える
type season = {
  spring: string;
  summuer: string;
  autumn: string;
  winter: string;
};

// interfaceで書く場合、オブジェクトだと一発でわかる
interface Human {
  name: string;
  age: number;
}

const human: Human = {
  name: "Quill",
  age: 39,
};

let developer: Human;
