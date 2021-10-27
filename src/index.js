var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);

// エクスクラメーションマーク 1つの場合
// if(!true) {
//   alert("trueです");
// } else {
//   alert("falseです");
// }

// var a;
// if (a) {
//   alert("私は" + a + "です");
// } else {
//   alert("定義されていません");
// }

// エクスクラメーションマーク 2つの場合
// if(!!true) {
//     alert("trueです");
//   } else {
//     alert("falseです");
//   }

let val2 = "let変数";
console.log(val2);

val2 = "let変数を上書き";
console.log(val2);

// let val2 = "let変数を再宣言";

const val3 = "const変数";
console.log(val3);

// val3 = "const変数の上書き";

// const val3 = "const変数の再宣言";

//オブジェクトを定義
const obj1 = {
  name: "主田",
  age: 24
};
console.log(obj1);

//プロパティ値を変更
obj1.name = "nishida";
console.log(obj1);

//プロパティ値追加
obj1.address = "Tokyo";
console.log(obj1);

const arr1 = ["dog", "cat"];
console.log(arr1);

//1つ目の値を変更
arr1[0] = "bird";
console.log(arr1);

//値を追加
arr1.push("monkey");
console.log(arr1);

//名前と年齢を格納した変数
const name = "渡邉";
const age = 24;

const message = `私の名前は${name}です。年齢は${age}です。`;
console.log(message);

//こんにちはと返すだけの関数
function sayHello() {
  return "こんにちは";
}

//月の数字を格納した変数
const month = 1;

//テンプレート文字列の中で関数の呼び出しと掛け算を実行
const messageToYou = `皆さん${sayHello()}。今日から${month * 3}月です。`;
console.log(messageToYou);
