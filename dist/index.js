"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// functionの型 ----------------------------------------------
function add(a, b) {
    return a + b;
}
console.log(add(1, 3));
// 型指定 ----------------------------------------------
let hasValue = true;
let count = 10;
let float = 2.14;
let negative = -0.21;
let single = "hello";
let double = "hello";
let back = `hello`;
// 型注釈、型推論 ----------------------------------------------
// 型推論を基本使って型推論できないものは型注釈を使う
// :booleanなどのついているものが型注釈
let hasValues = true;
// 型注釈を付けなくても推測してくれるものが型推論
let word = `hello`;
// オブジェクトに型を付ける方法 ----------------------------------------------
const person = {
    name: "Jack",
    age: 18,
};
console.log(person.name);
// 配列に型を付けるArray型はこう使う ----------------------------------------------
const fruits = ["Apple", "Banana", "Grape"];
const fruit = fruits[0];
// fruitsはstringだからreduceやforEachは使えない
// fruit.reduce();
// 複数ある場合はanyまたは型推論で対応
const fruits1 = ["Apple", "Banana", "Grape", 1];
// Union型
const fruits2 = ["Apple", "Banana", "Grape", 1];
// Tuple型を使用して、決まった内容の配列を作る方法 ----------------------------------------------
// 配列で決まったものがある場合Tupleを使う
const book = ["business", 1500, false];
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
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
coffee.size = CoffeeSize.SHORT;
console.log(CoffeeSize.SHORT);
// どんな型にもなるany型について知る ----------------------------------------------
let anything = true;
anything = "hello";
anything = ["hello", 3];
anything = {};
anything.nice = "hey man";
console.log(anything.nice);
let banana = "banana";
banana = anything;
// Union型を使って複数の型 を使う方法 ----------------------------------------------
// 数字も文字もbooleanも入れたい
let unionType = 19;
// 配列を作る場合はカッコ()をつける
let unionTypes = [21, "hello"];
// Literal型を使って特定の値のみを取り扱う方法 ----------------------------------------------
// appleを定義したらappleしか受け付けない,
// またconstで定義したものは型推論でリテラル型になる
const apple = "apple";
const pinapple = true;
// 肩注釈で2,3くらいならUnionとリテラル型を組み合わせる
let clothSize = "large";
const cloth = {
    color: "white",
    size: "medium",
};
let clothSizes = "large";
const cloth1 = {
    color: "white",
    size: "medium",
};
// typeエイリアスを使って複雑な型を変数のように扱う ----------------------------------------------
// ＊関数に型を適応させる方法で型をつける場所はパラメータ-と戻り値につける
// ＊またパラメーターは引数の後につけ、戻り値はパラメーター の後につける
function plus(num1, num2) {
    return num1 + num2;
}
// 関数の戻り値にvoid型を使う方法 ----------------------------------------------
// *void方は何も返さない
// *基本undefindは使わない、voidかanyを使う
function sayHello() {
    console.log("hey man");
}
console.log(sayHello());
let tmp1;
// undefined型とnull型についての補足 ----------------------------------------------
function sayHello1() {
    console.log("hey man");
}
console.log(sayHello1());
let tmp;
// let tmpNull: null = undefined;
// 関数型を使って、特定の関数のみを代入できる変数を作る ----------------------------------------------
const anotherAdd = function plus(num1, num2) {
    return num1 + num2;
};
const doubleNumber = (number) => number * 2;
const doubleNumber1 = (number) => number * 2;
// callback関数の型はこう書く ----------------------------------------------
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, (doubleNum) => {
    return doubleNum;
});
// unknown型を使って、柔軟でanyよりも厳しい型を定義する方法 ----------------------------------------------
let unknownInut;
let anyInput;
let text;
unknownInut = "hello";
unknownInut = 21;
unknownInut = true;
text = anyInput;
// if文をかますことでunknownが使える
if (typeof unknownInut === "string") {
    text = unknownInut;
}
// never型を使って、起こり得ない値の型を使用する方法    ----------------------------------------------
function error(message) {
    throw new Error(message);
}
