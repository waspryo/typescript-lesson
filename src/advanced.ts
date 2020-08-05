// AかつBのように、&を用いてインターセクション型を定義する方法
type Engineer = {
  name: string;
  role: string;
};
type Blogger = {
  name: string;
  follower: number;
};
// name role かつfollowerがないとダメ
// interfaceで書くこともできる
// type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends Engineer, Blogger {}

const quill1: EngineerBlogger = {
  name: 'Quill',
  role: 'front-end',
  follower: 21,
};

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

// 条件文を使って型を絞り込む、３つのType guard

// typeof演算子

function toUpperCase(x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
}

// in演算子
type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
  // nameがどちらも持っているからアクセスできる
  console.log(nomadWorker.name);
  // 左にプロパティ名、キーの名前、右側にオブジェクト
  if ('role' in nomadWorker) {
    console.log(nomadWorker.role);
  }
}

// instanseOf演算子
class Dog {
  speak() {
    console.log('bow-wow');
  }
}

class Bird {
  speak() {
    console.log('tweet-tweet ');
  }
  fly() {
    console.log('flutter');
  }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  if (pet instanceof Bird) {
    pet.fly();
  }
}
havePet(new Bird());
