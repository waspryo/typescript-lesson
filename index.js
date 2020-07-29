// functionの型 ----------------------------------------------
function add(a, b) {
    return a + b;
}
console.log(add(1, 3));
// 型指定 ----------------------------------------------
var hasValue = true;
var count = 10;
var float = 2.14;
var negative = -0.21;
var single = "hello";
var double = "hello";
var back = "hello";
// 型注釈、型推論 ----------------------------------------------
// 型推論を基本使って型推論できないものは型注釈を使う
// :booleanなどのついているものが型注釈
var hasValues = true;
// 型注釈を付けなくても推測してくれるものが型推論
var word = "hello";
// オブジェクトに型を付ける方法 ----------------------------------------------
var person = {
    name: "Jack",
    age: 18
};
console.log(person.gender);
